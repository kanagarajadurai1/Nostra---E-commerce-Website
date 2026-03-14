// ========== SAMPLE PRODUCTS DATABASE ==========
const products = [
    // Men's Fashion
    { id: 1, name: "Classic White T-Shirt", category: "men", price: 29.99, size: ["s", "m", "l", "xl"], color: "white", image: "https://i.pinimg.com/1200x/67/23/eb/6723ebdf7971a082f06d7c16f0c398da.jpg" },
    { id: 2, name: "Premium Black Hoodie", category: "men", price: 79.99, size: ["m", "l", "xl"], color: "black", image: "https://i.pinimg.com/736x/02/cc/37/02cc37fde213d399ec3c3a0566e99116.jpg" },
    { id: 3, name: "Slim Fit Jeans", category: "men", price: 69.99, size: ["s", "m", "l"], color: "black", image: "https://i.pinimg.com/1200x/00/a8/3b/00a83b556decf65a3f3dec5e656671cb.jpg" },
    { id: 4, name: "Casual Chinos", category: "men", price: 59.99, size: ["m", "l", "xl"], color: "white", image: "https://i.pinimg.com/736x/09/70/90/097090d53f00ce3710f4b19fb7114b98.jpg" },
    
    // Women's Fashion
    { id: 5, name: "Summer Dress", category: "women", price: 59.99, size: ["xs", "s", "m", "l"], color: "red", image: "https://i.pinimg.com/736x/25/e1/ef/25e1ef055644b70b75abbd2b80ac62b5.jpg" },
    { id: 6, name: "Elegant Black Blazer", category: "women", price: 89.99, size: ["xs", "s", "m"], color: "black", image: "https://i.pinimg.com/1200x/e0/f5/b2/e0f5b2d0df7e187fff7ea37f7af2aa45.jpg" },
    { id: 7, name: "Flowy Skirt", category: "women", price: 49.99, size: ["s", "m", "l"], color: "teal", image: "https://i.pinimg.com/1200x/20/d2/0f/20d20fd8302a6f8e68f5232da6c2d68e.jpg" },
    { id: 8, name: "Cozy Sweater", category: "women", price: 79.99, size: ["xs", "s", "m", "l"], color: "mint", image: "https://i.pinimg.com/1200x/7a/e3/c5/7ae3c5492fb156e42650c91914a95055.jpg" },
    
    // Accessories
    { id: 9, name: "Classic Black Belt", category: "accessories", price: 24.99, size: ["one"], color: "black", image: "https://i.pinimg.com/1200x/bd/75/d7/bd75d7364ec885df194df4c26350db62.jpg" },
    { id: 10, name: "Wool Beanie", category: "accessories", price: 19.99, size: ["one"], color: "black", image: "https://i.pinimg.com/736x/9f/50/ad/9f50ad660000c8f0872b957cb4476e39.jpg" },
    { id: 11, name: "Summer Cap", category: "accessories", price: 19.99, size: ["one"], color: "yellow", image: "https://i.pinimg.com/1200x/36/43/37/364337a988fdd5595b38abbf1dba4cb9.jpg" },
    
    // Shoes
    { id: 12, name: "Premium Athletic Shoes", category: "shoes", price: 99.99, size: ["s", "m", "l", "xl"], color: "black", image: "https://i.pinimg.com/736x/e7/63/df/e763df4e0ae499f8c38cef281f5aad39.jpg" },
    { id: 13, name: "Running Sneakers", category: "shoes", price: 89.99, size: ["s", "m", "l", "xl"], color: "white", image: "https://i.pinimg.com/736x/de/2d/02/de2d021e61235ccfcd81fa355f6790fc.jpg" },
    { id: 14, name: "Formal Shoes", category: "shoes", price: 99.99, size: ["s", "m", "l", "xl"], color: "black", image: "https://i.pinimg.com/1200x/75/c5/83/75c5834ce8cd653d4618a606210781c4.jpg" },
    { id: 15, name: "Chuck Taylor", category: "shoes", price: 99.99, size: ["s", "m", "l", "xl"], color: "black", image: "https://i.pinimg.com/1200x/52/f0/5c/52f05cdb1e824927e8c10e195bcd72ca.jpg" },

];

// ========== HEADER FUNCTIONALITY ==========
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Initialize products on collections page
    if (document.getElementById('productsContainer')) {
        displayProducts(products);
    }

    // Price slider update
    const priceFilter = document.getElementById('priceFilter');
    const priceValue = document.getElementById('priceValue');
    if (priceFilter) {
        priceFilter.addEventListener('input', (e) => {
            priceValue.textContent = e.target.value;
        });
    }
});

// ========== SLIDER FUNCTIONALITY ==========
let slideIndex = 1;

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach(slide => slide.style.display = 'none');
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = 'block';
    }
}

// Auto-advance slider every 5 seconds
setInterval(() => {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        changeSlide(1);
    }
}, 5000);

// Initialize slider
if (document.querySelector('.slide')) {
    showSlide(slideIndex);
}

// ========== COLLECTIONS PAGE FUNCTIONS ==========

