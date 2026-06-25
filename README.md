# 🚀 Sujal Raut — Personal Portfolio

A modern, responsive personal portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**, showcasing my projects, skills, education, and experience as an AI Engineering student and Software Developer.

---

## ✨ Live Demo

> [https://sujal-page.vercel.app](https://sujal-page.vercel.app)

---

## 📸 Preview

![Portfolio Preview](https://i.postimg.cc/W1TTGXLt/Whats-App-Image-2025-04-22-at-1-46-07-PM.jpg)

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, Framer Motion |
| UI Components | Radix UI, Lucide React |
| Email | EmailJS |
| Routing | React Router DOM |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Fixed navbar with active section tracking
│   ├── HeroSection.tsx     # Landing section with animated intro
│   ├── AboutSection.tsx    # About me with stats and expertise bars
│   ├── EducationSection.tsx# Education timeline, experience & certifications
│   ├── ProjectsSection.tsx # Filterable project cards
│   ├── SkillsSection.tsx   # Categorized skills and tools
│   ├── ContactSection.tsx  # Contact form with EmailJS integration
│   ├── Footer.tsx          # Footer with links and socials
│   ├── LoadingScreen.tsx   # Animated loading screen
│   └── Logo.tsx            # Custom AI-themed SVG logo
├── pages/
│   ├── Index.tsx           # Main page
│   └── NotFound.tsx        # 404 page
├── hooks/
├── lib/
└── main.tsx
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Sujal-codeWithAI/Sujal-Page.git

# Navigate to the project directory
cd Sujal-Page

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 📬 Contact Form Setup

The contact form uses [EmailJS](https://www.emailjs.com/). To configure it with your own account:

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Create a service and email template
3. Update the credentials in `src/components/ContactSection.tsx`:

```ts
const EMAILJS_PUBLIC_KEY = "your_public_key";
const EMAILJS_SERVICE_ID = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
```

---

## 📄 Sections

- **Hero** — Introduction, CTA buttons, social links
- **About** — Bio, stats, info cards, expertise progress bars
- **Education** — Academic timeline, internship experience, certifications
- **Projects** — Filterable cards with tech tags and GitHub links
- **Skills** — Categorized technical skills, tools & platforms
- **Contact** — EmailJS-powered contact form

---

## 🏆 Featured Projects

| Project | Tech Stack | Link |
|---|---|---|
| CropSense – AI Crop Recommendation | Python, Flask, Scikit-learn, Pandas | [GitHub](https://github.com/Sujal-codeWithAI/CropSense) |
| Banking Simulation API | FastAPI, Python, Pydantic, SQLAlchemy | [GitHub](https://github.com/Sujal-codeWithAI/Bank_Transaction_Backend) |
| Personal Portfolio | React, TypeScript, Tailwind CSS | [GitHub](https://github.com/Sujal-codeWithAI/Sujal-Page) |

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Connect

- 💼 [LinkedIn](https://www.linkedin.com/in/sujal-raut)
- 🐙 [GitHub](https://github.com/Sujal-codeWithAI)
- 📧 [sujalraut.dev@gmail.com](mailto:sujalraut.dev@gmail.com)

---

<p align="center">Made with ❤️ by <strong>Sujal Raut</strong></p>
