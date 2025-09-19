# Appaiam Backend

Backend server for the Appaiam website with contact form functionality.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Configure your environment variables in `.env`:
   - `EMAIL`: Your Gmail address
   - `EMAIL_PASSWORD`: Your Gmail app password (not regular password)
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: Server port (default: 5001)

## Gmail App Password Setup

1. Enable 2-factor authentication on your Gmail account
2. Go to Google Account settings
3. Navigate to Security > 2-Step Verification > App passwords
4. Generate an app password for "Mail"
5. Use this app password in your `.env` file

## Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Contact Form
- **POST** `/api/contact/submit`
  - Body: `{ name, email, message }`
  - Response: `{ message, success }`

### Health Check
- **GET** `/api/health`
  - Response: `{ message, timestamp }`

## Project Structure

```
backend/
├── config/
│   └── db.js              # Database configuration
├── controllers/
│   └── contactController.js # Contact form logic
├── routes/
│   ├── authRoutes.js      # Authentication routes
│   └── contactRoutes.js   # Contact form routes
├── utils/
│   └── sendEmail.js       # Email utility
├── .env.example           # Environment variables template
├── package.json           # Dependencies and scripts
├── README.md              # This file
└── server.js              # Main server file
```
