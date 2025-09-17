# Personal Website

A minimalist personal website built with Next.js 15, TailwindCSS, and MDX. Features a notebook-inspired design with typewriter effects and ruled paper aesthetics.

## Features

- **Modern Tech Stack**: Built with Next.js 15 (App Router), TypeScript, and TailwindCSS
- **Notebook Aesthetic**: Ruled paper background, margin lines, and typewriter effects
- **Blog System**: MDX-powered blog with reading time calculation and tag support
- **Projects Showcase**: Clean project gallery with featured and other projects
- **Responsive Design**: Works beautifully on all devices
- **Performance Optimized**: Fast loading with Next.js optimizations

## Pages

- **Home**: Introduction with typewriter effect and navigation cards
- **Projects**: Showcase of featured and other projects
- **Blog**: MDX-powered blog with post listing and individual post pages
- **About**: Personal information, skills, and contact details

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd rnsh
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── content/
│   └── blog/                 # MDX blog posts
├── src/
│   ├── app/                  # Next.js app router pages
│   │   ├── about/
│   │   ├── blog/
│   │   │   └── [slug]/
│   │   ├── projects/
│   │   └── layout.tsx
│   ├── components/           # React components
│   ├── data/                 # Static data files
│   └── lib/                  # Utility functions
├── public/                   # Static assets
└── tailwind.config.ts        # TailwindCSS configuration
```

## Customization

### Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter with title, date, excerpt, and tags
3. Write your content in Markdown/MDX

Example:
```mdx
---
title: "My New Post"
date: "2024-01-15"
excerpt: "A brief description of the post"
tags: ["React", "Next.js"]
---

# My New Post

Your content here...
```

### Adding Projects

Edit `src/data/projects.js` to add or modify projects:

```javascript
{
  id: 7,
  title: "New Project",
  description: "Project description",
  technologies: ["React", "Node.js"],
  link: "https://example.com",
  github: "https://github.com/username/repo",
  featured: true
}
```

### Styling

The notebook aesthetic is achieved through custom CSS in `src/app/globals.css`:

- Ruled paper background with horizontal lines
- Left margin line (like a notebook spine)
- Typewriter cursor animation
- Custom color palette with paper-like tones

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The `out` directory will contain the static files ready for deployment.

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety and better developer experience
- **TailwindCSS**: Utility-first CSS framework
- **MDX**: Markdown with JSX components
- **gray-matter**: Frontmatter parsing
- **reading-time**: Reading time calculation

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!

- Email: hello@rounitsinha.com
- GitHub: [@rounitsinha](https://github.com/rounitsinha)
- LinkedIn: [rounitsinha](https://linkedin.com/in/rounitsinha)# rnsh
