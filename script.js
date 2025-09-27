/**
 * School Shows Website - JavaScript Functionality
 * Handles navigation, show display, and interactive features
 */

// Mock data for theatre shows
const showsData = [
    {
        id: 'alice-wonderland',
        title: 'Alice in Wonderland',
        price: '£25.00',
        icon: 'fas fa-hat-wizard',
        description: 'A whimsical journey down the rabbit hole with Alice and her extraordinary friends.',
        fullDescription: `Join Alice on her incredible adventure through Wonderland in this enchanting adaptation perfect for school productions. This script captures all the magic and wonder of Lewis Carroll's beloved classic while being tailored specifically for young performers.

The story follows Alice as she tumbles down the rabbit hole into a world of talking animals, mad tea parties, and impossible riddles. Students will love portraying the colorful characters including the White Rabbit, the Cheshire Cat, the Mad Hatter, and the fearsome Queen of Hearts.

This adaptation includes opportunities for creative staging, costume design, and set decoration that will engage students both on stage and behind the scenes. The script is written with flexible casting in mind, allowing for intimate productions or large ensemble pieces.`,
        duration: '90 minutes',
        castSize: '12-25 actors',
        ageRange: 'Ages 8-16',
        genre: 'Fantasy Adventure'
    },
    {
        id: 'robin-hood',
        title: 'Robin Hood: Hero of Sherwood',
        price: '£30.00',
        icon: 'fas fa-crosshairs',
        description: 'The legendary tale of Robin Hood and his Merry Men fighting for justice in medieval England.',
        fullDescription: `Experience the thrilling adventures of Robin Hood and his band of Merry Men in this action-packed adaptation that brings medieval England to life on your school stage.

This exciting script follows Robin Hood as he fights against the corrupt Sheriff of Nottingham and protects the people of England while King Richard is away on the Crusades. Students will be captivated by the heroic deeds, clever schemes, and memorable characters including Little John, Friar Tuck, Maid Marian, and the villainous Sheriff.

The production offers excellent opportunities for sword fighting choreography, archery demonstrations (with safe props), and period costume design. The script includes both dramatic moments and comedic relief, ensuring audience engagement throughout. With roles for both large and small casts, this adaptation can be tailored to your school's specific needs.`,
        duration: '100 minutes',
        castSize: '15-30 actors',
        ageRange: 'Ages 10-18',
        genre: 'Historical Adventure'
    },
    {
        id: 'shakespeare-kids',
        title: 'Shakespeare for Kids: A Midsummer Night\'s Dream',
        price: '£35.00',
        icon: 'fas fa-masks-theater',
        description: 'A delightfully accessible version of Shakespeare\'s magical comedy, perfect for young performers.',
        fullDescription: `Introduce your students to the magic of Shakespeare with this beautifully adapted version of A Midsummer Night's Dream, specially crafted for young performers and audiences.

This enchanting production maintains the essence and beauty of Shakespeare's language while making it accessible and engaging for school-age actors. The story weaves together the romantic complications of four young Athenians, the theatrical ambitions of a group of amateur actors, and the magical mischief of the fairy kingdom.

Students will delight in playing iconic characters like Puck, Oberon, Titania, and Bottom, while learning valuable lessons about love, friendship, and the power of imagination. The script includes simplified Shakespearean dialogue that retains the poetic beauty while being understandable to young audiences.

Perfect for introducing students to classical theatre, this adaptation includes staging notes for creating magical transformations, fairy dances, and comedic physical theatre. The flexible casting allows for creative doubling and ensemble work.`,
        duration: '85 minutes',
        castSize: '16-28 actors',
        ageRange: 'Ages 12-18',
        genre: 'Classical Comedy'
    },
    {
        id: 'pirates-adventure',
        title: 'Pirates of Treasure Island',
        price: '£28.00',
        icon: 'fas fa-skull-crossbones',
        description: 'Ahoy mateys! A swashbuckling adventure on the high seas with pirates, treasure, and friendship.',
        fullDescription: `Set sail for adventure with this thrilling pirate tale that combines the excitement of treasure hunting with valuable lessons about friendship, courage, and doing what's right.

Young Jim Hawkins discovers an old treasure map and embarks on a dangerous voyage to find the legendary treasure of Captain Flint. Along the way, he encounters a crew of colorful pirates, including the infamous Long John Silver, and learns that the greatest treasures in life aren't always gold and jewels.

This swashbuckling adventure is perfect for schools looking to create an exciting, action-packed production. The script includes opportunities for sea shanties, sword fighting choreography, and creative staging to simulate life aboard a pirate ship. Students will love the larger-than-life characters and the themes of adventure and moral growth.

With roles ranging from brave heroes to dastardly villains, and plenty of ensemble opportunities for the pirate crew, this production can accommodate various cast sizes while ensuring every student has a meaningful part to play.`,
        duration: '95 minutes',
        castSize: '18-35 actors',
        ageRange: 'Ages 9-17',
        genre: 'Adventure Musical'
    },
    {
        id: 'wizard-oz',
        title: 'The Wonderful Wizard of Oz',
        price: '£32.00',
        icon: 'fas fa-rainbow',
        description: 'Follow the yellow brick road in this beloved tale of Dorothy\'s magical journey to the Emerald City.',
        fullDescription: `There's no place like home! Experience the timeless magic of L. Frank Baum's beloved story in this spectacular adaptation that brings the Land of Oz to vivid life on your school stage.

Join Dorothy and her faithful dog Toto as they're swept away by a tornado to the magical Land of Oz. Along the yellow brick road, they meet the Scarecrow who wants a brain, the Tin Man who longs for a heart, and the Cowardly Lion who seeks courage. Together, they journey to the Emerald City to meet the mysterious Wizard of Oz.

This production offers incredible opportunities for creative staging, colorful costumes, and memorable musical numbers. From the tornado sequence to the poppy field, from the Emerald City to the Witch's castle, students and audiences will be transported to a world of wonder and imagination.

The script includes beloved songs and dialogue that capture the heart and spirit of the original story while being perfectly suited for school productions. With opportunities for both featured roles and large ensemble pieces, this adaptation ensures every student can contribute to the magic.`,
        duration: '105 minutes',
        castSize: '20-40 actors',
        ageRange: 'Ages 7-16',
        genre: 'Fantasy Musical'
    },
    {
        id: 'christmas-carol',
        title: 'A Christmas Carol',
        price: '£26.00',
        icon: 'fas fa-snowflake',
        description: 'Dickens\' heartwarming tale of redemption and the true spirit of Christmas.',
        fullDescription: `Celebrate the magic of Christmas with Charles Dickens' timeless tale of Ebenezer Scrooge's transformation from a bitter miser to a man filled with love and generosity.

This beautiful adaptation captures all the warmth, humor, and heart of Dickens' beloved story while being perfectly suited for school productions. Students will be moved by Scrooge's journey through his past, present, and future, guided by the three Christmas Spirits who show him the true meaning of Christmas.

The production offers wonderful opportunities for period costume design, atmospheric lighting effects, and heartwarming ensemble moments. From the bustling streets of Victorian London to the cozy warmth of the Cratchit family home, this adaptation brings Dickens' world to vivid life.

With memorable characters like Tiny Tim, Bob Cratchit, the three Christmas Spirits, and of course, Scrooge himself, this production offers meaningful roles for students of all ages and abilities. The themes of redemption, family, and the spirit of giving make this an ideal choice for holiday productions that will touch hearts and inspire audiences.`,
        duration: '80 minutes',
        castSize: '14-30 actors',
        ageRange: 'Ages 8-18',
        genre: 'Holiday Drama'
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
