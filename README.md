# 🩸 Blood Donation Management System

A full-stack web application designed to streamline the process of blood donation, donor registration, and availability tracking. This system helps connect donors, recipients, and administrators efficiently.

---

## 📌 Features

* 👤 **User Registration & Login**

  * Donors can register using personal details
  * Secure login using Donor ID and Date of Birth

* 🩸 **Donor Management**

  * Add, view, and manage donor details
  * Track blood group availability

* 📊 **Admin Dashboard**

  * Manage donors and blood records
  * View system data in an organized manner

* 🔍 **Blood Availability Check**

  * Users can search for available blood groups

* 📅 **Blood Donation Camp Info**

  * Display upcoming donation camps

* 🖼️ **Gallery Section**

  * Show images related to donation activities

* 📞 **Contact & About Pages**

  * Provide information about the system and team

---

## 🛠️ Tech Stack

### Frontend:

* HTML5
* CSS3
* JavaScript
* AngularJS

### Backend:

* Node.js
* Express.js

### Database:

* MySQL

---

## 📂 Project Structure

```
├── HTML Files (UI Pages)
│   ├── index.html
│   ├── registration.html
│   ├── donor_login.html
│   ├── userdashboard.html
│   ├── admindashboard.html
│   └── more...
│
├── CSS Files
│   ├── styles.css
│   ├── index.css
│   └── more...
│
├── Backend
│   ├── server.js
│   ├── insertData.js
│   ├── createdatabase.js
│
├── Assets
│   ├── Images
│   └── Logos
│
├── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/blood-donation-system.git
cd blood-donation-system
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup MySQL Database

* Create a database in MySQL
* Run:

```bash
node createdatabase.js
```

### 4️⃣ Insert Sample Data (Optional)

```bash
node insertData.js
```

### 5️⃣ Run the server

```bash
node server.js
```

### 6️⃣ Open in browser

```
http://localhost:3000
```

---

## 🔐 Authentication Logic

* Users log in using:

  * **Donor ID**
  * **Date of Birth**
* Backend verifies credentials using MySQL database

---

## 🎯 Project Objective

The main goal of this project is to:

* Simplify blood donation processes
* Maintain a centralized donor database
* Provide quick access to blood availability
* Support emergency situations efficiently

---

## 🚀 Future Enhancements

* OTP-based authentication
* Real-time blood request alerts
* Mobile app integration
* Location-based donor search
* AI-based demand prediction

---

## 👨‍💻 Author

**Ronak Vishanwani**
MBA Tech (Computer Engineering)
3rd Year 


