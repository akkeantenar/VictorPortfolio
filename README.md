# Portfolio Website

Senior UX/UI Engineer portfolio focused on AI-assisted UX prototyping and internal tools.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /about           # About page with background and approach
  /projects
    /mntn          # MNTN - AI-Assisted Creative Prototyping Tool
    /snap          # Snap Inc - Internal UX Component & Tooling System
    /netflix       # Netflix - UX Prototyping for Media Playback & Accessibility
  layout.tsx       # Root layout with navigation and footer
  page.tsx         # Home page with skills and featured projects
  globals.css      # Global styles with Tailwind

/components
  Navigation.tsx   # Site navigation component
  Footer.tsx       # Footer with contact and navigation
  BackToTop.tsx    # Back to top button for long pages
```

## Features

### Home Page
- Headline and professional summary
- **Core Skills & Technologies** section (Frontend Engineering, AI & Prototyping, Collaboration & Process)
- Featured projects with role and company information
- Accessible semantic HTML structure

### About Page
- Detailed background and experience
- **My Approach** section covering:
  - Design Enablement
  - Rapid Iteration
  - Human-in-the-Loop AI
  - Cross-Functional Collaboration
- Experience timeline (MNTN, Snap Inc, Netflix)
- Focus areas

### Project Pages
Each project includes:
- **Project metadata** (company, role, technologies)
- **Problem / Context** - Clear problem statement
- **My Role** - Detailed responsibilities
- **Key Challenges** - Technical and UX challenges faced
- **UX & Interaction Focus** - Specific interaction patterns
- **Tooling & Tech** - Technology stack breakdown
- **Technical Deep-Dive** - Architecture patterns and implementation details
- **Process & Collaboration** - How the work was done
- **Outcome** - Results and impact

### Accessibility
- ARIA labels and semantic HTML
- Keyboard navigation support
- Screen reader friendly
- Proper heading hierarchy

### Navigation
- Sticky navigation bar
- Footer with contact information
- Back to top button (appears after scrolling)
- Responsive design

## TODO: Adding Visuals

Each project page includes placeholder sections marked with `[TODO]` for:
- Screenshots or diagrams
- Workflow demonstrations
- Component architecture diagrams
- Interaction examples
- Code examples

Replace these placeholders with actual visuals when available.

## TODO: Contact Information

Update the Footer component (`/components/Footer.tsx`) with:
- Your email address
- LinkedIn profile URL
- Any other relevant contact information

## Build for Production

```bash
npm run build
npm start
```

