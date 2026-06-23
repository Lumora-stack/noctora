// ========================================
// DOM ELEMENTS
// ========================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');
const scrollToTopBtn = document.getElementById('scrollToTop');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const categoryElements = document.querySelectorAll('.category');

const tiltCards = document.querySelectorAll('.product-card');

// ========================================
// MOBILE MENU TOGGLE
// ========================================

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = menuToggle.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translateY(15px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translateY(-15px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.querySelectorAll('span').forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    });
});

// Product card tilt effect
function handleCardTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;
    const rotateY = ((x - halfWidth) / halfWidth) * 16;
    const rotateX = ((halfHeight - y) / halfHeight) * 16;

    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.03)`;
    card.style.boxShadow = '0 35px 80px rgba(139, 92, 246, 0.28)';
}

function resetCardTilt(e) {
    const card = e.currentTarget;
    card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    card.style.boxShadow = '0 18px 55px rgba(0, 0, 0, 0.35)';
}

tiltCards.forEach(card => {
    card.addEventListener('mousemove', handleCardTilt);
    card.addEventListener('mouseleave', resetCardTilt);
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// SEARCH FUNCTIONALITY
// ========================================

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    productCards.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'flex';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 10);
        } else {
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
});

// ========================================
// CATEGORY FILTER
// ========================================

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        if (filterValue === 'all') {
            // Show all categories
            categoryElements.forEach(category => {
                category.style.display = 'block';
                setTimeout(() => {
                    category.style.opacity = '1';
                }, 10);
            });
            
            productCards.forEach(card => {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 10);
            });
        } else {
            // Hide all categories
            categoryElements.forEach(category => {
                category.style.opacity = '0';
                setTimeout(() => {
                    category.style.display = 'none';
                }, 300);
            });
            
            // Show filtered cards
            productCards.forEach(card => {
                if (card.getAttribute('data-filter') === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
            
            // Show the relevant category title
            categoryElements.forEach(category => {
                if (category.getAttribute('data-category') === filterValue) {
                    category.style.display = 'block';
                    setTimeout(() => {
                        category.style.opacity = '1';
                    }, 10);
                }
            });
        }
    });
});

// ========================================
// BUY PRODUCT FUNCTIONALITY
// ========================================

function buyProduct(productName) {
    // Open your Gumroad dashboard link
    const gumroadLink = 'https://gumroad.com/dashboard';
    
    showNotification(`Opening Gumroad for ${productName}...`);
    
    setTimeout(() => {
        window.open(gumroadLink, '_blank');
    }, 450);
}

// ========================================
// DOWNLOAD FREEBIE FUNCTIONALITY
// ========================================

function downloadFree(itemName) {
    // Show notification
    showNotification(`Preparing download for ${itemName}...`);
    
    // Simulate download process
    setTimeout(() => {
        showNotification(`${itemName} ready to download!`);
    }, 1500);
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%);
        color: #0a0e27;
        padding: 15px 30px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 14px;
        z-index: 2000;
        box-shadow: 0 8px 25px rgba(167, 139, 250, 0.3);
        animation: slideUp 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ========================================
// SMOOTH SCROLL OFFSET FOR FIXED NAV
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = element.offsetTop - navHeight;
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// LAZY LOADING IMAGES
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// CARD ANIMATION ON SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

productCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

document.addEventListener('keydown', (e) => {
    // Ctrl + K to focus search
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
    }
    
    // Escape to clear search
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
    }
});

// ========================================
// PAGE LOAD ANIMATIONS
// ========================================

window.addEventListener('load', () => {
    // Add animation class to hero elements
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) heroTitle.style.animation = 'fadeInUp 0.8s ease-out';
    if (heroSubtitle) heroSubtitle.style.animation = 'fadeInUp 0.8s ease-out 0.1s both';
    if (heroButtons) heroButtons.style.animation = 'fadeInUp 0.8s ease-out 0.2s both';
});

// ========================================
// SMOOTH ANIMATIONS CSS
// ========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// PAGE VISIBILITY OPTIMIZATION
// ========================================

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations if page is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations
        document.body.style.animationPlayState = 'running';
    }
});

// ========================================
// ANALYTICS TRACKING (PLACEHOLDER)
// ========================================

function trackEvent(eventName, eventData) {
    // This function can be used for analytics tracking
    console.log(`Event: ${eventName}`, eventData);
    
    // In production, you would send this to Google Analytics or similar
    // Example: gtag('event', eventName, eventData);
}

// Track buy button clicks
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('buy-btn')) {
        const productName = e.target.closest('.product-card').querySelector('h4').textContent;
        trackEvent('purchase_intent', { product: productName });
    }
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Debounce function for search input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce search input
const debouncedSearch = debounce(() => {}, 300);

searchInput.addEventListener('input', debouncedSearch);

// ========================================
// INITIALIZATION
// ========================================

console.log('Noctara website loaded successfully! 🌙');
