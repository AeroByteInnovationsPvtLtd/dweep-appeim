# 🚀 MERN Stack Deployment Guide

Complete deployment guide for the Dweep AppEIM MERN stack application.

## 📋 Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Frontend Deployment](#frontend-deployment)
- [Backend Deployment](#backend-deployment)
- [Full-Stack Deployment](#full-stack-deployment)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)
- [Monitoring & Maintenance](#monitoring--maintenance)

## 🏗️ Project Structure

```
dweep-appeim/
├── backend/                 # Express.js API server
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── routes/            # API routes
│   ├── utils/             # Helper functions
│   ├── .env               # Development environment
│   ├── .env.production    # Production environment
│   ├── server.js          # Main server file
│   ├── Dockerfile         # Docker configuration
│   ├── railway.json       # Railway deployment config
│   └── render.yaml        # Render deployment config
├── dweep-appeim/          # React frontend
│   ├── src/               # Source code
│   ├── dist/              # Production build
│   ├── public/            # Static assets
│   ├── .env               # Development environment
│   ├── .env.production    # Production environment
│   ├── vite.config.js     # Vite configuration
│   ├── netlify.toml       # Netlify deployment config
│   └── vercel.json        # Vercel deployment config
├── deploy.sh              # Unix deployment script
├── deploy.bat             # Windows deployment script
└── DEPLOYMENT.md          # This file
```

## 🔧 Prerequisites

### Required Tools
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Git** (for version control)

### Platform CLI Tools (Install as needed)
```bash
# Netlify CLI
npm install -g netlify-cli

# Vercel CLI
npm install -g vercel

# Railway CLI
npm install -g @railway/cli

# Render CLI (optional)
npm install -g render-cli
```

## 🌍 Environment Setup

### Backend Environment Variables

#### Development (`.env`)
```env
NODE_ENV=development
PORT=5002
MONGODB_URI=mongodb+srv://your-connection-string
EMAIL=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
FRONTEND_URL=http://localhost:5173
```

#### Production (`.env.production`)
```env
NODE_ENV=production
PORT=5002
MONGODB_URI=mongodb+srv://your-production-connection-string
EMAIL=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
FRONTEND_URL=https://your-frontend-domain.com
PRODUCTION_URL=https://your-production-domain.com
JWT_SECRET=your-super-secret-jwt-key
SESSION_SECRET=your-session-secret
```

### Frontend Environment Variables

#### Development (`.env`)
```env
VITE_BACKEND_URL=http://localhost:5002
```

#### Production (`.env.production`)
```env
VITE_NODE_ENV=production
VITE_BACKEND_URL=https://your-backend-api.onrender.com
VITE_API_BASE_URL=https://your-backend-api.onrender.com/api
VITE_ENABLE_ANALYTICS=true
```

## 🎨 Frontend Deployment

### Option 1: Netlify Deployment

#### Automatic Deployment (Recommended)
1. **Connect Repository**
   ```bash
   # Login to Netlify
   netlify login
   
   # Initialize site
   netlify init
   ```

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Deploy**
   ```bash
   # Manual deployment
   cd dweep-appeim
   npm run deploy:netlify
   
   # Or use the deployment script
   ./deploy.sh  # Unix
   deploy.bat   # Windows
   ```

#### Manual Deployment
```bash
cd dweep-appeim
npm install
npm run build:prod
netlify deploy --prod --dir=dist
```

### Option 2: Vercel Deployment

#### Automatic Deployment
1. **Connect Repository**
   ```bash
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel
   ```

2. **Configure Project**
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

#### Manual Deployment
```bash
cd dweep-appeim
npm install
npm run build:prod
vercel --prod
```

### Option 3: GitHub Pages

```bash
cd dweep-appeim
npm run deploy:gh-pages
```

## 🔧 Backend Deployment

### Option 1: Railway Deployment

#### Setup
1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and Deploy**
   ```bash
   cd backend
   railway login
   railway up
   ```

3. **Configure Environment Variables**
   ```bash
   railway variables set NODE_ENV=production
   railway variables set MONGODB_URI="your-mongodb-uri"
   railway variables set EMAIL="your-email"
   railway variables set EMAIL_PASSWORD="your-password"
   railway variables set FRONTEND_URL="https://your-frontend.netlify.app"
   ```

### Option 2: Render Deployment

#### Setup
1. **Connect Repository** on Render dashboard
2. **Configure Service**
   - Environment: Node
   - Build command: `npm install`
   - Start command: `npm start`
   - Health check path: `/api/health`

3. **Environment Variables** (Set in Render dashboard)
   ```
   NODE_ENV=production
   MONGODB_URI=your-mongodb-uri
   EMAIL=your-email
   EMAIL_PASSWORD=your-password
   FRONTEND_URL=https://your-frontend.netlify.app
   ```

### Option 3: Docker Deployment

#### Build and Run
```bash
cd backend

# Build Docker image
docker build -t dweep-appeim-backend .

# Run container
docker run -p 5002:5002 --env-file .env.production dweep-appeim-backend
```

#### Docker Compose (Optional)
```yaml
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "5002:5002"
    env_file:
      - ./backend/.env.production
    restart: unless-stopped
```

## 🔄 Full-Stack Deployment

### Recommended Architecture

```
Frontend (Netlify/Vercel) → Backend API (Railway/Render) → MongoDB Atlas
```

### Deployment Steps

1. **Deploy Backend First**
   ```bash
   cd backend
   railway up  # or deploy to Render
   ```

2. **Update Frontend Environment**
   ```bash
   # Update .env.production with backend URL
   VITE_BACKEND_URL=https://your-backend.railway.app
   ```

3. **Deploy Frontend**
   ```bash
   cd dweep-appeim
   npm run build:prod
   netlify deploy --prod --dir=dist
   ```

4. **Update Backend CORS**
   ```bash
   # Update backend environment with frontend URL
   railway variables set FRONTEND_URL="https://your-frontend.netlify.app"
   ```

### Using Deployment Scripts

#### Unix/Linux/macOS
```bash
chmod +x deploy.sh
./deploy.sh
```

#### Windows
```cmd
deploy.bat
```

## ⚡ Performance Optimization

### Frontend Optimizations

#### Vite Configuration
- ✅ Code splitting with manual chunks
- ✅ Asset optimization
- ✅ Tree shaking
- ✅ Minification with esbuild
- ✅ CSS code splitting

#### Build Analysis
```bash
cd dweep-appeim
npm run analyze
```

### Backend Optimizations

#### Production Features
- ✅ Security headers
- ✅ CORS configuration
- ✅ Request size limits
- ✅ Static file serving
- ✅ Health check endpoint
- ✅ Error handling middleware

#### Performance Monitoring
```bash
# Check backend health
curl https://your-backend.railway.app/api/health

# Monitor logs
railway logs  # Railway
# Check Render dashboard for logs
```

### Database Optimization

#### MongoDB Atlas
- ✅ Connection pooling
- ✅ Indexes on frequently queried fields
- ✅ Connection string optimization

```javascript
// Optimized connection options
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
});
```

## 🐛 Troubleshooting

### Common Issues

#### Frontend Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### CORS Errors
1. Check backend CORS configuration
2. Verify frontend URL in backend environment
3. Ensure API endpoints are correct

#### Environment Variable Issues
```bash
# Check if variables are loaded
console.log('Backend URL:', import.meta.env.VITE_BACKEND_URL);
```

#### Database Connection Issues
1. Verify MongoDB URI
2. Check IP whitelist in MongoDB Atlas
3. Ensure database user permissions

### Debugging Commands

```bash
# Frontend
npm run dev  # Development server
npm run preview  # Preview production build

# Backend
npm run dev  # Development with nodemon
npm start    # Production server

# Deployment
netlify dev     # Local Netlify development
vercel dev      # Local Vercel development
railway run npm run dev  # Railway local development
```

### Log Analysis

#### Frontend Logs
- Browser Developer Tools
- Netlify/Vercel deployment logs
- Build logs in CI/CD

#### Backend Logs
```bash
# Railway
railway logs

# Render
# Check dashboard for logs

# Local debugging
DEBUG=* npm run dev
```

## 📊 Monitoring & Maintenance

### Health Checks

#### Backend Health Endpoint
```bash
curl https://your-backend.railway.app/api/health
```

#### Frontend Monitoring
- Lighthouse scores
- Core Web Vitals
- Error tracking (optional: Sentry)

### Regular Maintenance

#### Weekly Tasks
- [ ] Check deployment status
- [ ] Review error logs
- [ ] Monitor performance metrics
- [ ] Update dependencies (if needed)

#### Monthly Tasks
- [ ] Security audit
- [ ] Database optimization
- [ ] Backup verification
- [ ] Performance review

### Scaling Considerations

#### Frontend Scaling
- CDN optimization
- Image optimization
- Lazy loading implementation

#### Backend Scaling
- Database indexing
- Caching strategies
- Load balancing (for high traffic)

## 🔐 Security Best Practices

### Environment Security
- ✅ Never commit `.env` files
- ✅ Use strong secrets
- ✅ Rotate API keys regularly
- ✅ Implement rate limiting

### Production Security
- ✅ HTTPS enforcement
- ✅ Security headers
- ✅ Input validation
- ✅ CORS configuration

## 📞 Support

### Deployment Platforms
- **Netlify**: [Documentation](https://docs.netlify.com/)
- **Vercel**: [Documentation](https://vercel.com/docs)
- **Railway**: [Documentation](https://docs.railway.app/)
- **Render**: [Documentation](https://render.com/docs)

### Quick Commands Reference

```bash
# Build and test locally
npm run dev          # Development
npm run build        # Production build
npm run preview      # Preview build

# Deploy
npm run deploy:netlify   # Deploy to Netlify
npm run deploy:vercel    # Deploy to Vercel
railway up               # Deploy to Railway

# Monitor
railway logs            # Railway logs
netlify logs            # Netlify logs
vercel logs             # Vercel logs
```

---

**🎉 Your MERN stack application is now production-ready!**

For additional support or questions, refer to the platform-specific documentation or create an issue in the repository.