// Display products in grid
function displayProducts(productsToDisplay) {
    const container = document.getElementById('productsContainer');
    const noResults = document.getElementById('noResults');
    const resultCount = document.getElementById('resultCount');

    if (!container) return;

    container.innerHTML = '';

    if (productsToDisplay.length === 0) {
        noResults.style.display = 'block';
        resultCount.textContent = '0';
        return;
    }

    noResults.style.display = 'none';
    resultCount.textContent = productsToDisplay.length;

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card featured';
        productCard.innerHTML = `
            <span class="badge">sale</span>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <button class="btn-quick" onclick="alert('Added to cart: ${product.name}')">Shop Now</button>
            </div>
            <i class="fas fa-heart heart-icon" onclick="toggleHeart(this)"></i>
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
        `;
        container.appendChild(productCard);
    });
}

// Filter and search products
function filterAndSearch() {
    const searchInput = document.getElementById('searchInput');
    const categoryCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"][value!="all"][value!="xs"][value!="s"][value!="m"][value!="l"][value!="xl"][value!="black"][value!="white"][value!="red"][value!="teal"][value!="yellow"][value!="mint"]');
    const sizeCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"][value="xs"], .filter-group input[type="checkbox"][value="s"], .filter-group input[type="checkbox"][value="m"], .filter-group input[type="checkbox"][value="l"], .filter-group input[type="checkbox"][value="xl"]');
    const colorCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"][value="black"], .filter-group input[type="checkbox"][value="white"], .filter-group input[type="checkbox"][value="red"], .filter-group input[type="checkbox"][value="teal"], .filter-group input[type="checkbox"][value="yellow"], .filter-group input[type="checkbox"][value="mint"]');
    const priceFilter = document.getElementById('priceFilter');

    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const maxPrice = priceFilter ? parseInt(priceFilter.value) : 200;

    // Get selected categories
    const selectedCategories = Array.from(document.querySelectorAll('.filter-group input[type="checkbox"]'))
        .filter(checkbox => checkbox.checked && ['men', 'women', 'accessories', 'shoes'].includes(checkbox.value))
        .map(checkbox => checkbox.value);

    // Get selected sizes
    const selectedSizes = Array.from(sizeCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    // Get selected colors
    const selectedColors = Array.from(colorCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    // Filter products
    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const matchesPrice = product.price <= maxPrice;
        const matchesSize = selectedSizes.length === 0 || selectedSizes.some(size => product.size.includes(size));
        const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);

        return matchesSearch && matchesCategory && matchesPrice && matchesSize && matchesColor;
    });

    displayProducts(filtered);
}

// Reset filters
function resetFilters() {
    // Reset search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';

    // Reset price
    const priceFilter = document.getElementById('priceFilter');
    const priceValue = document.getElementById('priceValue');
    if (priceFilter) {
        priceFilter.value = 200;
        priceValue.textContent = '200';
    }

    // Reset checkboxes
    document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Check "All Products"
    const allCheckbox = document.querySelector('.filter-group input[type="checkbox"][value="all"]');
    if (allCheckbox) allCheckbox.checked = true;

    // Display all products
    displayProducts(products);
}

// Sort products
function sortProducts() {
    const sortBy = document.getElementById('sortBy');
    if (!sortBy) return;

    const container = document.getElementById('productsContainer');
    const productCards = Array.from(container.querySelectorAll('.product-card'));

    switch (sortBy.value) {
        case 'price-low':
            productCards.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
                const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
                return priceA - priceB;
            });
            break;
        case 'price-high':
            productCards.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
                const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
                return priceB - priceA;
            });
            break;
        case 'name':
            productCards.sort((a, b) => {
                const nameA = a.querySelector('h3').textContent;
                const nameB = b.querySelector('h3').textContent;
                return nameA.localeCompare(nameB);
            });
            break;
    }

    container.innerHTML = '';
    productCards.forEach(card => container.appendChild(card));
}

// Toggle heart icon
function toggleHeart(element) {
    element.style.color = element.style.color === 'rgb(255, 107, 107)' ? 'white' : '#ff6b6b';
}

// ========== CONTACT PAGE FUNCTIONS ==========

// Handle contact form submission
function handleContactForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    // Simple validation
    if (!name || !email || !message) {
        showFormMessage('Please fill in all required fields', 'error');
        return;
    }

    // Simulate form submission
    setTimeout(() => {
        showFormMessage('Thank you! We received your message. We will get back to you soon.', 'success');
        document.querySelector('.contact-form').reset();
    }, 500);
}

// Show form message
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (!formMessage) return;

    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Toggle FAQ
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const wasActive = faqItem.classList.contains('active');

    // Close all FAQs
    document.querySelectorAll('.faq-item.active').forEach(item => {
        item.classList.remove('active');
    });

    // Open clicked FAQ if it wasn't already open
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

// ========== NEWSLETTER SUBSCRIPTION ==========

function handleNewsletterSubmit(event) {
    event.preventDefault();

    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (!email) {
        alert('Please enter a valid email address');
        return;
    }

    // Simulate subscription
    alert('Thank you for subscribing! Check your email for exclusive offers.');
    event.target.reset();
}

// ========== SMOOTH SCROLLING FOR ANCHOR LINKS ==========

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// ========== LOCAL STORAGE FOR FAVORITES ==========

function addToFavorites(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (!favorites.includes(productId)) {
        favorites.push(productId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

function removeFromFavorites(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites = favorites.filter(id => id !== productId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function isFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(productId);
}

// ========== UTILITY FUNCTIONS ==========

// Format currency
function formatCurrency(amount) {
    return '$' + parseFloat(amount).toFixed(2);
}

// Debounce function for search
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

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========== PERFORMANCE OPTIMIZATION ==========

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('Nostra E-Commerce Website Initialized');