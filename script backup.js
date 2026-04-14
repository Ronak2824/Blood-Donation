const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blood_donation'
});

db.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

app.post('/register', (req, res) => {
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
    data.email, data.mobile, data.phone || '', data.address, data.city, data.state, data.pinCode,
    data.emergencyName, data.emergencyNumber,
    data.previousDonation, data.medication, data.illness,
    data.weightLoss || false, data.diarrhea || false, data.swollenGlands || false, data.fever || false, data.tattoo || false
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Insert error:', err);
      res.status(500).send('Failed to insert data');
      return;
    }
    res.status(200).send('Donor registered successfully');
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
