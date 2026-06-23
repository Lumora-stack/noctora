# Noctara Quick Reference Guide

## 📚 File Locations & Purposes

### Main Files
- **index.html** - Main page with all sections (hero, products, freebies, contact)
- **style.css** - All styling including dark theme and animations
- **script.js** - Interactive features (search, filters, smooth scroll)

### Configuration Files
- **robots.txt** - Tells search engines what to crawl
- **sitemap.xml** - Lists all pages for search engines
- **.gitignore** - Files to ignore when pushing to Git

### Documentation
- **README.md** - Project overview and features
- **SETUP.md** - Installation and setup instructions
- **CUSTOMIZATION.md** - How to customize colors and styles
- **verify.html** - Setup verification page

### Asset Folders
```
images/
├── wallpapers/       (Wallpaper preview images)
├── templates/        (Template preview images)
├── printables/       (Printable product images)
└── quotes/           (Quote and poster images)
```

---

## 🎯 Common Tasks

### Update Product Prices
1. Open `index.html`
2. Find the product card with `<span class="price">$X.XX</span>`
3. Change the price value
4. Repeat for all products

### Add New Product
```html
<div class="product-card" data-filter="wallpapers">
    <div class="product-image">
        <img src="images/wallpapers/new-product.jpg" alt="Product Name">
        <div class="product-overlay">
            <button class="buy-btn" onclick="buyProduct('Product Name', 9.99)">Buy Now</button>
        </div>
    </div>
    <h4>Product Name</h4>
    <p>Product description goes here</p>
    <div class="product-footer">
        <span class="price">$9.99</span>
    </div>
</div>
```

### Change Hero Title
In `index.html`, find:
```html
<h1 class="hero-title">Noctara</h1>
```
Change `Noctara` to your preferred title.

### Update Contact Email
In `index.html`, find:
```html
<a href="mailto:amazinggreenland84@gmail.com">amazinggreenland84@gmail.com</a>
```
Replace email with your own.

### Change Primary Color
In `style.css`, update:
```css
--color-accent: #a78bfa;
--color-accent-light: #c4b5fd;
```

---

## 🔗 CSS Classes Reference

### Container Classes
- `.container` - Max-width wrapper (1200px)
- `.navbar` - Fixed navigation bar
- `.hero` - Hero section with background glows
- `.filters-section` - Category filters
- `.products` - Product grid section
- `.freebies` - Free downloads section
- `.contact` - Contact information section
- `.footer` - Footer with copyright

### Card Classes
- `.product-card` - Individual product card
- `.product-image` - Product image container
- `.product-overlay` - Hover overlay
- `.buy-btn` - Buy button styling
- `.free-badge` - "FREE" badge

### Text Classes
- `.hero-title` - Large hero heading
- `.hero-subtitle` - Subtitle text
- `.section-title` - Section heading
- `.category-title` - Category heading
- `.price` - Price text

### Button Classes
- `.btn` - Base button style
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary action button
- `.buy-btn` - Buy button
- `.filter-btn` - Category filter button

---

## 🎨 CSS Variables (Theming)

Change these variables in `:root` to instantly change theme:

```css
--color-bg: #0a0e27;              /* Main background */
--color-bg-secondary: #111633;    /* Secondary background */
--color-bg-tertiary: #1a1f3a;     /* Tertiary background */
--color-text: #ffffff;            /* Main text color */
--color-text-secondary: #b0b4c0;  /* Secondary text */
--color-accent: #a78bfa;          /* Primary accent (purple) */
--color-accent-light: #c4b5fd;    /* Light accent */
--color-border: rgba(167, 139, 250, 0.1);    /* Border */
--color-glass: rgba(255, 255, 255, 0.05);    /* Glass effect */
--color-glass-hover: rgba(255, 255, 255, 0.08);
--transition: all 0.3s cubic-bezier(...);    /* Animation timing */
```

