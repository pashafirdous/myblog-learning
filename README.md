# Medium-Style Blog

A beautiful, responsive React blog website inspired by Medium's clean and elegant design.

## Features

- 🎨 Medium-inspired UI/UX
- 📱 Fully responsive design
- ⚡ Fast and performant (built with Vite)
- 🎯 Clean, readable typography
- 📝 Sample blog posts with rich content
- 🔗 Client-side routing with React Router

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── BlogCard.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   └── BlogPost.jsx
│   ├── data/            # Sample data
│   │   └── blogPosts.js
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
└── package.json
```

## Customization

### Adding New Blog Posts

Edit `src/data/blogPosts.js` and add new post objects following this structure:

```javascript
{
  id: 7,
  title: "Your Blog Post Title",
  excerpt: "A brief description...",
  content: `<p>Your HTML content here...</p>`,
  author: "Author Name",
  authorAvatar: "https://...",
  date: "Jan 20, 2024",
  readingTime: 5,
  tag: "Category",
  image: "https://..."
}
```

### Styling

- Global styles: `src/index.css`
- Component styles: Individual CSS files next to components
- Color scheme: Defined in CSS variables in `src/index.css`

## Technologies Used

- React 18
- Vite
- React Router DOM
- CSS3 (with CSS Variables)
- Google Fonts (Lora & Source Sans 3)

## License

MIT License - feel free to use this project for your own blog!
