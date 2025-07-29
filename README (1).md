# 🩺 DocSpot – Seamless Appointment Booking for Health

**Category:** Full Stack Development  
**Skills Required:** HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, MongoDB

---

## 📌 Project Description

Booking a doctor's appointment has never been easier. **DocSpot** is a full-stack appointment booking platform that allows patients to book, manage, and track appointments with doctors efficiently. It simplifies the process for customers, doctors, and admins by providing a unified dashboard with real-time availability and appointment status.

This system eliminates the hassle of waiting in queues or calling reception desks and provides a smooth experience for both patients and healthcare professionals.

## 🎯 Scenario-Based Case Study

**👤 Customer :**
- Registers on the platform as a user.
- Browses a list of available doctors.
- Filters based on specialty, location, or time.
- Selects a doctor and books an appointment by choosing a slot and uploading relevant documents.
- Gets confirmation once the doctor approves the appointment.
- Views or manages appointments through the dashboard (reschedule/cancel).

**👨‍⚕️ Doctor :**
- Registers and awaits admin approval.
- Manages schedule, appointment status, and follow-ups through a dedicated dashboard.
- Updates appointment status (scheduled, completed, etc.).
- Provides visit summaries and follow-up instructions post consultation.

**🛡️ Admin:**
- Approves new doctor registrations.
- Oversees platform operations and ensures smooth workflow.
- Monitors user activity and resolves disputes.

---

## 🛠️ Tech Stack

| Layer       | Technology                             |
|-------------|-----------------------------------------|
| Frontend    | React.js, Axios, Bootstrap, Material UI, Ant Design |
| Backend     | Node.js, Express.js                    |
| Database    | MongoDB (Atlas)                        |
| Auth/Security | JWT, bcryptjs, dotenv, CORS         |
| Deployment  | Netlify (Frontend), Render (Backend)   |

---

## 🧠 Technical Architecture

DocSpot follows a **client-server architecture**:

- **Frontend (Client):**
  - Built using React.js with Bootstrap and Material UI for an intuitive and responsive interface.
  - Uses **Axios** to make HTTP requests to backend APIs.
  - React Router manages client-side routing for different user roles.

- **Backend (Server):**
  - Built using **Node.js and Express.js**, structured around MVC pattern.
  - Handles routing, validation, authentication, and authorization logic.
  - Connected to MongoDB using **Mongoose** for data modeling and database operations.

- **Database:**
  - **MongoDB Atlas** stores data for users, doctors, and appointments.
  - Follows schema design for scalable and efficient storage.

---

## 🧰 Features

### 👤 Users
- Register & login securely
- View doctors by specialty, availability, etc.
- Book & manage appointments
- Get real-time updates and notifications

### 🧑‍⚕️ Doctors
- Register and get admin approval
- Manage availability
- Accept/reject appointments
- View patient history and provide follow-ups

### 🛠️ Admin
- Approve/reject doctor registrations
- Monitor system operations
- Manage disputes & compliance


### 1. Clone the Repository

```bash
git clone https://github.com/Jangativishnupriya/docspot.git
cd docspot
