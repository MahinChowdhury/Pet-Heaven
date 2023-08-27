const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "petheaven"
});

//Regiter Requests
app.post('/register', async (req, res) => {
    try {
        const { username, email, password ,contactNum, address } = req.body;

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = "INSERT INTO users (`name`,`email`,`password`,`contactNumber`,`address`,`role`) VALUES (?)";
        const values = [username, email, hashedPassword,contactNum , address , 'user'];

        db.query(sql, [values], (err, data) => {
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


app.listen(3001, () => {
    console.log("listening at 3001");
});
