MERN Authentication System 🔐

A full-stack MERN (MongoDB, Express, React, Node.js) authentication system with social login, OTP password reset, and JWT-based protected routes.


Features

-> User Signup & Login

-> Google OAuth Login

-> LinkedIn OAuth Login

-> Forgot Password with OTP

-> Reset & Change Password

-> JWT Authentication

-> Protected Profile Page

-> Full frontend form validation

Folder Structure

mern-auth/

├── backend/   # Node.js + Express API

├── frontend/        # React.js frontend

└── README.md

1. Backend Folder
backend/
├── config/
│   └── db.js                # MongoDB connection
├── controllers/
│   ├── authController.js     # Signup, Login, Forgot/Reset Password, Social login
│   └── userController.js     # Profile & user-related operations
├── middleware/
│   ├── authMiddleware.js     # JWT token verification
│   └── validateMiddleware.js # Input validation
├── models/
│   └── User.js               # Mongoose User schema
├── routes/
│   ├── authRoutes.js         # Routes for authentication
│   └── userRoutes.js         # Routes for user/profile
├── utils/
│   └── sendOTPEmail.js       # OTP email sending utility
├── .env                      # Environment variables
├── server.js                 # Express server entry
└── package.json              # Backend dependencies & scripts


2. Frontend Folder
frontend/
├── public/
│   └── index.html            # Main HTML template
├── src/
│   ├── components/
│   │   ├── SignupForm.js
│   │   ├── LoginForm.js
│   │   ├── ForgotPassword.js
│   │   ├── ResetPassword.js
│   │   └── ChangePassword.js
│   ├── context/
│   │   └── AuthContext.js    # Auth state management
│   ├── pages/
│   │   ├── Home.js
│   │   └── Profile.js
│   ├── services/
│   │   └── api.js            # API calls to backend
│   ├── utils/
│   │   └── validate.js       # Frontend input validation functions
│   ├── App.js                # React Router + main App
│   └── index.js              # React DOM render
├── .env                      # Frontend environment variables
└── package.json              # Frontend dependencies & scripts


> Backend Setup
cd backend
npm install

> Create .env in /backend:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret

> Start server:
npm run dev

Backend runs on http://localhost:5000.


> Frontend Setup
cd frontend
npm install

> Create .env in /frontend:
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_LINKEDIN_CLIENT_ID=your_linkedin_client_id

> Start frontend:
npm start

Frontend runs on http://localhost:3000.


Usage
1. Signup: Fill all required fields and accept Terms & Conditions.
2. Login: Use email/phone or social login (Google/LinkedIn).
3. Forgot Password: Enter your email, receive OTP, reset password.
4. Change Password: Logged-in users can update their password.
5. Profile: Protected page displaying user details.


Tech Stack
* Backend: Node.js, Express.js, MongoDB, JWT, bcrypt, Nodemailer
* Frontend: React.js, React Router, Axios
* Social Login: Google OAuth, LinkedIn OAuth
  
License
MIT License © Amith1228
