# 📝 Content Management Guide for Your Personal Knowledge Space

Welcome! This guide will help you easily update and manage content on your website.

---

## 🎯 Quick Overview

Your website now includes:
- **Home Page**: Hero section + Your latest thoughts/posts
- **About Page**: Your professional introduction and highlights
- **Blog Posts**: Individual articles with PDF support
- **PDF Support**: Attach downloadable resources to posts

---

## 🔄 How to Update Content

### 1. **Update Your Introduction (About Page)**

**File to edit:** `src/pages/About.jsx`

**What you can change:**
- Your name and title
- Profile initials (in the `<span className="initials">` tag)
- Introduction text
- Highlights (4 cards with icons)
- "What You'll Find Here" section
- Social media links

**Example:**
```jsx
<h1 className="about-title">Mohammed Firdouse Pasha</h1>
<p className="about-subtitle">Your Custom Title Here</p>
```

---

### 2. **Update Hero Section (Home Page)**

**File to edit:** `src/components/Hero.jsx`

**Current text:**
```jsx
<h1 className="hero-title">What I'm thinking today</h1>
<p className="hero-subtitle">
  Discover my thoughts, ideas, and insights on technology...
</p>
```

Change the text to whatever you want visitors to see first!

---

### 3. **Add or Edit Blog Posts**

**File to edit:** `src/data/blogPosts.js`

**To add a new post**, copy this template and add it to the array:

```javascript
{
  id: 7, // Increment this number
  title: "Your Post Title",
  excerpt: "A short description that appears on the home page",
  pdfUrl: "/pdfs/your-file.pdf", // Or Google Drive link, or null if no PDF
  externalLinks: [
    { title: "Related Article", url: "https://example.com" },
    { title: "Reference", url: "https://example.com" }
  ],
  content: `
    <p>Your content here. You can use HTML tags:</p>
    <h2>Section Title</h2>
    <p>More content...</p>
    <ul>
      <li>Bullet point 1</li>
      <li>Bullet point 2</li>
    </ul>
  `,
  author: "Mohammed Firdouse Pasha",
  authorAvatar: "https://i.pravatar.cc/150?img=5",
  date: "Jan 20, 2026",
  readingTime: 5, // Minutes
  tag: "Technology", // Category
  image: "https://images.unsplash.com/photo-example?w=800&h=600"
}
```

---

## 📄 How to Add PDF Files

### **Option A: Store PDFs in GitHub (Simple)**

1. **Add your PDF:**
   - Place PDF files in the `public/pdfs/` folder
   - Example: `public/pdfs/my-guide.pdf`

2. **Reference in blog post:**
   ```javascript
   pdfUrl: "/pdfs/my-guide.pdf"
   ```

3. **Commit and push:**
   ```bash
   git add public/pdfs/your-file.pdf
   git commit -m "Add PDF resource"
   git push origin main
   ```

**Limitations:** 
- Max 100MB per file
- Not ideal for very large files

---

### **Option B: Use Google Drive (Recommended for Large Files)**

1. **Upload to Google Drive**
2. **Right-click file → Share → Copy link**
3. **Make sure link is set to "Anyone with the link can view"**
4. **Use in blog post:**
   ```javascript
   pdfUrl: "https://drive.google.com/file/d/YOUR-FILE-ID/view"
   ```

---

### **Option C: Use Cloud Storage (Dropbox, OneDrive, etc.)**

1. Upload your PDF
2. Get shareable link
3. Add to `pdfUrl` field

---

## 🎨 Customize Colors

**File to edit:** `src/index.css`

Find the `:root` section and change colors:

```css
:root {
  --primary-bg: #ffffff;           /* Main background */
  --navy-blue: #191919;            /* Dark navy */
  --accent-color: #1a1a4d;        /* Accent color */
  --text-primary: #292929;         /* Main text */
  --text-secondary: #6B6B6B;       /* Secondary text */
}
```

---

## 🚀 Publishing Your Changes

### **Step 1: Save Your Changes**
Make your edits in the files mentioned above.

### **Step 2: Commit to Git**
```bash
git add .
git commit -m "Update content: [describe what you changed]"
```

### **Step 3: Push to GitHub**
```bash
git push origin main
```

### **Step 4: Vercel Auto-Deploy**
Once pushed to GitHub, Vercel will automatically:
- Detect the changes
- Build your site
- Deploy the updates
- Your site will be live in ~1-2 minutes! 🎉

---

## 📂 File Structure Quick Reference

```
src/
├── components/
│   ├── Header.jsx          # Top navigation bar
│   ├── Hero.jsx            # Home page hero section
│   └── BlogCard.jsx        # Blog post preview cards
├── pages/
│   ├── Home.jsx            # Home page layout
│   ├── About.jsx           # Your introduction page
│   └── BlogPost.jsx        # Individual post view
├── data/
│   └── blogPosts.js        # ALL YOUR BLOG POSTS HERE
└── index.css               # Global styles and colors

public/
└── pdfs/                   # Store your PDF files here
```

---

## 💡 Tips for Great Content

### **Writing Posts:**
- Use clear, descriptive titles
- Keep excerpts between 100-150 characters
- Break content into sections with `<h2>` tags
- Add images for visual appeal
- Include relevant tags/categories

### **Using PDFs:**
- Name files descriptively: `zero-trust-guide.pdf` not `document1.pdf`
- Keep PDFs under 10MB for best performance (or use Google Drive)
- Always test the download link after publishing

### **Images:**
- Use high-quality images (800x600 minimum)
- [Unsplash](https://unsplash.com) offers free stock photos
- [Pexels](https://pexels.com) is another great source

---

## 🔧 Common Tasks

### **Change Your Name in Header**
Edit `src/components/Header.jsx`:
```jsx
<h1>Mohammed Firdouse Pasha</h1>
```

### **Update Social Links**
Edit `src/pages/About.jsx` - find the `social-links` section

### **Add a New Navigation Link**
Edit `src/components/Header.jsx` - add to the `<nav>` section

### **Change Hero Button Text**
Edit `src/components/Hero.jsx` - find the `hero-btn` link

---

## 🐛 Troubleshooting

**Site not updating after push?**
- Check Vercel dashboard for build status
- Look for any error messages in the build log

**PDF not downloading?**
- Verify file is in `public/pdfs/` folder
- Check that path in `pdfUrl` matches exactly
- Ensure file was committed and pushed to GitHub

**Broken layout?**
- Make sure you didn't accidentally delete closing tags
- Check browser console for errors (F12)

---

## 📞 Need Help?

If you need to make changes and aren't sure how:
1. Look at existing examples in the code
2. Make small changes and test locally with `npm run dev`
3. Always commit working versions before making big changes

---

## 🎯 Content Update Workflow Summary

1. **Edit files** (blogPosts.js, About.jsx, etc.)
2. **Test locally** (optional): `npm run dev`
3. **Commit**: `git add . && git commit -m "Your message"`
4. **Push**: `git push origin main`
5. **Wait ~2 minutes** for Vercel to deploy
6. **Check your live site!** ✅

---

**Remember:** Your website is now a living knowledge base. Update it regularly with your thoughts, learnings, and resources!

Happy writing! 🚀
