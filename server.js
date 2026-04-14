const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files (like registration.html and donor_login.html)
app.use(express.static(__dirname));

// MySQL DB connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blood_donation"
});

db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

// Serve registration form by default
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "registration.html"));
});

// Donor Registration Endpoint
app.post("/register", (req, res) => {
  const data = req.body;

  const sql = `
    INSERT INTO blooddonors (
      first_name, middle_name, last_name, dob, age, gender, blood_group, haemoglobin, weight,
      email, mobile, phone, address, city, state, pin_code,
      emergency_name, emergency_number,
      previous_donation, medication, illness,
      weight_loss, diarrhea, swollen_glands, fever, tattoo
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.firstName, data.middleName, data.lastName, data.dob, data.age, data.gender, data.bloodGroup, data.haemoglobin, data.weight,
    data.email, data.mobile, data.phone || "", data.address, data.city, data.state, data.pinCode,
    data.emergencyName, data.emergencyNumber,
    data.previousDonation, data.medication, data.illness,
    data.weightLoss, data.diarrhea, data.swollenGlands, data.fever, data.tattoo
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      res.status(500).send("Failed to insert data");
      return;
    }
    res.status(200).send("Donor registered successfully");
  });
});

// Donor Login Endpoint
app.post("/login", (req, res) => {
  const { donorId, dob } = req.body;

  const sql = `SELECT * FROM blooddonors WHERE id = ? AND dob = ?`;

  db.query(sql, [donorId, dob], (err, results) => {
    if (err) {
      console.error("Login query error:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }

    if (results.length > 0) {
      res.status(200).json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
