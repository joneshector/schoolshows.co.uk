/**
 * School Shows Website - JavaScript Functionality
 * Handles navigation, show display, and interactive features
 */

// Mock data for theatre shows
const showsData = [
    {
        id: 'around-world-80-days',
        title: 'Around the World in 80 Days',
        price: '£32.00',
        icon: 'fas fa-globe',
        description: 'Join Phileas Fogg on his incredible journey around the world in this thrilling adventure.',
        fullDescription: `Embark on an extraordinary journey with Phileas Fogg and his loyal servant Passepartout as they attempt to circumnavigate the globe in just 80 days to win a remarkable wager.

This exciting adaptation of Jules Verne's classic novel brings adventure, humor, and cultural discovery to your school stage. Students will be transported to exotic locations including India, Japan, the American Wild West, and beyond, encountering fascinating characters and overcoming incredible obstacles along the way.

The production offers wonderful opportunities for creative staging, period costumes, and ensemble work representing different cultures and locations. With roles ranging from the determined Phileas Fogg to the resourceful Passepartout, and numerous supporting characters from around the world, this script provides meaningful parts for students of all abilities.

Perfect for teaching geography, history, and cultural awareness while delivering an entertaining theatrical experience that will captivate audiences of all ages.`,
        duration: '95 minutes',
        castSize: '16-35 actors',
        ageRange: 'Ages 9-17',
        genre: 'Adventure Drama'
    },
    {
        id: 'the-hobbit',
        title: 'The Hobbit',
        price: '£35.00',
        icon: 'fas fa-dragon',
        description: 'Follow Bilbo Baggins on his unexpected journey to the Lonely Mountain in this beloved fantasy tale.',
        fullDescription: `Join Bilbo Baggins, a comfortable hobbit from the Shire, as he embarks on an unexpected adventure with thirteen dwarves and the wizard Gandalf to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug.

This enchanting adaptation of J.R.R. Tolkien's beloved novel captures all the magic, humor, and heart of the original story while being perfectly suited for school productions. Students will love portraying memorable characters including the brave Bilbo, the wise Gandalf, the proud dwarf leader Thorin, and the cunning Gollum.

The production offers incredible opportunities for creative staging, fantasy costumes, and special effects. From the cozy hobbit-hole of Bag End to the treacherous Misty Mountains, from the dark depths of Mirkwood to the majestic halls under the Mountain, this adaptation brings Middle-earth to vivid life.

With themes of courage, friendship, and personal growth, this script provides valuable lessons while delivering an unforgettable theatrical experience. The flexible casting allows for both intimate and large-scale productions.`,
        duration: '110 minutes',
        castSize: '18-40 actors',
        ageRange: 'Ages 10-18',
        genre: 'Fantasy Adventure'
    },
    {
        id: 'three-oranges',
        title: 'For the Love of Three Oranges',
        price: '£28.00',
        icon: 'fas fa-seedling',
        description: 'A whimsical fairy tale opera adaptation filled with magic, humor, and unexpected adventures.',
        fullDescription: `Experience the delightful absurdity of Prokofiev's famous opera in this charming adaptation that brings the magical world of fairy tales to your school stage.

This enchanting production tells the story of a melancholy Prince who can only be cured by laughter, leading to a quest for three magical oranges that contain beautiful princesses. Along the way, audiences will encounter witches, demons, a giant cook, and other fantastical characters in a story that celebrates the power of joy and love.

The adaptation maintains the whimsical spirit of the original opera while making it accessible and engaging for young performers. Students will delight in the colorful characters, magical transformations, and comedic situations that drive this unique fairy tale forward.

Perfect for schools looking to introduce students to opera and classical music traditions while providing opportunities for creative staging, elaborate costumes, and ensemble musical numbers. The script includes simplified musical elements that can be adapted to your school's musical capabilities.`,
        duration: '85 minutes',
        castSize: '14-30 actors',
        ageRange: 'Ages 8-16',
        genre: 'Musical Fantasy'
    },
    {
        id: 'magic-flute',
        title: 'The Magic Flute',
        price: '£38.00',
        icon: 'fas fa-music',
        description: 'Mozart\'s beloved opera adapted for young performers, filled with magic, music, and moral lessons.',
        fullDescription: `Discover the magic of Mozart's most beloved opera in this specially adapted version that makes the timeless story accessible and engaging for school productions.

Follow Prince Tamino on his quest to rescue Pamina, guided by a magical flute and accompanied by the bird-catcher Papageno. Together they must overcome trials of fire and water, confront the evil Queen of the Night, and learn valuable lessons about love, wisdom, and courage from the wise Sarastro.

This adaptation preserves the essential musical and dramatic elements of Mozart's masterpiece while simplifying the language and staging requirements for educational theatre. Students will be introduced to classical opera traditions while developing their musical and dramatic skills through memorable arias, duets, and ensemble pieces.

The production offers wonderful opportunities for music education, vocal development, and creative staging. With roles ranging from heroic princes and princesses to comedic characters like Papageno, this adaptation provides meaningful parts for students with varying musical abilities while teaching the values of perseverance, wisdom, and true love.`,
        duration: '100 minutes',
        castSize: '16-32 actors',
        ageRange: 'Ages 12-18',
        genre: 'Classical Opera'
    },
    {
        id: 'midsummer-nights-dream',
        title: 'Midsummer Night\'s Dream',
        price: '£35.00',
        icon: 'fas fa-masks-theater',
        description: 'Shakespeare\'s magical comedy of love, mischief, and transformation in the enchanted forest.',
        fullDescription: `Enter the enchanted world of Shakespeare's most beloved comedy in this accessible adaptation that brings the magic of the fairy kingdom to your school stage.

When four young lovers flee to the forest outside Athens, they become entangled in the mischievous schemes of Puck and the fairy king Oberon. Meanwhile, a group of amateur actors rehearsing a play for the Duke's wedding find themselves transformed by fairy magic, leading to hilarious complications and magical romance.

This adaptation maintains the poetic beauty of Shakespeare's language while making it accessible to young performers and audiences. Students will delight in playing iconic characters like the mischievous Puck, the regal fairy queen Titania, the transformed Bottom, and the confused young lovers, while learning valuable lessons about love, friendship, and the power of imagination.

The production offers wonderful opportunities for creative staging, costume design, and special effects to bring the magical transformations to life. With themes of love conquering all obstacles and the triumph of comedy over conflict, this timeless play provides both entertainment and educational value.`,
        duration: '95 minutes',
        castSize: '16-30 actors',
        ageRange: 'Ages 12-18',
        genre: 'Classical Comedy'
    },
    {
        id: 'canterbury-tales',
        title: 'Canterbury Tales',
        price: '£30.00',
        icon: 'fas fa-horse',
        description: 'Chaucer\'s timeless stories brought to life in an entertaining collection of medieval tales.',
        fullDescription: `Journey back to medieval England with Geoffrey Chaucer's pilgrims as they travel to Canterbury Cathedral, sharing entertaining tales along the way in this engaging adaptation of the classic work.

This production brings together some of Chaucer's most beloved and accessible stories, including tales of knights, millers, nuns, and merchants, each with their own unique personality and perspective on life in the Middle Ages. Students will be transported to a world of chivalry, humor, and human nature that remains relevant today.

The adaptation presents Chaucer's stories in modern English while preserving the spirit and moral lessons of the original tales. Students will enjoy portraying the diverse cast of pilgrims, each representing different aspects of medieval society, from the noble Knight to the cunning Wife of Bath.

Perfect for teaching medieval history, literature, and social studies, this production offers opportunities for period costume design, ensemble work, and storytelling techniques. The episodic structure allows for flexible casting and can be adapted to highlight specific tales that best suit your students and educational goals.`,
        duration: '90 minutes',
        castSize: '12-28 actors',
        ageRange: 'Ages 11-17',
        genre: 'Historical Drama'
    },
    {
        id: 'jones-family-christmas',
        title: 'A Jones Family Christmas',
        price: '£26.00',
        icon: 'fas fa-snowflake',
        description: 'A heartwarming modern Christmas story about family, forgiveness, and the true meaning of the holidays.',
        fullDescription: `Celebrate the magic of Christmas with the Jones family in this heartwarming original story that explores the true meaning of the holiday season through laughter, tears, and ultimately, love.

When the Jones family gathers for their annual Christmas celebration, old rivalries, forgotten dreams, and long-held secrets threaten to ruin the holiday. But through a series of touching and humorous events, family members young and old rediscover the importance of forgiveness, understanding, and the bonds that tie families together.

This contemporary Christmas play addresses modern family dynamics while celebrating traditional holiday values. Students will relate to characters dealing with real-life issues like sibling rivalry, generational differences, career pressures, and the challenge of maintaining family connections in a busy world.

The production offers wonderful opportunities for realistic character development, contemporary staging, and the incorporation of beloved Christmas traditions. With roles for multiple generations and various personality types, this script ensures that every student can find a character that resonates with their own experiences and abilities.`,
        duration: '85 minutes',
        castSize: '10-22 actors',
        ageRange: 'Ages 8-18',
        genre: 'Contemporary Holiday Drama'
    }
];

