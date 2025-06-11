# Resume Card

> A modern, responsive CV website built with Next.js, React, TypeScript, and Tailwind CSS

![Resume Card Preview](./public/show.png)

## About

Resume Card is a sleek and professional CV website that showcases your experience, projects, education, and skills in a clean, modern interface. Built with cutting-edge web technologies, it offers seamless dark/light theme switching and responsive design across all devices.

## Features

- **Theme Toggle** - Dark and light mode support
- **Responsive Design** - Optimized for all screen sizes
- **Modern Stack** - Built with Next.js 14 and React 18
- **Styled Components** - Beautiful UI with Tailwind CSS
- **Type Safety** - Full TypeScript implementation
- **Professional Layout** - Clean CV presentation

## Technology Stack

- **Framework:** Next.js 14 with App Router
- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS with custom design system
- **Theme:** next-themes for dark/light mode
- **Deployment:** Vercel Platform
- **Icons:** Lucide React

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
resume-card/
├── app/              # Next.js app directory
├── components/       # React components
├── data/            # CV data and content
├── lib/             # Utility functions
├── public/          # Static assets
└── ...config files
```

## Customization

1. Update personal information in `data/bio.ts`
2. Modify CV sections in `data/profile.ts`
3. Customize styling in `app/globals.css`
4. Add your own avatar image URL

## Deployment

The easiest way to deploy Resume Card is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For detailed deployment instructions, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Live Demo

Visit the live demo: [https://resume.heyadrsh.tech](https://resume.heyadrsh.tech)

---

**Built with care by [Aadarsh Kumar](https://github.com/heyadrsh)**
