# Noctara - Installation & Setup Guide

## 📋 Complete Setup Instructions

### Step 1: File Structure ✅
Your project is already organized:
```
noctara/
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── README.md
└── images/
    ├── wallpapers/
    ├── templates/
    ├── printables/
    └── quotes/
```

### Step 2: Add Product Images
Collect your product preview images:

**Wallpapers** (images/wallpapers/)
- dark-aesthetic.jpg
- anime.jpg
- motivation.jpg
- phone.jpg
- desktop-pack.jpg

**Templates** (images/templates/)
- instagram-posts.jpg
- story-templates.jpg
- pinterest-pins.jpg
- quote-templates.jpg
- business-posts.jpg

**Printables** (images/printables/)
- daily-planner.jpg
- weekly-planner.jpg
- habit-tracker.jpg
- savings-tracker.jpg
- budget-planner.jpg
- todo-lists.jpg
- free-todo.jpg

**Quotes** (images/quotes/)
- motivational-posters.jpg
- dark-aesthetic-quotes.jpg
- stoic-quotes.jpg
- study-motivation.jpg
- free-quote.jpg

**Freebies** (images/ directories)
- free-aesthetic.jpg
- free-template.jpg

**Image Tips:**
- Use JPG or PNG format
- Recommended size: 600x400px or 1200x800px
- Keep file sizes under 500KB
- Use descriptive file names

### Step 3: Update Content

#### Update Contact Information
Open `index.html` and find:
```html
<a href="mailto:amazinggreenland84@gmail.com">amazinggreenland84@gmail.com</a>
```
Replace with your email.

#### Update Social Links
Find in `index.html`:
```html
<a href="https://instagram.com" class="social-link" title="Instagram">
<a href="https://pinterest.com" class="social-link" title="Pinterest">
```
Replace with your actual profile URLs.

#### Update Gumroad Links
In `script.js`, find:
```javascript
const gumroadLink = `https://gumroad.com/noctara`;
```
Replace with your Gumroad profile URL.

### Step 4: Testing Locally

**Option A: Using Python**
```bash
cd ~/Desktop/noctara
python -m http.server 8000
```
Visit: http://localhost:8000

**Option B: Using Node.js**
```bash
cd ~/Desktop/noctara
npx http-server
```

**Option C: VS Code Live Server**
- Install "Live Server" extension
- Right-click index.html → "Open with Live Server"

### Step 5: Google Search Console Setup

1. Go to https://search.google.com/search-console
2. Click "Add property" → Enter your domain
3. Verify ownership (add DNS record or HTML file)
4. Submit sitemap.xml:
   - Click "Sitemaps" in left menu
   - Enter: `https://yourdomain.com/sitemap.xml`
   - Click "Submit"

### Step 6: Domain Setup (Optional)

**For GitHub Pages:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/noctara.git
git push -u origin main
```

Then in GitHub:
1. Go to Settings → Pages
2. Set "Source" to "main branch"
3. Under "Custom domain", enter your domain
4. Configure DNS settings at your registrar

### Step 7: Performance Optimization

**Optimize Images:**
```bash
# Using ImageMagick
convert input.jpg -quality 85 -resize 1200x800 output.jpg

# Or use online tools:
# - TinyPNG (tinypng.com)
# - ImageOptim (imageoptim.com)
```

**Minify CSS/JS for production:**
- Use https://minifier.org/
- Or use build tools like Webpack

### Step 8: SSL Certificate (For HTTPS)

If using custom domain:
- Use Cloudflare (free SSL)
- Or use Let's Encrypt (free SSL)
- GitHub Pages includes free HTTPS

### Step 9: Analytics Setup (Optional)

Add Google Analytics:
1. Go to https://analytics.google.com
2. Create new property
3. Copy tracking ID
4. Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Step 10: Launch!

✅ Check everything:
- [ ] All images are in correct folders
- [ ] Contact email is updated
- [ ] Social links are correct
- [ ] Gumroad links are working
- [ ] Website looks good on mobile
- [ ] Search functions work
- [ ] Links scroll smoothly
- [ ] Product cards animate on hover

## 🚀 Deployment Checklist

**Before Going Live:**
- [ ] All images optimized and compressed
- [ ] No console errors (check F12)
- [ ] Mobile responsive tested
- [ ] Links tested on all devices
- [ ] Loading times acceptable
- [ ] SEO meta tags updated
- [ ] Sitemap submitted to Google
- [ ] SSL certificate installed
- [ ] Analytics setup (optional)

**Post-Launch:**
- [ ] Monitor Google Search Console
- [ ] Check website speed with PageSpeed Insights
- [ ] Test in different browsers
- [ ] Monitor user analytics
- [ ] Update content regularly

## 💡 Pro Tips

1. **Image Naming**: Use descriptive names like `dark-aesthetic-wallpaper-4k.jpg`
2. **SEO**: Update meta descriptions for each page
3. **Social Sharing**: Update OG images for better preview
4. **Mobile**: Test on actual phones, not just browser dev tools
5. **Speed**: Use Image CDN like Cloudinary for faster delivery
6. **Backup**: Use GitHub to version control your files
7. **Uptime**: Consider Uptime Robot (free monitoring)

## 🔧 Common Issues & Solutions

**Issue: Images not loading**
- Solution: Check image paths - use relative paths like `images/wallpapers/image.jpg`

**Issue: Styles look weird**
- Solution: Clear cache (Ctrl+Shift+Delete) and refresh

**Issue: Mobile menu not working**
- Solution: Check browser console for JavaScript errors

**Issue: Products not filtering**
- Solution: Verify `data-filter` attributes match filter button values

## 📞 Support Resources

- **MDN Web Docs**: https://developer.mozilla.org
- **Google Search Guide**: https://developers.google.com/search
- **Stack Overflow**: https://stackoverflow.com
- **CSS Tricks**: https://css-tricks.com

---

**Ready to launch Noctara? You've got this! 🌙**
