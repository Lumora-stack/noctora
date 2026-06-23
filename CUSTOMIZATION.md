# Noctara Customization Guide

## 🎨 Color Theme Customization

### Dark Mode Theme (Default)
Located in `style.css` at the top:

```css
:root {
    --color-bg: #0a0e27;              /* Main background */
    --color-bg-secondary: #111633;    /* Secondary background */
    --color-bg-tertiary: #1a1f3a;     /* Tertiary background */
    --color-text: #ffffff;            /* Main text */
    --color-text-secondary: #b0b4c0;  /* Secondary text */
    --color-accent: #a78bfa;          /* Purple accent */
    --color-accent-light: #c4b5fd;    /* Light purple */
    --color-border: rgba(167, 139, 250, 0.1);  /* Border color */
    --color-glass: rgba(255, 255, 255, 0.05);  /* Glass effect */
    --color-glass-hover: rgba(255, 255, 255, 0.08);
}
```

### Change to Different Colors

**Dark Blue Theme:**
```css
:root {
    --color-accent: #3b82f6;           /* Blue instead of purple */
    --color-accent-light: #60a5fa;
    --color-border: rgba(59, 130, 246, 0.1);
}
```

**Dark Red/Crimson Theme:**
```css
:root {
    --color-accent: #ef4444;           /* Red instead of purple */
    --color-accent-light: #f87171;
    --color-border: rgba(239, 68, 68, 0.1);
}
```

**Emerald Green Theme:**
```css
:root {
    --color-accent: #10b981;           /* Green instead of purple */
    --color-accent-light: #34d399;
    --color-border: rgba(16, 185, 129, 0.1);
}
```

## 📝 Typography Customization

### Change Font

**Option 1: Google Fonts**
Add to `index.html` before `<link rel="stylesheet" href="style.css">`:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Then in `style.css`:
```css
body {
    font-family: 'Poppins', sans-serif;
}

.hero-title {
    font-family: 'Playfair Display', serif;
}
```

**Option 2: System Fonts**
```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
}
```

### Adjust Font Sizes

In `style.css`:
```css
.hero-title {
    font-size: clamp(48px, 8vw, 120px);  /* Smaller to larger */
}

.section-title {
    font-size: clamp(32px, 5vw, 48px);   /* Adjust range */
}
```

## 🎭 Animations & Effects

### Disable Animations (for slower devices)
Add to `style.css`:
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

### Change Animation Speed
In `style.css`:
```css
:root {
    --transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    /* Change 0.3s to 0.5s for slower, 0.1s for faster */
    --transition-slow: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### Adjust Glow Effects
In `.hero-background`:
```css
.glow {
    filter: blur(100px);  /* Change blur amount */
    opacity: 0.15;        /* Change opacity (0-1) */
}
```

## 📱 Layout Customization

### Change Product Grid Columns

In `style.css`:
```css
.product-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    /* Change 280px to make cards wider/narrower */
}

/* For 2 column layout: */
/* grid-template-columns: repeat(2, 1fr); */

/* For 4 column layout: */
/* grid-template-columns: repeat(4, 1fr); */
```

### Adjust Card Gap (spacing)
```css
.product-grid {
    gap: 30px;  /* Change to 20px for tighter, 40px for looser */
}
```

### Change Container Width
In `style.css`:
```css
.container {
    max-width: 1200px;  /* Change to 1400px for wider, 1000px for narrower */
}
```

## 🎯 Button Customization

### Change Button Styles

**Rounded Buttons:**
```css
.btn {
    border-radius: 25px;  /* Increase for more rounded */
}
```

**Button Colors:**
```css
.btn-primary {
    background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
    /* Change hex codes to your colors */
}
```

**Button Sizes:**
```css
.btn {
    padding: 14px 32px;  /* Change padding: vertical horizontal */
    font-size: 15px;     /* Change font size */
}
```

## 🔒 Navigation Bar Customization

### Change Navbar Height
```css
.navbar {
    height: 80px;  /* Change to 60px or 100px */
}
```

### Change Logo Size
```css
.logo-text {
    font-size: 24px;  /* Change font size */
    letter-spacing: 1px;  /* Change letter spacing */
}
```

### Hide/Show Elements

Hide search bar:
```css
.nav-search {
    display: none;
}
```

Hide navigation menu on desktop:
```css
.nav-menu {
    display: none;
}
```

## 📸 Image Customization

### Aspect Ratio of Product Images
```css
.product-image {
    height: 240px;  /* Change to 300px or 200px */
}
```

### Image Hover Effect
```css
.product-image img {
    transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.1);  /* Change 1.1 to 1.2 for bigger zoom */
}
```

## 🌈 Hero Section Customization

### Change Hero Height
```css
.hero {
    min-height: calc(100vh - 80px);  /* Change to 50vh or 60vh */
}
```

### Change Hero Background Gradient
```css
.hero {
    background: linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-secondary) 100%);
    /* Adjust angle: 180deg, 45deg, etc. */
}
```

### Change Glow Positions
```css
.glow-1 {
    top: 20%;     /* Vertical position */
    left: 10%;    /* Horizontal position */
    width: 300px; /* Size */
}
```

## 🔧 Advanced Customizations

### Add Custom Fonts from Files
```css
@font-face {
    font-family: 'CustomFont';
    src: url('fonts/customfont.woff2') format('woff2');
}

body {
    font-family: 'CustomFont', sans-serif;
}
```

### Change Backdrop Blur Amount
```css
.navbar {
    backdrop-filter: blur(10px);  /* Change blur strength */
}
```

### Add Custom Shadow Effects
```css
.product-card:hover {
    box-shadow: 0 20px 40px rgba(167, 139, 250, 0.15);
    /* Adjust RGB values and opacity (0.15 = 15%) */
}
```

### Create Custom Gradients
```css
background: linear-gradient(
    135deg,
    #a78bfa 0%,
    #c4b5fd 50%,
    #8b5cf6 100%
);
```

## 📋 Product Data Customization

### Add New Product Category
1. Add new category div in `index.html`:
```html
<div class="category" data-category="new-category">
    <h3 class="category-title">New Category</h3>
    <div class="product-grid">
        <!-- Product cards here -->
    </div>
</div>
```

2. Add filter button in `index.html`:
```html
<button class="filter-btn" data-filter="new-category">New Category</button>
```

### Update Product Prices Globally
Use Find & Replace (Ctrl+H) in VS Code to change prices easily.

## 🎬 Create Custom Animations

Add to `style.css`:
```css
@keyframes customAnimation {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.product-card {
    animation: customAnimation 0.6s ease-out forwards;
}
```

## 📊 Responsive Breakpoints

Customize breakpoints in `style.css`:

```css
/* Tablet */
@media (max-width: 768px) {
    /* Styles for tablets */
}

/* Mobile */
@media (max-width: 480px) {
    /* Styles for phones */
}

/* Large Desktop */
@media (min-width: 1400px) {
    .product-grid {
        grid-template-columns: repeat(5, 1fr);
    }
}
```

## 🎨 CSS Variables Quick Reference

Change these to quickly customize everything:

```css
--color-bg: #0a0e27;              /* Dark background */
--color-accent: #a78bfa;          /* Purple accent color */
--color-text: #ffffff;            /* White text */
--color-text-secondary: #b0b4c0;  /* Gray text */
--transition: all 0.3s ease;      /* Animation speed */
```

---

**Tip:** Always test your changes across different screen sizes!