---

## 🔧 JavaScript Functions

### `buyProduct(productName, price)`
Handles product purchase redirect to Gumroad
```javascript
buyProduct('Dark Aesthetic Wallpapers', 4.99)
```

### `downloadFree(itemName)`
Handles free item download
```javascript
downloadFree('Free Motivational Quote')
```

### `showNotification(message)`
Shows toast notification
```javascript
showNotification('Your message here')
```

### `trackEvent(eventName, eventData)`
Tracks analytics events (for Google Analytics)
```javascript
trackEvent('purchase_intent', { product: 'Wallpapers' })
```

---

## 📱 Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

---

## 🌐 SEO Checklist

- [ ] Update meta title
- [ ] Update meta description
- [ ] Update keywords
- [ ] Update Open Graph tags with correct domain
- [ ] Update Twitter card tags
- [ ] Update structured schema (JSON-LD)
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Add robots.txt to root
- [ ] Configure robots meta tag
- [ ] Add canonical URLs
- [ ] Set up Google Analytics (optional)

---

## 🚀 Deployment Steps

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial Noctara website"
git branch -M main
git remote add origin https://github.com/USERNAME/noctara
git push -u origin main
```

### Local Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server
```

### Traditional Hosting
1. Connect via FTP/SFTP
2. Upload all files to public_html or www folder
3. Visit your domain

---

## 🎬 Animation Classes

- `.fadeInUp` - Fade in and slide up
- `.slideInLeft` - Slide in from left
- `.slideInRight` - Slide in from right
- `.float` - Floating animation for glows
- `.shimmer` - Shimmering loading effect

---

## 📊 Image Specifications

### Recommended Sizes
- Product Cards: 600x400px (1.5:1 aspect ratio)
- Hero Background: 1920x1080px or higher
- Thumbnails: 300x200px
- Social Sharing: 1200x630px (OG image)

### Optimization
- Format: JPG or PNG
- Quality: 80-90%
- Max File Size: 500KB per image
- Use tools: TinyPNG, ImageOptim, or Squoosh

---

## 🔗 External Resources

### Fonts
- [Google Fonts](https://fonts.google.com)
- [Font Awesome](https://fontawesome.com)
- [Adobe Fonts](https://fonts.adobe.com)

### Color Tools
- [Coolors.co](https://coolors.co)
- [Color Hunt](https://colorhunt.co)
- [Gradient Generator](https://cssgradient.io)

### Image Tools
- [TinyPNG](https://tinypng.com)
- [Pixlr](https://pixlr.com)
- [Unsplash](https://unsplash.com) - Free images

### SEO Tools
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [SEO Checker](https://www.seobility.net)
- [PageSpeed Insights](https://pagespeed.web.dev)

---

## 💡 Pro Tips

1. **Always backup** your files before making major changes
2. **Test mobile** on actual devices, not just browser emulation
3. **Optimize images** before uploading
4. **Use browser cache** to improve loading speed
5. **Monitor analytics** to understand user behavior
6. **Update content regularly** to improve SEO
7. **Use version control** (Git) to track changes
8. **Validate HTML** at [W3C Validator](https://validator.w3.org)

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not showing | Check file paths and ensure files exist |
| Styles not applied | Clear cache (Ctrl+Shift+Delete) and refresh |
| JavaScript errors | Open console (F12) and check error messages |
| Mobile menu not working | Test in incognito mode, check console |
| Search not filtering | Check `data-filter` attribute values match |
| Animations not smooth | Reduce number of simultaneous animations |
| Site too slow | Optimize images, enable caching, use CDN |

---

## 📞 Support

- Check README.md for features overview
- Check SETUP.md for installation help
- Check CUSTOMIZATION.md for design changes
- Visit MDN Web Docs for HTML/CSS/JS help
- Check browser console (F12) for errors

---

**Last Updated: 2026-06-23**

Happy building! 🌙
