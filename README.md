# 🏥 Doctor–Patient Appointment Scheduling Backend (NestJS + MongoDB + JWT)

A complete **Doctor–Patient Appointment Scheduling System** built with **NestJS**, **MongoDB**, **JWT Authentication**, and **Swagger API Documentation**.  
It supports secure **role-based access** for Admin, Doctor, and Patient, allowing efficient appointment booking, management, and file uploads.

---

## ⚙️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Backend Framework** | NestJS (Node.js + TypeScript) |
| **Database** | MongoDB with Mongoose ODM |
| **Authentication** | JWT (JSON Web Token) + bcrypt |
| **Validation** | class-validator + DTOs |
| **File Uploads** | Multer (PDF/JPG/PNG) |
| **API Documentation** | Swagger (OpenAPI) |
| **Environment Config** | dotenv |
| **Containerization (optional)** | Docker + docker-compose |

---

## ✨ Core Features

| Feature | Description |
|----------|--------------|
| 👩‍⚕️ **Role-Based Login** | Secure authentication for Admin, Doctor, and Patient using JWT |
| 🩺 **Appointment Management** | Patients can book, reschedule, or cancel appointments; Doctors can manage their schedule |
| 🕓 **Doctor Availability** | Doctors define working hours and available slots |
| 📄 **Prescription Uploads** | Doctors upload prescriptions (PDF/JPG/PNG) securely via Multer |
| 🔐 **Data Validation** | DTO-based validation ensures clean and safe API requests |
| 📘 **Swagger Docs** | Interactive API documentation available at `/api` |
| 🧱 **Modular Architecture** | Clean separation of concerns for scalability and maintainability |

---

## 🧩 Project Structure

```
doctor-appointment-backend/
├── src/
│   ├── auth/              # Authentication (JWT + bcrypt)
│   ├── users/             # User management & roles
│   ├── appointments/      # Appointment CRUD APIs
│   ├── availability/      # Doctor availability slots
│   ├── prescriptions/     # File uploads (Multer)
│   ├── common/            # Guards, decorators, helpers
│   ├── app.module.ts      # Root module
│   ├── main.ts            # App entry point
├── .env.example           # Environment variables sample
├── Dockerfile             # Docker setup (optional)
├── docker-compose.yml     # Mongo + API container setup
├── package.json
├── README.md
```

---

## 🚀 Quick Start (Local Setup)

### 1️⃣ Clone and install dependencies
```bash
git clone https://github.com/sreehari-r-pillai/doctor-appointment-backend.git
cd doctor-appointment-backend
npm install
```

### 2️⃣ Configure environment
Copy `.env.example` and rename it:
```bash
cp .env.example .env
```
Then update the MongoDB URL if needed.

### 3️⃣ Run development server
```bash
npm run start:dev
```
Server will start at:  
👉 http://localhost:3000  
Swagger Docs:  
👉 http://localhost:3000/api

---

## 🧰 Demo Accounts (after seeding)

| Role | Email | Password |
|------|--------|----------|
| 👨‍💼 Admin | admin@hospital.com | admin123 |
| 👩‍⚕️ Doctor | doctor@hospital.com | doc123 |
| 🧑‍🤝‍🧑 Patient | patient@hospital.com | pat123 |

---

## 🐳 (Optional) Run with Docker

If you added Docker support:

```bash
docker-compose up --build
```

This automatically starts:
- `MongoDB` at port **27017**
- `NestJS API` at port **3000**

---

## 🧠 API Highlights

| Category | Endpoint | Description |
|-----------|-----------|-------------|
| **Auth** | `POST /auth/register` | Register user (Admin/Doctor/Patient) |
|  | `POST /auth/login` | Login & get JWT token |
| **Appointments** | `POST /appointments` | Book appointment |
|  | `PATCH /appointments/:id/reschedule` | Reschedule appointment |
|  | `DELETE /appointments/:id` | Cancel appointment |
| **Availability** | `POST /availability/upsert` | Set available slots |
| **Prescriptions** | `POST /prescriptions/upload` | Upload prescription file |

---

## 🧪 Testing the API
Use Swagger Docs at:  
👉 **`http://localhost:3000/api`**  
You can interact with every endpoint directly from the UI.

---

## 🧱 Key Highlights
- 🔒 Secure JWT-based authentication  
- 🧩 Clean modular NestJS architecture  
- 🗂️ DTO + Validation ensures clean inputs  
- 🐳 Docker-ready for quick deployment  
- 🧠 Seed script for instant demo users  

---

## 📜 License
This project is open-source and available under the **MIT License**.  
Built with ❤️ using **NestJS + TypeScript + MongoDB**.

---

## 🌟 Star This Repo
If you like this project, please ⭐ it on GitHub — it helps others find it!

---

> **Author:** [@sreehari-r-pillai](https://github.com/sreehari-r-pillai)  
> 📧 Contact: *for learning, collaboration, or interview portfolio demonstration.*
