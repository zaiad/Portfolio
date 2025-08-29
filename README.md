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
- npm or yarn

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
npm run dev

# Backend only
npm run server
```

### Email Setup

The contact form uses Gmail SMTP. To set it up:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Use this app password in your `.env.local` file

### WhatsApp Setup

Update the phone number in these files:
- `src/components/Contact.tsx`
- `src/components/WhatsAppButton.tsx`

Replace `"+201234567890"` with your actual WhatsApp number (include country code).

### Customization

1. **Personal Information**: Update the data in `src/data/portfolio.ts`
2. **Images**: Replace placeholder images with your own
3. **Colors**: Modify the color scheme in `tailwind.config.js`
4. **Content**: Update text content in each component

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

## Deployment

### Frontend Deployment

Build the project:
```bash
npm run build
```

Deploy the `dist` folder to your preferred hosting service (Netlify, Vercel, etc.).

### Backend Deployment

Deploy the `server/index.js` file to a Node.js hosting service (Railway, Render, Heroku, etc.).

Update the API URL in your frontend environment variables.

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express, Nodemailer
- **Icons**: Lucide React
- **Animations**: CSS transitions and transforms

## License

This project is open source and available under the [MIT License](LICENSE).