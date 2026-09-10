# Omnia Khattab — Software Testing Engineer Portfolio Website

A modern, high-end, professional portfolio website for **Omnia Khattab**, a Software Testing Engineer transitioning from a strong Computer Science and 3+ years hands-on web development background into Software Testing and Quality Assurance.

---

## 🌟 Unique Selling Proposition (USP)
> **"Software Testing Engineer with a Computer Science background and 3+ years of hands-on web development experience."**
> 
> *I combine a developer's understanding of web applications with a tester's mindset to identify defects, validate functionality, and help deliver reliable software.*

---

## 🛠️ Tech Stack
- **Framework**: React.js 18 + Vite 5
- **Styling**: Tailwind CSS (custom dark engineering palette)
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono
- **Deployment Ready**: Fully static client-side bundle (Vercel, Netlify, GitHub Pages, cPanel)
- **Contact Form**: Direct client-side integration (Web3Forms / Formspree) via environment variables without requiring a custom backend server

---

## 🚀 Quick Start

### 1. Open the project directory
```powershell
cd "C:\Users\DELL 5570\.gemini\antigravity\scratch\omnia-khattab-qa-portfolio"
```

### 2. Start the Development Server
```powershell
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```powershell
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 4. Preview the Production Build
```powershell
npm run preview
```

---

## 📬 Configuring the Contact Form
1. Copy `.env.example` to `.env`:
   ```powershell
   cp .env.example .env
   ```
2. Set `VITE_CONTACT_FORM_ENDPOINT` to your Web3Forms or Formspree URL:
   ```env
   VITE_CONTACT_FORM_ENDPOINT=https://api.web3forms.com/submit
   # or
   VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your_form_id
   ```
*If left blank, the form automatically falls back to an interactive simulated confirmation with direct mailto link to `omniakhattab17@gmail.com`.*

---

## 📂 Project Structure

```
omnia-khattab-qa-portfolio/
├── index.html                  # SEO, meta tags, and Open Graph configuration
├── package.json                # Dependencies and build scripts
├── tailwind.config.js          # Custom colors, fonts, and shadows
├── vite.config.js              # Vite server & build configuration
├── src/
│   ├── main.jsx                # React root mount
│   ├── App.jsx                 # Main layout and section orchestrator
│   ├── index.css               # Tailwind directives and custom scrollbars
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all portfolio data
│   └── components/
│       ├── common/
│       │   ├── Badge.jsx          # Tag & status badge with animated pulse
│       │   ├── SectionHeading.jsx # Consistent accessible section headings
│       │   └── Modal.jsx          # Accessible dialog modal (Esc key, focus friendly)
│       ├── layout/
│       │   ├── Navbar.jsx         # Sticky header with active section spy & mobile drawer
│       │   └── Footer.jsx         # Professional footer with links and social connections
│       └── sections/
│           ├── Hero.jsx           # Value proposition + interactive QA visual dashboard
│           ├── About.jsx          # Dual-mindset narrative & 4 engineering pillars
│           ├── Education.jsx      # Cairo Univ BSc + DEPI Diploma timeline
│           ├── Skills.jsx         # Filterable competencies & transparency indicators
│           ├── Experience.jsx     # Vertical timeline: Dev Background → Testing Mindset
│           ├── Services.jsx       # 8 QA service offerings with deliverable modals
│           ├── Projects.jsx       # Testing case study blueprints + Dev foundation tab
│           ├── Certifications.jsx # Mahara-Tech credential viewer + ISTQB upcoming card
│           ├── CTA.jsx            # "Let's Build Better Software" conversion banner
│           └── Contact.jsx        # Validated form + direct info + location
```

---

## 📝 Updating Portfolio Content
To update any content (add a new certification, replace a project blueprint with a completed case study, or update work experience), simply edit:
👉 `src/data/portfolioData.js`
All sections automatically sync with this single source of truth.
