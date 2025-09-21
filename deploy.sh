#!/bin/bash

# MERN Stack Deployment Script
# This script helps deploy both frontend and backend to various platforms

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to build frontend
build_frontend() {
    print_status "Building frontend..."
    cd dweep-appeim
    
    if [ ! -f "package.json" ]; then
        print_error "Frontend package.json not found!"
        exit 1
    fi
    
    npm install
    npm run build:prod
    
    if [ -d "dist" ]; then
        print_success "Frontend build completed successfully!"
    else
        print_error "Frontend build failed!"
        exit 1
    fi
    
    cd ..
}

# Function to test backend
test_backend() {
    print_status "Testing backend..."
    cd backend
    
    if [ ! -f "package.json" ]; then
        print_error "Backend package.json not found!"
        exit 1
    fi
    
    npm install
    print_success "Backend dependencies installed successfully!"
    cd ..
}

# Function to deploy to Netlify
deploy_netlify() {
    print_status "Deploying to Netlify..."
    
    if ! command_exists netlify; then
        print_warning "Netlify CLI not found. Installing..."
        npm install -g netlify-cli
    fi
    
    cd dweep-appeim
    netlify deploy --prod --dir=dist
    print_success "Deployed to Netlify!"
    cd ..
}

# Function to deploy to Vercel
deploy_vercel() {
    print_status "Deploying to Vercel..."
    
    if ! command_exists vercel; then
        print_warning "Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    cd dweep-appeim
    vercel --prod
    print_success "Deployed to Vercel!"
    cd ..
}

# Function to deploy backend to Railway
deploy_railway() {
    print_status "Deploying backend to Railway..."
    
    if ! command_exists railway; then
        print_error "Railway CLI not found. Please install it first:"
        print_error "npm install -g @railway/cli"
        exit 1
    fi
    
    cd backend
    railway up
    print_success "Deployed to Railway!"
    cd ..
}

# Function to show deployment status
show_status() {
    print_status "Checking deployment status..."
    
    if command_exists netlify; then
        print_status "Netlify sites:"
        netlify sites:list
    fi
    
    if command_exists vercel; then
        print_status "Vercel deployments:"
        vercel list
    fi
    
    if command_exists railway; then
        print_status "Railway services:"
        railway status
    fi
}

# Main menu
show_menu() {
    echo ""
    echo "=== MERN Stack Deployment Tool ==="
    echo "1. Build Frontend"
    echo "2. Test Backend"
    echo "3. Deploy Frontend to Netlify"
    echo "4. Deploy Frontend to Vercel"
    echo "5. Deploy Backend to Railway"
    echo "6. Full Deployment (Frontend + Backend)"
    echo "7. Show Deployment Status"
    echo "8. Exit"
    echo ""
}

# Main execution
main() {
    print_status "MERN Stack Deployment Script"
    print_status "Current directory: $(pwd)"
    
    while true; do
        show_menu
        read -p "Choose an option (1-8): " choice
        
        case $choice in
            1)
                build_frontend
                ;;
            2)
                test_backend
                ;;
            3)
                build_frontend
                deploy_netlify
                ;;
            4)
                build_frontend
                deploy_vercel
                ;;
            5)
                test_backend
                deploy_railway
                ;;
            6)
                print_status "Starting full deployment..."
                build_frontend
                test_backend
                print_status "Choose frontend deployment platform:"
                echo "1. Netlify"
                echo "2. Vercel"
                read -p "Choose (1-2): " frontend_choice
                
                case $frontend_choice in
                    1) deploy_netlify ;;
                    2) deploy_vercel ;;
                    *) print_error "Invalid choice!" ;;
                esac
                
                deploy_railway
                print_success "Full deployment completed!"
                ;;
            7)
                show_status
                ;;
            8)
                print_success "Goodbye!"
                exit 0
                ;;
            *)
                print_error "Invalid option. Please choose 1-8."
                ;;
        esac
        
        echo ""
        read -p "Press Enter to continue..."
    done
}

# Run main function
main
