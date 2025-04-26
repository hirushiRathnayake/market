# 🛒 Marketplace Website

A modern marketplace platform built with **React.js** (frontend) and **Spring Boot** (backend).

---

## 🚀 Tech Stack
- **Frontend:** React.js, Axios, Tailwind CSS (optional)
- **Backend:** Spring Boot, Spring Security, MySQL
- **Auth:** JWT Token-based Authentication
- **APIs:** RESTful

---

## 📦 Features
- User signup/login (Buyer & Seller roles)
- Product listings and search
- Shopping cart and checkout
- Order management
- Admin panel

---

## ⚙️ Setup

1. **Clone the project**
   ```bash
   git clone https://github.com/your-username/marketplace-website.git
   ```

2. **Frontend**
   ```bash
   cd frontend
   npm install
   npm start
   ```

3. **Backend**
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

4. **Environment Variables**
   - `.env` (Frontend):  
     ```
     REACT_APP_API_URL=http://localhost:8080/api
     ```
   - `application.properties` (Backend):  
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/db_name
     spring.datasource.username=db_user
     spring.datasource.password=db_password
     jwt.secret=your_secret_key
     ```

