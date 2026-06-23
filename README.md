# Noctara - Premium Digital Products Website

Welcome to **Noctara**, a premium digital products marketplace featuring wallpapers, templates, and printable resources "Crafted with imagination."

## 🌙 Features

### Design & Aesthetics
- **Dark Minimal Theme**: Elegant matte black and charcoal gray color scheme
- **Modern Glassmorphism**: Frosted glass effects with subtle purple accents
- **Cinematic Atmosphere**: Smooth animations and elegant typography
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile

### Functionality
- **Search Bar**: Real-time product search across all categories
- **Category Filters**: Easy filtering by product type
- **Product Grid**: Modern card-based layout with hover effects
- **Scroll-to-Top Button**: Quick navigation back to top
- **Mobile Menu**: Responsive hamburger navigation
- **Smooth Scrolling**: Elegant page transitions

### SEO Optimization
- **Meta Tags**: Comprehensive title, description, and keywords
- **Open Graph Tags**: Perfect for social media sharing
- **Structured Schema Markup**: JSON-LD for better indexing
- **Sitemap XML**: Complete product catalog for search engines
- **Robots.txt**: Search engine crawling optimization
- **Canonical URLs**: Prevents duplicate content issues
- **Mobile Friendly**: Optimized for all devices

### Product Categories

#### Wallpapers
- Dark Aesthetic Wallpapers
- Anime Wallpapers
- Motivational Quote Wallpapers
- Minimal Phone Wallpapers
- Desktop Wallpaper Packs

#### Templates
- Instagram Post Templates
- Story Templates
- Pinterest Pin Templates
- Quote Templates
- Business Post Templates

#### Printables
- Daily Planners
- Weekly Planners
- Habit Trackers
- Savings Trackers
- Budget Planners
- To-Do Lists

#### Quotes & Posters
- Motivational Posters
- Dark Aesthetic Quote Cards
- Stoic Quote Packs
- Study Motivation Posters

#### Freebies
- Free wallpapers
- Free printables
- Sample templates

## 📁 Project Structure

```
noctara/
├── index.html           # Main HTML file with all sections
├── style.css            # Complete styling with glassmorphism
├── script.js            # Interactive features and animations
├── robots.txt           # Search engine crawler instructions
├── sitemap.xml          # XML sitemap for SEO
├── images/              # All product images
│   ├── wallpapers/      # Wallpaper preview images
│   ├── templates/       # Template preview images
│   ├── printables/      # Printable product images
│   └── quotes/          # Quote and poster images
└── README.md            # This file
```

## 🚀 Quick Start

### 1. Open the Website
Simply open `index.html` in your web browser. No server setup required!

### 2. For Local Development
If you want to use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server

# Using Live Server in VS Code
# Install the Live Server extension and click "Go Live"
```

Then visit: `http://localhost:8000`

## 🎨 Customization Guide

### Change Brand Colors
Edit the CSS variables in `style.css`:

```css
:root {
    --color-accent: #a78bfa;           /* Main purple */
    --color-accent-light: #c4b5fd;     /* Light purple */
    --color-bg: #0a0e27;               /* Dark background */
}
```

### Update Products
Edit the product cards in `index.html`:

```html
<div class="product-card" data-filter="wallpapers">
    <div class="product-image">
        <img src="images/wallpapers/your-image.jpg" alt="Product Name">
    </div>
    <h4>Product Name</h4>
    <p>Product description</p>
    <div class="product-footer">
        <span class="price">$X.XX</span>
    </div>
</div>
```

### Add Product Images
Place your images in the corresponding folders:
- `images/wallpapers/` - Wallpaper previews
- `images/templates/` - Template previews
- `images/printables/` - Printable previews
- `images/quotes/` - Quote and poster previews

### Update Contact Information
Find and replace in `index.html`:
- Email: `amazinggreenland84@gmail.com`
- Instagram: Update the social link
- Pinterest: Update the social link

### Connect to Gumroad
In `script.js`, update the Gumroad link:

```javascript
const gumroadLink = `https://gumroad.com/YOUR_USERNAME`;
```

## 🔍 SEO Optimization Tips

### 1. Update Meta Tags (index.html)
```html
<title>Your Site Title - Premium Digital Products</title>
<meta name="description" content="Your description here...">
<meta name="keywords" content="keyword1, keyword2, keyword3">
```

### 2. Update Schema Markup
Edit the JSON-LD sections in `index.html` with your actual business info

### 3. Submit to Google
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your domain
3. Submit the sitemap.xml

### 4. Update Sitemap
Update the base URL in `sitemap.xml` from `https://noctara.com/` to your domain

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Under 768px

The website uses CSS Grid and Flexbox for perfect responsiveness.

## 🌐 Deployment

### GitHub Pages
1. Create a GitHub repository named `username.github.io`
2. Push all files to the repository
3. Visit `https://username.github.io`

### Custom Domain (GitHub Pages)
1. In repository settings, go to "Pages"
2. Under "Custom domain", enter your domain
3. Update your domain's DNS settings to point to GitHub Pages

### Traditional Hosting
1. Upload all files to your hosting provider via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Visit your domain

## 🎯 Keyboard Shortcuts

- `Ctrl + K` - Focus search bar
- `Escape` - Clear search results
- Smooth scroll to sections via anchor links

## 📊 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Best Practices

✅ Do:
- Optimize image sizes (use WebP or optimized JPG)
- Add high-quality product preview images
- Keep content updated regularly
- Use descriptive file names
- Backup your files regularly

❌ Don't:
- Use uncompressed large images
- Upload sensitive files to repository
- Modify security-related files carelessly

## 📈 Performance Tips

1. **Optimize Images**: Use tools like TinyPNG or ImageOptim
2. **Lazy Loading**: Images load as you scroll (already implemented)
3. **Minimize CSS/JS**: Use minifiers for production
4. **Enable Caching**: Configure server caching headers
5. **Use CDN**: Serve static assets from a CDN

## 🐛 Troubleshooting

### Images Not Showing
- Check image paths in HTML
- Ensure images are in correct folders
- Verify file names match exactly (case-sensitive on Linux)

### Styles Not Applied
- Clear browser cache (Ctrl + Shift + Delete)
- Check browser console for errors
- Verify CSS file path is correct

### JavaScript Not Working
- Open browser console (F12)
- Check for error messages
- Ensure JavaScript is enabled

## 📞 Contact & Support

- **Email**: amazinggreenland84@gmail.com
- **Instagram**: @noctara
- **Pinterest**: @noctara

## 📄 License

This project is free to use and modify for personal and commercial purposes.

## 🎓 Learning Resources

- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [SEO Starter Guide](https://developers.google.com/search/docs)

---

**Noctara © 2026 — Crafted with imagination.** 🌙
