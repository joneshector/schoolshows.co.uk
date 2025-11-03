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
    },
    {
        id: 'heracles',
        title: 'Heracles',
        price: '£32.00',
        icon: 'fas fa-dumbbell',
        description: 'The legendary Greek hero embarks on his famous twelve labors in this epic adventure.',
        fullDescription: `Witness the legendary tale of Heracles (Hercules), the greatest hero of ancient Greece, as he undertakes his famous twelve labors to atone for his past and achieve immortality.

From slaying the Nemean Lion and defeating the nine-headed Hydra to capturing the Golden Hind and cleaning the Augean Stables, students will bring to life the most famous adventures from Greek mythology. This epic production combines action, drama, and mythology to create an unforgettable theatrical experience.

The script offers wonderful opportunities for creative staging, spectacular costumes representing various mythological creatures, and ensemble work. Students will learn about ancient Greek culture, mythology, and the timeless themes of redemption, perseverance, and heroism.

Perfect for teaching classical mythology and ancient history while providing roles for a wide range of abilities and interests. The episodic structure of the twelve labors allows for flexible casting and creative interpretation.`,
        duration: '100 minutes',
        castSize: '15-35 actors',
        ageRange: 'Ages 10-17',
        genre: 'Mythological Adventure'
    },
    {
        id: 'story-of-galileo',
        title: 'The Story of Galileo',
        price: '£30.00',
        icon: 'fas fa-space-shuttle',
        description: 'The inspiring story of the father of modern science and his revolutionary discoveries.',
        fullDescription: `Discover the fascinating life of Galileo Galilei, the brilliant scientist who changed our understanding of the universe and challenged the beliefs of his time.

This compelling historical drama follows Galileo's journey from curious mathematician to revolutionary astronomer, as he develops the telescope, discovers the moons of Jupiter, and defends the heliocentric model of the solar system against powerful opposition from the Church.

Students will explore themes of scientific inquiry, intellectual courage, and the conflict between new ideas and established authority. The production brings to life the excitement of scientific discovery while examining the personal cost of standing up for truth.

Perfect for teaching science history, the scientific method, and critical thinking. The script provides opportunities for period staging, demonstrations of scientific principles, and thoughtful examination of how scientific progress shapes society.`,
        duration: '90 minutes',
        castSize: '12-28 actors',
        ageRange: 'Ages 11-18',
        genre: 'Historical Drama'
    },
    {
        id: 'lord-of-the-rings',
        title: 'Lord of the Rings',
        price: '£40.00',
        icon: 'fas fa-ring',
        description: 'Tolkien\'s epic fantasy quest to destroy the One Ring and save Middle-earth.',
        fullDescription: `Embark on the greatest quest in fantasy literature as Frodo Baggins and the Fellowship journey across Middle-earth to destroy the One Ring in the fires of Mount Doom.

This epic adaptation brings together the most memorable moments from Tolkien's masterpiece: the formation of the Fellowship, the mines of Moria, the enchanted forest of Lothlórien, the breaking of the Fellowship, the battle of Helm's Deep, and the final confrontation at Mount Doom.

Students will bring to life beloved characters including brave hobbits, wise wizards, noble elves, stalwart dwarves, and valiant humans as they fight against the dark forces of Sauron. The production offers incredible opportunities for spectacular staging, fantasy costumes, battle choreography, and special effects.

With themes of friendship, courage, sacrifice, and the triumph of good over evil, this adaptation provides valuable lessons while delivering an unforgettable theatrical experience. The flexible script can be adapted for various production scales.`,
        duration: '120 minutes',
        castSize: '20-45 actors',
        ageRange: 'Ages 11-18',
        genre: 'Epic Fantasy'
    },
    {
        id: 'revolting-rhymes',
        title: 'Revolting Rhymes (Roald Dahl)',
        price: '£28.00',
        icon: 'fas fa-book',
        description: 'Roald Dahl\'s wickedly funny twisted versions of classic fairy tales.',
        fullDescription: `Experience Roald Dahl's brilliantly twisted take on classic fairy tales in this hilariously dark comedy that turns beloved stories upside down.

Discover what really happened to Cinderella, Little Red Riding Hood, the Three Little Pigs, Snow White, and Goldilocks in these clever, rhyming retellings that reveal unexpected truths about fairy tale characters. Dahl's signature wit and dark humor shine through as familiar stories take surprising and delightfully wicked turns.

Students will love performing these irreverent versions of classic tales, complete with Dahl's memorable rhyming couplets and unexpected plot twists. The production offers wonderful opportunities for comedy, character transformation, and creative staging that plays with audience expectations.

Perfect for introducing students to Roald Dahl's unique storytelling style while developing performance skills in comedy and verse. The episodic structure allows for flexible casting and creative interpretation of these beloved twisted tales.`,
        duration: '75 minutes',
        castSize: '10-25 actors',
        ageRange: 'Ages 8-15',
        genre: 'Comedy'
    },
    {
        id: 'king-arthur',
        title: 'King Arthur',
        price: '£35.00',
        icon: 'fas fa-crown',
        description: 'The legendary tale of King Arthur, Excalibur, and the Knights of the Round Table.',
        fullDescription: `Journey to the mythical kingdom of Camelot and witness the rise of the legendary King Arthur, from pulling the sword from the stone to establishing the Knights of the Round Table.

This enchanting production brings together the most beloved elements of Arthurian legend: the magical sword Excalibur, the wise wizard Merlin, the noble knights Lancelot and Gawain, the beautiful Queen Guinevere, and the quest for the Holy Grail. Students will explore themes of chivalry, honor, loyalty, and the responsibilities of leadership.

The script offers wonderful opportunities for period costumes, sword choreography, magical effects, and the recreation of medieval court life. From the mystery of Arthur's birth to the tragedy of Camelot's fall, this adaptation captures both the majesty and humanity of the Arthurian legends.

Perfect for teaching medieval history, literature, and the values of the Age of Chivalry. With roles ranging from kings and queens to knights and commoners, this production provides meaningful parts for students of all abilities.`,
        duration: '105 minutes',
        castSize: '16-38 actors',
        ageRange: 'Ages 10-18',
        genre: 'Legendary Adventure'
    },
    {
        id: 'robin-hood',
        title: 'Robin Hood',
        price: '£32.00',
        icon: 'fas fa-bullseye',
        description: 'The heroic outlaw of Sherwood Forest who steals from the rich to give to the poor.',
        fullDescription: `Join Robin Hood and his Merry Men in Sherwood Forest as they fight against the tyranny of the Sheriff of Nottingham and Prince John, stealing from the rich to give to the poor.

This thrilling adventure brings to life one of England's most beloved folk heroes. Students will portray memorable characters including the brave Robin Hood, loyal Little John, clever Maid Marian, jolly Friar Tuck, and the villainous Sheriff of Nottingham in a story filled with archery contests, daring rescues, and fights for justice.

The production offers exciting opportunities for stage combat, archery choreography, period costumes, and forest staging. With themes of social justice, loyalty, courage, and standing up against oppression, this timeless tale continues to inspire audiences of all ages.

Perfect for teaching medieval English history and social justice themes while providing action-packed entertainment. The ensemble nature of the Merry Men allows for flexible casting and ensures meaningful roles for the entire cast.`,
        duration: '95 minutes',
        castSize: '14-32 actors',
        ageRange: 'Ages 9-17',
        genre: 'Adventure Drama'
    },
    {
        id: 'alice-in-wonderland',
        title: 'Alice in Wonderland',
        price: '£30.00',
        icon: 'fas fa-hat-wizard',
        description: 'Lewis Carroll\'s surreal journey down the rabbit hole into a world of wonder and nonsense.',
        fullDescription: `Tumble down the rabbit hole with Alice into the magical, mysterious, and utterly mad world of Wonderland in this enchanting adaptation of Lewis Carroll's beloved classic.

Follow Alice as she encounters the frantic White Rabbit, attends a mad tea party with the Mad Hatter and March Hare, receives advice from the enigmatic Cheshire Cat, plays croquet with the temperamental Queen of Hearts, and navigates the nonsensical logic of Wonderland's peculiar inhabitants.

This whimsical production offers incredible opportunities for imaginative staging, fantastical costumes, surreal set design, and creative character interpretation. Students will delight in portraying the bizarre and memorable characters that populate Carroll's wonderland while exploring themes of identity, growing up, and the power of imagination.

Perfect for developing creativity, comedy skills, and ensemble work. The episodic structure and large cast of quirky characters allow for flexible casting and encourage bold, imaginative performance choices.`,
        duration: '85 minutes',
        castSize: '12-30 actors',
        ageRange: 'Ages 8-16',
        genre: 'Fantasy Comedy'
    },
    {
        id: 'story-of-leonardo',
        title: 'The Story of Leonardo',
        price: '£30.00',
        icon: 'fas fa-paint-brush',
        description: 'The life of Leonardo da Vinci, the ultimate Renaissance man and genius inventor.',
        fullDescription: `Explore the extraordinary life of Leonardo da Vinci, the Renaissance genius whose talents spanned art, science, engineering, and invention, and whose curiosity knew no bounds.

This inspiring biographical drama follows Leonardo from his early days as an apprentice in Florence through his greatest achievements: painting the Mona Lisa and The Last Supper, designing flying machines and war engines, studying human anatomy, and dreaming of inventions centuries ahead of his time.

Students will discover how Leonardo's insatiable curiosity, keen observation, and boundless imagination made him one of history's greatest minds. The production explores the tension between Leonardo's artistic genius and his scientific pursuits, showing how his diverse interests enriched all his work.

Perfect for teaching Renaissance history, the relationship between art and science, and the value of curiosity and lifelong learning. The script provides opportunities for creative staging that brings Leonardo's sketches and inventions to life.`,
        duration: '90 minutes',
        castSize: '12-28 actors',
        ageRange: 'Ages 10-18',
        genre: 'Historical Biography'
    },
    {
        id: 'oliver',
        title: 'Oliver',
        price: '£38.00',
        icon: 'fas fa-building',
        description: 'The classic musical tale of an orphan boy seeking belonging in Victorian London.',
        fullDescription: `Experience the beloved musical adaptation of Charles Dickens' Oliver Twist, telling the heartwarming and heartbreaking story of a young orphan boy's search for love and belonging in Victorian London.

Follow young Oliver from the workhouse to the undertaker's, from the streets of London to Fagin's den of pickpockets, as he encounters memorable characters including the Artful Dodger, the kind Mr. Brownlow, the sinister Bill Sikes, and the tragic Nancy. Through it all, Oliver maintains his innocence and goodness despite the harsh world around him.

This musical production features beloved songs including "Food, Glorious Food," "Consider Yourself," "As Long As He Needs Me," and many more. The show offers wonderful opportunities for large ensemble numbers, period costumes, Victorian London staging, and powerful emotional moments.

Perfect for teaching Victorian history, social issues, and the power of kindness and perseverance. With roles ranging from young children to adults, this classic musical provides meaningful parts for students of all ages and abilities.`,
        duration: '120 minutes',
        castSize: '20-50 actors',
        ageRange: 'Ages 9-18',
        genre: 'Classic Musical'
    },
    {
        id: 'marriage-of-figaro',
        title: 'Marriage of Figaro',
        price: '£35.00',
        icon: 'fas fa-heart',
        description: 'Mozart\'s sparkling opera about love, intrigue, and social class in 18th century Spain.',
        fullDescription: `Delight in Mozart's brilliant comic opera, a tale of love, jealousy, and social satire set in the household of the Count and Countess Almaviva in 18th century Spain.

On the day of his wedding to Susanna, the clever servant Figaro must outwit his master the Count, who has designs on Figaro's bride. Through a series of elaborate schemes, disguises, and misunderstandings, the servants and nobility engage in a battle of wits that challenges social hierarchies and celebrates the triumph of love and fidelity.

This adaptation preserves Mozart's sparkling music and the wit of the original libretto while making the opera accessible for school productions. Students will develop their musical and dramatic skills through memorable arias, ensembles, and comic situations, all set to some of the most beautiful music ever written.

Perfect for introducing students to opera and classical music while exploring themes of class, equality, love, and marriage. The production offers opportunities for period costumes, ensemble singing, and the sophisticated comedy of manners.`,
        duration: '110 minutes',
        castSize: '14-30 actors',
        ageRange: 'Ages 13-18',
        genre: 'Comic Opera'
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
    initializeCarousel();
    
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
 * Initialize carousel functionality with infinite loop
 */
function initializeCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const prevButton = document.querySelector('.carousel-btn-prev');
    const nextButton = document.querySelector('.carousel-btn-next');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    
    if (!track || slides.length === 0) return;
    
    const totalSlides = slides.length;
    let currentIndex = 1; // Start at 1 because we'll add a clone at the beginning
    let isTransitioning = false;
    
    // Clone first and last slides for infinite loop
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);
    
    // Add clones
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);
    
    // Set initial position (show first real slide)
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Create indicator dots (only for real slides)
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index + 1));
        indicatorsContainer.appendChild(indicator);
    });
    
    const indicators = Array.from(document.querySelectorAll('.carousel-indicator'));
    
    // Update carousel position
    function updateCarousel(smooth = true) {
        if (smooth) {
            track.style.transition = 'transform 0.5s ease-in-out';
        } else {
            track.style.transition = 'none';
        }
        
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        
        // Update indicators (map current index to real slide index)
        const realIndex = currentIndex === 0 ? totalSlides - 1 : 
                         currentIndex === totalSlides + 1 ? 0 : 
                         currentIndex - 1;
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === realIndex);
        });
    }
    
    // Handle transition end for infinite loop
    function handleTransitionEnd() {
        isTransitioning = false;
        
        // If we're at the clone of the first slide, jump to the real first slide
        if (currentIndex === 0) {
            currentIndex = totalSlides;
            updateCarousel(false);
        }
        
        // If we're at the clone of the last slide, jump to the real last slide
        if (currentIndex === totalSlides + 1) {
            currentIndex = 1;
            updateCarousel(false);
        }
    }
    
    track.addEventListener('transitionend', handleTransitionEnd);
    
    // Go to specific slide
    function goToSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex = index;
        updateCarousel();
    }
    
    // Next slide
    function nextSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex++;
        updateCarousel();
    }
    
    // Previous slide
    function prevSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex--;
        updateCarousel();
    }
    
    // Event listeners
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    // Auto-play (optional, every 5 seconds)
    let autoplayInterval = setInterval(nextSlide, 5000);
    
    // Pause autoplay on hover
    const carousel = document.querySelector('.gallery-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });
        
        carousel.addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchStartX - touchEndX > swipeThreshold) {
            nextSlide();
        } else if (touchEndX - touchStartX > swipeThreshold) {
            prevSlide();
        }
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
        'reviews': 'Reviews - School Shows',
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
        const pages = ['home', 'shows', 'reviews', 'about', 'contact'];
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
