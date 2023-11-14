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
            const passwordMatch = await bcrypt.compare(password, user.password);

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
      const sql = "INSERT INTO pets (`name`, `type`, `breed`, `description`, `age`, `gender`, `price`, `image` , `available`) VALUES (?)";
      const values = [name, type, breed, description, age, gender, price, fileUrl , "yes"];
  
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
    const sql = "SELECT * FROM pets WHERE available = 'yes'";
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Database query error: ', err);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });


  app.get('/cats', (req, res) => {
    const sql = "SELECT * FROM pets WHERE type = 'Cat' and available = 'yes'";
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Database query error: ', err);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });

  app.get('/dogs', (req, res) => {
    const sql = 'SELECT * FROM pets WHERE `TYPE` = "Dog"';
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Database query error: ', err);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });

  app.get('/birds', (req, res) => {
    const sql = 'SELECT * FROM pets WHERE `TYPE` = "Bird"';
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Database query error: ', err);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });


  app.get('/rabbit', (req, res) => {
    const sql = 'SELECT * FROM pets WHERE `TYPE` = "Rabbit"';
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Database query error: ', err);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });
  app.get('/guinea', (req, res) => {
    const sql = 'SELECT * FROM pets WHERE `TYPE` = "Guinea Pig"';
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Database query error: ', err);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });
  app.get('/horse', (req, res) => {
    const sql = 'SELECT * FROM pets WHERE `TYPE` = "Horse"';
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Database query error: ', err);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });
  app.get('/tortoise', (req, res) => {
    const sql = 'SELECT * FROM pets WHERE `TYPE` = "Tortoise"';
  
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Database query error: ', err);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });

  app.get('/petsFilter', (req, res) => {
    const { breed , age , gender , type} = req.query;

    let sql = "SELECT * from pets WHERE breed = ? AND age = ? AND gender = ?";

    const values = [breed,age,gender];

    if(type !== ""){
      if(type === "others"){
        sql += " AND type NOT IN ('Dog','Cat','Birds')";
      }
      else{
        sql += ' AND type = ?';
        values.push(type);
      }
    }

    db.query(sql, values, (err, data) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'Error fetching pet data' });
      } else {
        res.json(data);
      }
    });
  });

  app.get("/pets/:id", (req, res) => {
    const petId = req.params.id;
    const query = "SELECT * FROM pets WHERE id = ?";
  
    db.query(query, [petId], (err, results) => { // Change `res` to `results`
      if (err) {
        console.error("Database query error: " + err);
        res.status(500).json({ error: "Error fetching pet data" });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: "Pet not found" });
        } else {
          res.json(results[0]);
        }
      }
    });
  });
  
  app.get("/allAdoptions",(req,res) => {
    const query = "SELECT * from adoptions";

    db.query(query, (err, results) => { // Change `res` to `results`
      if (err) {
        console.error("Database query error: " + err);
        res.status(500).json({ error: "Error fetching adoption data" });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: "Adoptions not found" });
        } else {
          res.json(results);
        }
      }
    });
  })

  app.get("/adoptionsRequests",(req,res) => {
    const query = "SELECT * from adoptions WHERE status = 'Pending' or status = 'Approved'";

    db.query(query, (err, results) => { // Change `res` to `results`
      if (err) {
        console.error("Database query error: " + err);
        res.status(500).json({ error: "Error fetching adoption data" });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: "Adoptions not found" });
        } else {
          res.json(results);
        }
      }
    });
  })

  app.get("/allUsers",(req,res) => {
    const query = "SELECT * from users where role = 'user'";

    db.query(query, (err, results) => { // Change `res` to `results`
      if (err) {
        console.error("Database query error: " + err);
        res.status(500).json({ error: "Error fetching user data" });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: "Users not found" });
        } else {
          res.json(results);
        }
      }
    });
  })

  app.post("/addOrder", (req, res) => {
    const { name, email, contact, address, pName } = req.body;
    const currentDate = new Date();
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = currentDate.toLocaleDateString("en-GB", options);
  
    const sql =
    "INSERT INTO adoptions (`adopter`, `petname`, `contact`, `address`, `email`, `date`, `status`) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [name, pName, contact, address, email, formattedDate, "Pending"];
  
    // Insert into adoptions table
    db.query(sql, values, async (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Error adding adoption" });
      }
      const updatePetSql = "UPDATE pets SET available = ? WHERE name = ?";
      const updatePetValues = ["no", pName];
  
      db.query(updatePetSql, updatePetValues, (updateErr) => {
        if (updateErr) {
          return res.status(500).json({ error: "Error updating pet availability" });
        }
  
        return res.status(200).json({ message: "Adoption added successfully.", data });
      });
    });
  });
  

  app.get("/userProfile", (req, res) => {
    const userName = req.query.username;
    const query = "SELECT * FROM users WHERE name = ?";

    //console.log(userName)
  
    db.query(query, [userName], (err, results) => { // Change `res` to `results`
      if (err) {
        console.error("Database query error: " + err);
        res.status(500).json({ error: "Error fetching user data" });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: "User not found" });
        } else {
          res.json(results[0]);
        }
      }
    });
  }); 

  app.get("/recent", (req, res) => {
    const userName = req.query.username;
    const query = "SELECT * FROM adoptions WHERE adopter = ?";

    //console.log(userName)
  
    db.query(query, [userName], (err, results) => { // Change `res` to `results`
      if (err) {
        console.error("Database query error: " + err);
        res.status(500).json({ error: "Error fetching user data" });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: "User not found" });
        } else {
          res.json(results);
        }
      }
    });
  }); 

  app.delete("/deleteAdoption/:id", (req, res) => {
    const adoptionId = req.params.id;
  
    // SQL query to delete the adoption with the given ID
    const sql = "DELETE FROM adoptions WHERE id = ?";
  
    // Execute the SQL query
    db.query(sql, [adoptionId], (err, result) => {
      if (err) {
        console.error("Error deleting adoption:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        console.log("Adoption deleted successfully");
        res.status(200).json({ message: "Adoption canceled successfully" });
      }
    });
  });

  app.put('/updateStatus/:id', (req, res) => {
  const itemId = req.params.id;
  const newStatus = req.body.status;

  // Your database update logic here
  const query = 'UPDATE adoptions SET status = ? WHERE id = ?';

  db.query(query, [newStatus, itemId], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Error updating status' });
    } else {
      res.json({ message: 'Status updated successfully', affectedRows: results.affectedRows });
    }
  });
});
  
  
app.listen(3001, () => {
    console.log("listening at 3001");
});
