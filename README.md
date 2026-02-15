# Anishka Jain - Finance Portfolio

A modern, professional portfolio website showcasing equity research, financial analysis, and valuation modeling expertise.

## 🎯 Overview

This is a beautifully designed portfolio website built with **Next.js** and **Tailwind CSS**. It features a professional presentation of financial analysis work, including downloadable research reports, expertise showcase, and easy contact options.

## ✨ Features

- **Professional Hero Section** - Eye-catching introduction with profile image and call-to-action buttons
- **About Section** - Personal background and professional overview
- **Expertise Showcase** - Detailed presentation of technical skills, domain expertise, soft skills, and tools
- **Featured Projects** - 4 downloadable research reports with sector-specific icons:
  - Technology Sector Equity Analysis 💻
  - Healthcare Industry Valuation Study 🏥
  - Financial Services DCF Valuation 💰
  - Energy Sector Investment Research ⚡
- **Professional Contact Section** - Multiple contact options with SVG icons:
  - Email (cmaanishkajain@gmail.com)
  - Phone (+91 62631 00892)
  - LinkedIn (https://www.linkedin.com/in/anishka-jain0806/)
- **Downloadable Resume** - Easy access to resume PDF
- **Responsive Design** - Mobile-friendly layout for all devices
- **Light Color Scheme** - Professional blue gradient theme with excellent accessibility

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.6
- **Styling:** Tailwind CSS 3.4.4
- **React Version:** 19.2.3
- **Language:** TypeScript
- **Font:** Inter (from Google Fonts)
- **Animation:** Framer Motion 12.34.0

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🚀 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Aabhash23/anishka-finance-potfolio.git
cd anishka-finance-potfolio
```

2. **Install dependencies:**
```bash
npm install
```

## 🏃 Running the Project

### Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

### Lint
```bash
npm run lint
```

## 📁 Project Structure

```
anishka-finance-potfolio/
├── app/
│   ├── page.tsx              # Main portfolio page
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles
├── public/
│   ├── profile.jpg           # Profile photo
│   ├── resume.pdf            # Resume PDF
│   ├── research_project_1.pdf # Technology Sector Analysis
│   ├── research_project_2.pdf # Healthcare Valuation Study
│   ├── research_project_3.pdf # Financial Services DCF
│   └── research_project_4.pdf # Energy Sector Research
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── next.config.ts
└── README.md
```

## 📄 File Descriptions

- **page.tsx** - Main component containing all sections (hero, about, expertise, projects, contact)
- **layout.tsx** - Root layout with metadata for Anishka Jain's portfolio
- **globals.css** - Global CSS with Tailwind directives
- **profile.jpg** - Professional profile photograph
- **resume.pdf** - Downloadable resume
- **research_project_*.pdf** - Downloadable equity research reports

## 🎨 Customization

### Update Personal Information
Edit `app/page.tsx` to update:
- Name and title
- Profile image path
- Email address
- Phone number
- LinkedIn URL
- About section content
- Skills and expertise

### Modify Colors
The portfolio uses a blue color scheme (blue-600 to blue-700). To change:
1. Edit Tailwind color classes in `app/page.tsx`
2. Update `tailwind.config.ts` if creating custom colors

### Add/Update Research Projects
Edit the projects array in the Projects section of `page.tsx`:
```tsx
{
  id: 1,
  title: "Your Project Title",
  company: "Company Name",
  icon: "📊"
}
```

## 📚 Sections Breakdown

### 1. Navigation
Fixed navigation bar with logo and menu links to all sections.

### 2. Hero Section
Introduction with profile image, credentials, and action buttons for contact and resume download.

### 3. About Section
Professional background with key information cards about experience, certifications, and focus areas.

### 4. Expertise Section
Four cards showcasing:
- Technical Skills (Financial Modeling, DCF, etc.)
- Domain Expertise (Equity Research, Valuation, etc.)
- Soft Skills (Communication, Presentations, etc.)
- Tools & Platforms (Excel, Bloomberg, Python, etc.)

### 5. Projects Section
Featured research projects with downloadable PDFs and sector icons.

### 6. Contact Section
Professional contact information with:
- Email card with icon
- Phone card with icon
- LinkedIn card with official logo
- Action buttons for email, LinkedIn, and resume
- Social media icons

### 7. Footer
Copyright and credits.

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🔗 Links

- **GitHub Repository:** https://github.com/Aabhash23/anishka-finance-potfolio
- **LinkedIn:** https://www.linkedin.com/in/anishka-jain0806/
- **Email:** cmaanishkajain@gmail.com
- **Phone:** +91 62631 00892

## 📈 Performance

- Optimized images with Next.js Image component
- Server-side rendering for better SEO
- CSS-in-JS with Tailwind for minimal bundle size
- Fast loading times

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for icons
- High contrast colors for readability
- Keyboard navigation support

## 🚀 Deployment

### Deploy on Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy on GitHub Pages
Update `next.config.ts` with your repository details and follow the Next.js GitHub Pages deployment guide.

### Deploy on Other Platforms
Build the project:
```bash
npm run build
```
Then deploy the `.next` folder to your hosting service.

## 📝 Dependencies

- **next** - React framework
- **react** - UI library
- **react-dom** - React DOM renderer
- **framer-motion** - Animation library
- **tailwindcss** - Utility-first CSS framework
- **autoprefixer** - PostCSS plugin for vendor prefixes

## 🔧 Development Dependencies

- **typescript** - Static type checking
- **@types/react** - React type definitions
- **@types/react-dom** - React DOM type definitions
- **@types/node** - Node.js type definitions
- **eslint** - Code linting
- **eslint-config-next** - Next.js ESLint config
- **postcss** - CSS transformations
- **tailwindcss** - CSS framework

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Anishka Jain**
- Email: cmaanishkajain@gmail.com
- Phone: +91 62631 00892
- LinkedIn: https://www.linkedin.com/in/anishka-jain0806/
- GitHub: https://github.com/Aabhash23

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## 📮 Contact & Support

For inquiries, suggestions, or collaboration opportunities:
- 📧 Email: cmaanishkajain@gmail.com
- 📱 Phone: +91 62631 00892
- 💼 LinkedIn: https://www.linkedin.com/in/anishka-jain0806/

---

**Built with ❤️ using Next.js and Tailwind CSS**

Last Updated: February 15, 2026
