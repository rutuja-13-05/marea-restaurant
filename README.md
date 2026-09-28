# Marea — Restaurant Website

> **Contemporary Indian Restaurant Website (Frontend Project)**

Marea is a modern restaurant website designed to create a warm, elegant and immersive digital experience for a contemporary Indian restaurant.

The project focuses on a visually engaging layout, responsive design, reusable React components and a clean section-based architecture.

---

## ✨ Features

- Responsive restaurant landing page
- Modern navigation bar
- Full-screen hero section
- Restaurant introduction / About section
- Food menu showcase
- Image-based gallery
- Table reservation section
- Contact section
- Responsive layout for desktop, tablet and mobile
- Reusable React components
- SCSS-based styling
- Restaurant-focused visual design

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript
- HTML5
- SCSS
- React Icons

### Development Tools

- Vite
- ESLint
- Git
- GitHub
- VS Code

---

## 📂 Project Structure

```text
marea-restaurant/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   │
│   ├── assets/
│   │   ├── about.png
│   │   ├── hero.png
│   │   ├── menu.jpg
│   │   ├── butterchicken.jpg
│   │   ├── cardeam.jpg
│   │   ├── daltadka.jpg
│   │   ├── mereachaat.jpg
│   │   ├── smokepaneer.jpg
│   │   └── ...
│   │
│   ├── components/
│   │   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.scss
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.scss
│   │   │
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.scss
│   │   │
│   │   ├── Menu/
│   │   │   ├── Menu.jsx
│   │   │   └── Menu.scss
│   │   │
│   │   ├── Gallery/
│   │   │   ├── Gallery.jsx
│   │   │   └── Gallery.scss
│   │   │
│   │   ├── Reservations/
│   │   │   ├── Reservations.jsx
│   │   │   └── Reservations.scss
│   │   │
│   │   └── Contact/
│   │       ├── Contact.jsx
│   │       └── Contact.scss
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.scss
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js