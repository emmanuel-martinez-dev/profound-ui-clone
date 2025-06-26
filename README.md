# Rho Analytics Dashboard

A UI clone of [TryProfound.com](https://tryprofound.com) analytics dashboard, built with **Cursor AI** and **Next.js 15**, featuring a dark theme and responsive design.

> **Note**: This is a recreation of the Profound analytics interface for educational purposes, demonstrating modern web development practices with AI-assisted development tools.

## 🚀 Tech Stack

- **Next.js 15** with App Router
- **Tailwind CSS v4** with custom design tokens
- **TypeScript** for type safety
- **Recharts** for data visualizations
- **Lucide React** for icons
- **Cursor AI** for AI-assisted development

## 📊 Features

- **Brand Visibility Card** - 89.8% visibility score with trend chart
- **Brand Industry Ranking** - Ranked list of 6 companies with change indicators
- **Responsive Sidebar** - Fixed on desktop, collapsible on mobile
- **Dark Theme** - Professional color scheme matching the original design
- **Pixel-perfect recreation** of the TryProfound interface

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📱 Responsive Design

- **Desktop**: Fixed sidebar (280px)
- **Mobile**: Overlay sidebar with hamburger menu
- **Adaptive grid**: Cards stack on smaller screens

## 🎨 Design System

The dashboard follows the original TryProfound design system with:
- Dark color palette (`#0a0a0a` background)
- System fonts with defined scales
- Consistent spacing and border radius
- Success/danger color indicators

## 📁 Project Structure

```
app/
├── layout.tsx          # Main layout with sidebar
├── page.tsx            # Dashboard page
└── globals.css         # Global styles + CSS variables

components/
├── ui/                 # Base components (Button, Card)
└── dashboard/          # Dashboard-specific components
```

## 🤖 Built with AI

This project was created using **Cursor AI** to demonstrate:
- AI-assisted frontend development
- Rapid prototyping of complex UIs
- Modern React/Next.js patterns
- Tailwind CSS best practices

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

---

**UI Clone of TryProfound.com • Built with Cursor AI + Next.js 15 + Tailwind CSS v4**
