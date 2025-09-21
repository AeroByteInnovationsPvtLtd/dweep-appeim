# 🚀 Dweep AppEIM - MERN Stack Application

A modern, production-ready MERN (MongoDB, Express.js, React, Node.js) stack application with comprehensive deployment configurations for multiple platforms.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Deployment](#deployment)
- [Environment Configuration](#environment-configuration)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Frontend
- ⚡ **Vite + React** - Fast development and optimized builds
- 🎨 **Material-UI** - Modern, responsive UI components
- 🌐 **React Router** - Client-side routing
- 📱 **Responsive Design** - Mobile-first approach
- 🔄 **Form Handling** - React Hook Form integration
- 🌍 **Internationalization** - Multi-language support
- 📊 **Analytics Ready** - Google Analytics integration

### Backend
- 🚀 **Express.js** - Fast, minimalist web framework
- 🗄️ **MongoDB** - NoSQL database with Mongoose ODM
- 📧 **Email Integration** - Nodemailer for contact forms
- 🔒 **Security** - CORS, security headers, input validation
- 🏥 **Health Checks** - Built-in health monitoring
- 📝 **Logging** - Comprehensive error handling
- 🔄 **Static File Serving** - Production-ready file serving

### DevOps & Deployment
- 🐳 **Docker Support** - Containerized deployment
- 🚀 **Multi-Platform Deployment** - Netlify, Vercel, Railway, Render
- 🔄 **CI/CD** - GitHub Actions workflows
- 📊 **Performance Monitoring** - Built-in health checks
- 🔧 **Environment Management** - Separate dev/prod configurations
- 📜 **Deployment Scripts** - Automated deployment tools

## 🛠️ Tech Stack

### Frontend
- **React** 17.0.2
- **Vite** 4.5.0
- **Material-UI** 4.10.1
- **React Router** 5.2.0
- **Axios** 1.12.2
- **React Hook Form** 7.62.0
- **AOS** (Animate On Scroll)
- **Swiper** 12.0.1

### Backend
- **Node.js** 18+
- **Express.js** 4.18.2
- **MongoDB** with Mongoose 7.5.0
- **Nodemailer** 6.9.7
- **CORS** 2.8.5
- **dotenv** 16.3.1

### Development Tools
- **Nodemon** - Development server
- **ESBuild** - Fast bundling
- **Sass** - CSS preprocessing

## 📁 Project Structure

```
dweep-appeim/
├── 📁 backend/                 # Express.js API server
│   ├── 📁 config/             # Database configuration
│   │   └── db.js              # MongoDB connection
│   ├── 📁 controllers/        # Route controllers
│   ├── 📁 routes/            # API routes
│   │   └── contactRoutes.js   # Contact form routes
│   ├── 📁 utils/             # Helper functions
│   ├── 📄 .env               # Development environment
│   ├── 📄 .env.production    # Production environment
│   ├── 📄 server.js          # Main server file
│   ├── 🐳 Dockerfile         # Docker configuration
│   ├── 📄 railway.json       # Railway deployment config
│   ├── 📄 render.yaml        # Render deployment config
│   └── 📄 package.json       # Backend dependencies
├── 📁 dweep-appeim/          # React frontend
│   ├── 📁 src/               # Source code
│   │   ├── 📁 modules/       # Feature modules
│   │   │   ├── about/        # About page
│   │   │   ├── contact/      # Contact form
│   │   │   ├── home/         # Homepage
│   │   │   └── support-areas/ # Support areas
│   │   └── App.js            # Main App component
│   ├── 📁 dist/              # Production build
│   ├── 📁 public/            # Static assets
│   ├── 📄 .env               # Development environment
│   ├── 📄 .env.production    # Production environment
│   ├── ⚙️ vite.config.js     # Vite configuration
│   ├── 📄 netlify.toml       # Netlify deployment config
│   ├── 📄 vercel.json        # Vercel deployment config
│   └── 📄 package.json       # Frontend dependencies
├── 📁 .github/workflows/     # GitHub Actions
│   └── deploy.yml            # Automated deployment
├── 📜 deploy.sh              # Unix deployment script
├── 📜 deploy.bat             # Windows deployment script
├── 📖 DEPLOYMENT.md          # Comprehensive deployment guide
├── ✅ PRODUCTION_CHECKLIST.md # Pre-deployment checklist
└── 📖 README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ and **npm** 9+
- **MongoDB** (local or Atlas)
- **Git** for version control

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd dweep-appeim
```

### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
```

### 3. Frontend Setup
```bash
cd ../dweep-appeim

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your backend URL

# Start development server
npm run dev
```

### 4. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5002
- **Health Check**: http://localhost:5002/api/health

## 🌍 Deployment

### Quick Deployment

#### Using Deployment Scripts
```bash
# Unix/Linux/macOS
chmod +x deploy.sh
./deploy.sh

# Windows
deploy.bat
```

#### Manual Deployment

**Frontend (Netlify)**
```bash
cd dweep-appeim
npm run build:prod
npm run deploy:netlify
```

**Backend (Railway)**
```bash
cd backend
railway login
railway up
```

### Supported Platforms

| Platform | Type | Free Tier | Custom Domain |
|----------|------|-----------|---------------|
| **Netlify** | Frontend | ✅ | ✅ |
| **Vercel** | Frontend | ✅ | ✅ |
| **Railway** | Backend | ✅ (Limited) | ✅ |
| **Render** | Backend | ✅ | ✅ |
| **GitHub Pages** | Frontend | ✅ | ✅ |

### Automated Deployment

The project includes GitHub Actions for automated deployment:

1. **Push to main branch** triggers deployment
2. **Frontend** deploys to Netlify/Vercel
3. **Backend** deploys to Railway/Render
4. **Health checks** verify deployment
5. **Notifications** on success/failure

## ⚙️ Environment Configuration

### Backend Environment Variables

```env
# Server Configuration
NODE_ENV=development
PORT=5002

# Database
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/database

# Email Configuration
EMAIL=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

### Frontend Environment Variables

```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:5002

# Optional: Analytics
VITE_GA_TRACKING_ID=your-google-analytics-id
```

## 📚 API Documentation

### Base URL
- **Development**: `http://localhost:5002/api`
- **Production**: `https://your-backend.railway.app/api`

### Endpoints

#### Health Check
```http
GET /api/health
```
**Response:**
```json
{
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

#### Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, this is a test message."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

## 🔧 Development

### Available Scripts

#### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:prod   # Build with production environment
npm run preview      # Preview production build
npm run analyze      # Analyze bundle size
```

#### Backend
```bash
npm run dev          # Start with nodemon
npm start            # Start production server
npm run build        # Build (placeholder)
```

### Code Structure

#### Frontend Components
```
src/
├── modules/
│   ├── home/          # Homepage components
│   ├── about/         # About page components
│   ├── contact/       # Contact form components
│   └── support-areas/ # Support areas components
├── components/        # Shared components
├── utils/            # Utility functions
└── styles/           # Global styles
```

#### Backend Structure
```
backend/
├── config/           # Configuration files
├── controllers/      # Business logic
├── routes/          # API routes
├── utils/           # Helper functions
└── middleware/      # Custom middleware
```

## 🧪 Testing

### Frontend Testing
```bash
cd dweep-appeim
npm test  # Run tests (when implemented)
```

### Backend Testing
```bash
cd backend
npm test  # Run tests (when implemented)
```

### Manual Testing
- **Health Check**: `curl http://localhost:5002/api/health`
- **Contact Form**: Test form submission on frontend
- **CORS**: Verify cross-origin requests work

## 📊 Performance

### Frontend Optimization
- ✅ Code splitting with Vite
- ✅ Tree shaking enabled
- ✅ Asset optimization
- ✅ Lazy loading (where applicable)
- ✅ Bundle size monitoring

### Backend Optimization
- ✅ Express.js optimizations
- ✅ MongoDB connection pooling
- ✅ Static file serving
- ✅ Compression middleware
- ✅ Security headers

### Performance Metrics
- **Lighthouse Score**: Target 90+
- **First Contentful Paint**: < 2s
- **API Response Time**: < 500ms
- **Bundle Size**: < 1MB

## 🔒 Security

### Implemented Security Measures
- ✅ CORS configuration
- ✅ Security headers
- ✅ Input validation
- ✅ Environment variable protection
- ✅ HTTPS enforcement (production)
- ✅ Rate limiting ready

### Security Best Practices
- Never commit `.env` files
- Use strong, unique secrets
- Regularly update dependencies
- Monitor for security vulnerabilities
- Implement proper authentication (when needed)

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style
- Add tests for new features
- Update documentation
- Ensure all checks pass

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- [Deployment Guide](DEPLOYMENT.md)
- [Production Checklist](PRODUCTION_CHECKLIST.md)

### Platform Support
- **Netlify**: [Documentation](https://docs.netlify.com/)
- **Vercel**: [Documentation](https://vercel.com/docs)
- **Railway**: [Documentation](https://docs.railway.app/)
- **Render**: [Documentation](https://render.com/docs)

### Common Issues
- **CORS Errors**: Check backend CORS configuration
- **Build Failures**: Verify Node.js version compatibility
- **Database Connection**: Ensure MongoDB URI is correct
- **Environment Variables**: Check variable names and values

## 🎉 Acknowledgments

- **React Team** for the amazing framework
- **Vite Team** for the fast build tool
- **Express.js** for the robust backend framework
- **MongoDB** for the flexible database
- **Deployment Platforms** for hosting services

---

**Made with ❤️ by AeroByte Innovations**

For more information, visit our [website](https://your-website.com) or contact us at [contact@your-email.com](mailto:contact@your-email.com).
