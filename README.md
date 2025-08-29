# Modern Portfolio Website

A professional, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive (mobile-first approach)
- 🚀 Fast loading and optimized performance
- 📧 Contact form with email integration
- 💬 WhatsApp integration for instant messaging
- 🎯 Smooth scrolling navigation
- ⚡ Built with Vite for fast development

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS="your-app-password"
   ```

### Development

To run both the frontend and backend servers:

```bash
npm run dev:full
```

Or run them separately:

```bash
# Frontend only
npm run dev: client

# Backend only
npm run dev: server or nodemon
```

### Email Setup

The contact form uses Gmail SMTP. To set it up:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Use this app password in your `.env.local` file

## Project Structure

```
src/
├── components/          # React components
├── data/               # Portfolio data and content
├── types/              # TypeScript type definitions
└── App.tsx            # Main application component

server/
└── index.js           # Express server for email handling
```


### Frontend Deployment

Build the project:

```bash
npm run build
```

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express, Nodemailer
- **Icons**: Lucide React
- **Animations**: CSS transitions and transforms

# Portfolio

This is my personal portfolio website where I showcase my projects, skills, and experience as a developer.

## 🚀 Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Node.js

## 📌 Features

- About me section
- Projects with live demo & GitHub links
- Skills categorized by frontend, backend, and tools
- Timeline of education & work experience
- Contact form

## 🌐 Live Demo

[Visit my portfolio](https://portfolio-zaiad.vercel.app/)
