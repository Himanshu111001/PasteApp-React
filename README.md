# 📄 PastesApp - Secure & Fast Online Pastebin

**PastesApp** is a modern, high-performance web application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. It allows users to create, store, and share text snippets or code blocks instantly with a premium, responsive UI.

---

## 🌟 Key Features

- **🌓 Dynamic Dark Mode**: Full dark mode support by default, with an elegant toggle and persistence via `localStorage`.
- **📱 Fully Responsive**: Optimized for all devices—from mobile phones to large desktops—with a dedicated mobile navigation menu.
- **🛡️ Enhanced Security**: Powered by the Web Crypto API (`crypto.randomUUID()`) for secure, collision-resistant unique identifiers.
- **🚀 Ultra-Fast Navigation**: Built as a Single Page Application (SPA) using **React Router v6** for seamless transitions without page reloads.
- **🔍 Modern SEO**: Fully optimized with Twitter Cards, Open Graph meta tags, and semantic HTML (H1/H2 hierarchy) for maximum search visibility.
- **💼 Premium UI/UX**: Features glassmorphism effects, smooth hover animations, and a custom `chileanFire` color palette.
- **📋 Clipboard Integration**: One-click copy functionality for all pastes with real-time feedback via **React Hot Toast**.

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **State Management**: Redux Toolkit (RTK)
- **Styling**: Tailwind CSS (with custom theme extensions)
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
- **Notifications**: React Hot Toast
- **Analytics**: Vercel Analytics

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Himanshu111001/PastesApp-React.git
   cd PastesApp-React
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
PastesApp-React/
├── public/              # Static assets (logo, icons, manifest)
├── src/
│   ├── assets/          # Project images and logos
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   ├── data/            # Static configuration data
│   ├── redux/           # Global state management logic
│   ├── utils/           # Utility functions (date formatting, etc.)
│   ├── App.jsx          # Main routing logic
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # SEO-optimized entry point
└── tailwind.config.js   # Custom theme and dark mode config
```

---

## 👨‍💻 Developer Info

Developed with ❤️ by **Himanshu Shishodia**.

- **GitHub**: [@Himanshu111001](https://github.com/Himanshu111001)
- **LinkedIn**: [Himanshu Shishodia](https://www.linkedin.com/in/himanshu-shishodiaa/)

---

## 🚀 Version 2.0 - Recent Improvements

This project recently underwent a major overhaul:
- **SEO & Accessibility**: Implemented ARIA labels and semantic tags for a 100/100 accessibility potential.
- **Responsiveness**: Re-engineered the "Create Paste" section and Navbar for perfect mobile fluidity.
- **Branding**: Integrated the official PastesApp logo and updated the default theme to Dark Mode.
- **Code Quality**: Refactored logic to use high-performance `.find()` and standardized directory naming.
