<div align="center">
  
# ♻️ RaddiRich: Web3-Inspired Waste-to-Wealth Platform

**Dustbin Nahi, Ye Tera ATM Hai! 🏧**

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

*A premium, mobile-first clean-tech platform empowering households to turn everyday scrap into instant cash. Created with a beautiful UI, smooth animations, and robust PWA support.*

[View Live Demo](#) <!-- Update with Vercel Link here -->

</div>

---

## 🌟 The Vision

India generates millions of tons of recyclable waste every year, yet households struggle to find transparent scrap rates and trusted vendors. **RaddiRich** bridges this gap. By utilizing a sleek digital interface, users can check live market rates, invoke AI to estimate weight and value, schedule doorstep pickups, and earn instant UPI payouts. This project aims to bring the unorganized 'Kabaadi' sector into the digital age.

## ✨ Key Features

- 📱 **Progressive Web App (PWA):** Installable on any Android or iOS device natively via the browser. Responsive glassmorphic UI optimized for the mobile experience.
- 🤖 **AI Scrap Scanner (Mockup):** Point the camera at scrap to identify material (Paper, Plastic, Metal) and instantly retrieve live quotes using a simulated Gemini-Vision pipeline.
- 📍 **Nearby Recyclers Locator:** A dedicated map interface to discover and connect with local, verified Raddi vendors in real-time.
- 💸 **Kamai (Earnings) Dashboard:** Track transaction histories, pending payouts, total carbon offset, and cumulative rewards.
- 🎨 **Premium Aesthetic:** Modern design utilizing deep green (`#16a34a`) and gold (`#facc15`) thematic colors, powered by **Tailwind CSS v4** and fluid **Framer Motion** transitions.

## 🛠️ Technology Stack

| Architecture    | Technologies Employed |
|-----------------|-----------------------|
| **Frontend**    | React 19, HTML5, CSS3, JavaScript (ES6+) |
| **Tooling**     | Vite, PostCSS, ESLint |
| **Styling**     | Tailwind CSS v4, Headless UI, Framer Motion |
| **Icons**       | Lucide React |
| **Routing**     | React Router DOM v7 |
| **Deploy**      | Vercel (Configured out-of-the-box) |

---

## 💻 Local Setup Instructions

Want to run RaddiRich locally? Follow these simple steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/RiyaThakur-dotcom/RaddiRich.git
   cd RaddiRich
   ```

2. **Install Dependencies:**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   *The application will now be running on `http://localhost:5173`.*

4. **Build for Production:**
   ```bash
   npm run build
   ```

## 📂 Architecture Overview

The project follows a standard modern React application structure:

```text
RaddiRich/
├── public/                 # Static assets (Favicons, PWA Manifests)
├── src/                    
│   ├── assets/             # Images, Global SVGs
│   ├── components/         # Reusable UI Blocks (Navbar, BottomNav, Layout)
│   ├── pages/              # Primary Route Views
│   │   ├── HomePage.jsx    # Landing & Hero
│   │   ├── HowItWorks.jsx  # 3-Step Guide Process
│   │   ├── ScanPage.jsx    # AI Value Calculator Simulator
│   │   ├── PricesPage.jsx  # Daily Market Scrap Rates
│   │   ├── KamaiPage.jsx   # Wallet & Earnings
│   │   ├── NearbyPage.jsx  # Map & Navigator
│   │   └── ProfilePage.jsx # Account & Verification
│   ├── App.jsx             # Root Routing Layer
│   ├── main.jsx            # Entry Point Config
│   └── index.css           # Tailwind Directive Injections
└── vite.config.js          # Vite Compiler Configuration
```

## 👩‍💻 About the Founder
**Riya Thakur** – Passionate about combining sustainable tech with gorgeous UI/UX design to drive social change.

---
<div align="center">
  <i>"Clean India. Wealthy India."</i>
</div>
