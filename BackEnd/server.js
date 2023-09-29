const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const sendResetEmail = require('./utilities/emailService');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const multer = require("multer");
const path = require("path");
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "petheaven"
});


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/petImages/'); // Uploads will be stored in the 'uploads' directory
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage });



console.log("Connected");


// // Protect routes using JWT
// app.use(
//     expressJwt({ secret: JWT_SECRET }).unless({
//       path: ['/login', '/register', '/forgot-password', '/reset-password']
//     })
//   );




//Regiter Requests
app.post('/register', async (req, res) => {
    try {
        const { username, email, password ,contactNum, address, role } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = "INSERT INTO users (`name`,`email`,`password`,`contactNumber`,`address`,`role`) VALUES (?)";
        const values = [username, email, hashedPassword,contactNum , address , role];

        db.query(sql, [values], async (err, data) => {
            if (err) {
                return res.status(500).json({ error: "Error registering user" });
            }
            return res.json(data);
        });
    } catch (error) {
        return res.status(500).json({ error: "Error registering user" });
    }
});

//Login Request
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log(email + ' ' + password);

        const sql = "SELECT * FROM users WHERE email = ?";
        db.query(sql, [email], async (err, data) => {
            if (err || data.length === 0) {
                return res.status(401).json({ error: "Invalid credentials" });
            }


            const user = data[0];
            var passwordMatch;
            if(user.role === "admin"){
                passwordMatch = (password === user.password);
            }
            else{
                passwordMatch = await bcrypt.compare(password, user.password);
            }

            if (!passwordMatch) {
                return res.status(401).json({ error: "Invalid credentials" });
            }

            // Generate JWT token
            // const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

            // return res.json({ token, user: { id: user.id, username: user.name, email: user.email, role: user.role } });

            return res.json(data);

        });
    } catch (error) {
        return res.status(500).json({ error: "Login error" });
    }
});

//Reset Password section

// Step 1: Generate Reset Token
app.post('/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;

        // Generate a random reset token
        const resetToken = crypto.randomBytes(20).toString('hex');

        // Store the reset token in the database
        const updateTokenQuery = "UPDATE users SET token = ? WHERE email = ?";
        db.query(updateTokenQuery, [resetToken, email], (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Error updating reset token" });
            }

            // Send reset email
            const resetLink = `http://localhost:3001/reset-password/${resetToken}`;
            sendResetEmail(email,resetLink);

            return res.json({ message: "Reset token sent to your email" });
        });
    } catch (error) {
        return res.status(500).json({ error: "Error requesting password reset" });
    }
});

// Step 2: Reset Password : form Page
app.get('/reset-password/:token', (req, res) => {
    const { token } = req.params;

    // Fetch user by reset token
    const checkTokenQuery = "SELECT * FROM users WHERE token = ?";
    db.query(checkTokenQuery, [token], (err, result) => {
        if (err || result.length === 0) {
            return res.status(400).json({ error: "Invalid token" }); // Return an error response
        }

        // Send the user data with the token to the client
        res.redirect(`http://localhost:5173/reset-password/${token}`);
    });
});


// Step 3: Reset Password : Update Password
app.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    // Fetch user by reset token
    const checkTokenQuery = "SELECT * FROM users WHERE token = ?";
    db.query(checkTokenQuery, [token], async (err, result) => {
        if (err || result.length === 0) {
            return res.status(400).send("Invalid token");
        }

        const user = result[0];
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update user's password and clear reset token
        const updatePasswordQuery = "UPDATE users SET password = ?, token = NULL WHERE id = ?";
        db.query(updatePasswordQuery, [hashedPassword, user.id], (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Error updating password" });
            }

            return res.json({ message: "Password reset successful" });
        });
    });
});


app.post('/addpet', upload.single('file'), async (req, res) => {
    try {
      const { name, type, breed, description, age, gender, price } = req.body;
      const { originalname, filename } = req.file;
  
      const fileUrl = `${filename}`;
  
      // Perform the database insertion here
      const sql = "INSERT INTO pets (`name`, `type`, `breed`, `description`, `age`, `gender`, `price`, `image`) VALUES (?)";
      const values = [name, type, breed, description, age, gender, price, fileUrl];
  
      db.query(sql, [values], async (err, data) => {
        if (err) {
          return res.status(500).json({ error: "Error adding pet" });
        }
        return res.status(200).json({ message: "Pet added successfully.", fileUrl });
      });
    } catch (error) {
      return res.status(500).json({ error: "Error adding pet" });
    }
  });

app.get('/pets', (req, res) => {
    const sql = 'SELECT * FROM pets';
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Database query error: ', err);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });
  

app.listen(3001, () => {
    console.log("listening at 3001");
});