// Current show being displayed in detail view
let currentShow = null;

// DOM elements
let navbar, navbarBurger, navbarMenu, navbarItems;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeShows();
    initializeContactForm();
    
    // Set initial active page
    showPage('home');
});

/**
 * Initialize navigation functionality
 */
function initializeNavigation() {
    navbar = document.getElementById('navbar');
    navbarBurger = document.getElementById('navbar-burger');
    navbarMenu = document.getElementById('navbar-menu');
    navbarItems = document.querySelectorAll('.navbar-item');

    // Mobile menu toggle
    if (navbarBurger) {
        navbarBurger.addEventListener('click', toggleMobileMenu);
    }

    // Navigation item clicks
    navbarItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            showPage(page);
            closeMobileMenu();
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
}

/**
 * Initialize shows functionality
 */
function initializeShows() {
    renderShowsGrid();
}

/**
 * Initialize contact form
 */
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
}

/**
 * Show specific page and update navigation
 */
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update navbar active state
    navbarItems.forEach(item => {
        item.classList.remove('navbar-item-active');
        if (item.getAttribute('data-page') === pageId) {
            item.classList.add('navbar-item-active');
        }
    });

    // Update page title
    updatePageTitle(pageId);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Update page title based on current page
 */
function updatePageTitle(pageId) {
    const titles = {
        'home': 'School Shows - Theatre Scripts for Education',
        'shows': 'Our Shows - School Shows',
        'about': 'About Us - School Shows',
        'contact': 'Contact - School Shows',
        'show-detail': 'Show Details - School Shows'
    };
    
    document.title = titles[pageId] || 'School Shows - Theatre Scripts for Education';
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    navbarBurger.classList.toggle('navbar-burger-active');
    navbarMenu.classList.toggle('navbar-menu-active');
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    navbarBurger.classList.remove('navbar-burger-active');
    navbarMenu.classList.remove('navbar-menu-active');
}

