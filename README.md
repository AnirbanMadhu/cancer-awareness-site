# Cancer Awareness Website 🎗️

Hey! This is a website I built for raising cancer awareness and providing support resources. It's a personal project close to my heart.

## What It Does

This site helps spread awareness about cancer prevention and early detection. Visitors can read inspirational quotes, learn about our mission, and get in touch through the contact form.

### Main Features

- **Hero Section** - Clean landing page with a message about fighting cancer together
- **Mission Section** - Three pillars: Education, Support, and Hope
- **Quotes** - Inspirational quotes that auto-refresh (using ZenQuotes API)
- **Contact Form** - Simple form for people to reach out (validation included)
- **Responsive** - Works on mobile, tablet, and desktop

## Tech I Used

- Next.js 16 with TypeScript
- Tailwind CSS for styling
- ZenQuotes API for the quotes section

## Setup

Just the basics:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`

## Email Setup

The contact form uses Nodemailer to send emails. To get it working:

1. Create a `.env` file in the root directory
2. Copy the variables from `.env.example`
3. Add your SMTP credentials (Gmail, Outlook, etc.)

For Gmail, you'll need to use an App Password instead of your regular password.

## Notes

Auto-refresh on quotes happens every 20 seconds. Can adjust this in `InspirationalQuotes.tsx` if needed.

---

Built with ❤️ for cancer awareness