/**
 * Handle navbar scroll effects
 */
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
}

/**
 * Render shows grid with all shows
 */
function renderShowsGrid() {
    const showsGrid = document.getElementById('shows-grid');
    if (!showsGrid) return;

    showsGrid.innerHTML = '';

    showsData.forEach(show => {
        const showTile = createShowTile(show);
        showsGrid.appendChild(showTile);
    });
}

/**
 * Create a show tile element
 */
function createShowTile(show) {
    const tile = document.createElement('div');
    tile.className = 'show-tile';
    tile.addEventListener('click', () => showShowDetail(show.id));

    tile.innerHTML = `
        <div class="show-tile-image">
            <i class="${show.icon}"></i>
        </div>
        <div class="show-tile-content">
            <h3 class="show-tile-title">${show.title}</h3>
            <div class="show-tile-price">${show.price}</div>
            <p class="show-tile-description">${show.description}</p>
            <div class="show-tile-meta">
                <span><i class="fas fa-clock"></i> ${show.duration}</span>
                <span><i class="fas fa-users"></i> ${show.castSize}</span>
                <span><i class="fas fa-child"></i> ${show.ageRange}</span>
            </div>
        </div>
    `;

    return tile;
}

/**
 * Show detailed view of a specific show
 */
function showShowDetail(showId) {
    const show = showsData.find(s => s.id === showId);
    if (!show) return;

    currentShow = show;

    // Populate show detail elements
    document.getElementById('detail-image').innerHTML = `<i class="${show.icon}"></i>`;
    document.getElementById('detail-title').textContent = show.title;
    document.getElementById('detail-price').textContent = show.price;
    document.getElementById('detail-duration').textContent = show.duration;
    document.getElementById('detail-cast').textContent = show.castSize;
    document.getElementById('detail-age').textContent = show.ageRange;
    document.getElementById('detail-description').innerHTML = formatDescription(show.fullDescription);

    // Show the detail page
    showPage('show-detail');
}

/**
 * Format description with paragraphs
 */
function formatDescription(description) {
    return description.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('');
}

/**
 * Handle contact form submission
 */
function handleContactFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Simulate form submission
    console.log('Contact form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    e.target.reset();
}

/**
 * Smooth scroll to element
 */
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Add click handlers for internal links
 */
document.addEventListener('click', function(e) {
    // Handle internal navigation links
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        
        // Check if it's a page navigation
        const pages = ['home', 'shows', 'about', 'contact'];
        if (pages.includes(targetId)) {
            showPage(targetId);
        } else {
            scrollToElement(targetId);
        }
    }
});

/**
 * Handle window resize for responsive behavior
 */
window.addEventListener('resize', function() {
    // Close mobile menu on desktop
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

/**
 * Keyboard navigation support
 */
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
    
    // Enter key on show tiles
    if (e.key === 'Enter' && e.target.classList.contains('show-tile')) {
        e.target.click();
    }
});

/**
 * Add loading animation for show transitions
 */
function addLoadingState() {
    document.body.classList.add('loading');
}

function removeLoadingState() {
    document.body.classList.remove('loading');
}

/**
 * Utility function to create elements with classes and content
 */
function createElement(tag, className, content) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.innerHTML = content;
    return element;
}

/**
 * Initialize animations and interactions
 */
function initializeAnimations() {
    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .show-tile, .value-card, .review-card');
    animateElements.forEach(el => observer.observe(el));
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAnimations);

/**
 * Export functions for global access
 */
window.showPage = showPage;
window.showShowDetail = showShowDetail;
