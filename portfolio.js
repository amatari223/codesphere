// Portfolio Section JavaScript

// Portfolio Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Add click event to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
                // Reset AOS animation to trigger again
                item.classList.remove('aos-animate');
                
                setTimeout(() => {
                    item.classList.add('aos-animate');
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                item.classList.remove('aos-animate');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 500);
            }
        });
    });
});

// Refresh AOS animations when scrolling to portfolio section
document.addEventListener('scroll', function() {
    const portfolioSection = document.querySelector('.portfolio');
    if (!portfolioSection) return;
    
    const rect = portfolioSection.getBoundingClientRect();
    const isVisible = 
        rect.top < window.innerHeight && 
        rect.bottom >= 0;
    
    if (isVisible) {
        AOS.refresh();
    }
});

// Project Modal Functionality
const detailsButtons = document.querySelectorAll('.details-btn');
const projectModal = document.querySelector('.project-modal');
const closeModal = document.querySelector('.close-modal');
const projectTitle = document.querySelector('.project-title');
const projectDescription = document.querySelector('.info-item p');
const technologiesList = document.querySelector('.technologies-list');
const projectDate = document.querySelectorAll('.info-item p')[1];
const projectLink = document.querySelector('.project-link');

// Initialize Owl Carousel for project images
$('.project-images').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1
        }
    }
});

// Project details data
const projectsData = [
    {
        title: "E-commerce Website",
        description: "A fully responsive e-commerce platform with product catalog, shopping cart, user authentication, and payment integration. The website features a modern UI design with smooth animations and transitions for an enhanced user experience.",
        technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "Stripe API"],
        date: "March 2023",
        link: "#",
        images: ["images/courses/image (4).png", "images/courses/image (1).png", "images/courses/image (2).png"]
    },
    {
        title: "Educational Platform",
        description: "An interactive learning platform with course management, video lectures, quizzes, and progress tracking. The platform includes a dashboard for both students and instructors, allowing for efficient course delivery and monitoring.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "AWS S3"],
        date: "January 2023",
        link: "#",
        images: ["images/courses/image (1).png", "images/courses/image.png", "images/courses/image (4).png"]
    },
    {
        title: "Corporate Website",
        description: "A professional corporate website with company information, services, team profiles, and contact forms. The website is built with WordPress for easy content management and features custom themes and plugins for enhanced functionality.",
        technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3", "jQuery"],
        date: "November 2022",
        link: "#",
        images: ["images/courses/image (2).png", "images/courses/image (4).png", "images/courses/image (1).png"]
    },
    {
        title: "Blog Platform",
        description: "A modern blog platform with article publishing, commenting, and user profiles. The platform uses Next.js for server-side rendering and Firebase for real-time database functionality, providing a fast and responsive user experience.",
        technologies: ["Next.js", "Firebase", "React", "Tailwind CSS", "Markdown"],
        date: "February 2023",
        link: "#",
        images: ["images/courses/image.png", "images/courses/image (2).png", "images/courses/image (1).png"]
    },
    {
        title: "Fitness Tracker App",
        description: "A mobile application for tracking workouts, nutrition, and fitness goals. The app includes features like workout plans, progress charts, calorie counter, and social sharing capabilities.",
        technologies: ["Flutter", "Dart", "Firebase", "Google Fit API", "Health Kit"],
        date: "April 2023",
        link: "#",
        images: ["images/courses/image.png", "images/courses/image (4).png", "images/courses/image (2).png"]
    },
    {
        title: "Food Delivery App",
        description: "A comprehensive food delivery application with restaurant listings, menu browsing, order placement, and real-time tracking. The app includes payment integration, push notifications, and user reviews.",
        technologies: ["React Native", "Node.js", "Express", "MongoDB", "Google Maps API", "Stripe"],
        date: "May 2023",
        link: "#",
        images: ["images/courses/image (1).png", "images/courses/image.png", "images/courses/image (4).png"]
    },
    {
        title: "Social Media App",
        description: "A feature-rich social media application with user profiles, posts, comments, likes, and direct messaging. The app includes real-time notifications, media sharing, and content discovery features.",
        technologies: ["Flutter", "GraphQL", "Apollo", "Firebase", "Cloud Functions"],
        date: "June 2023",
        link: "#",
        images: ["images/courses/image (2).png", "images/courses/image (1).png", "images/courses/image.png"]
    },
    {
        title: "E-learning Mobile App",
        description: "A mobile application for online learning with course enrollment, video lectures, quizzes, and certificates. The app features offline content access, progress tracking, and interactive learning materials.",
        technologies: ["React Native", "Redux", "Node.js", "MongoDB", "AWS S3", "Firebase"],
        date: "July 2023",
        link: "#",
        images: ["images/courses/image (4).png", "images/courses/image (2).png", "images/courses/image (1).png"]
    },
    {
        title: "Inventory Management System",
        description: "A desktop application for managing inventory, sales, purchases, and reports. The system includes barcode scanning, stock alerts, supplier management, and detailed analytics.",
        technologies: ["C#", ".NET", "WPF", "SQL Server", "Entity Framework", "Crystal Reports"],
        date: "August 2023",
        link: "#",
        images: ["images/courses/image (4).png", "images/courses/image.png", "images/courses/image (1).png"]
    },
    {
        title: "Accounting Software",
        description: "A comprehensive accounting solution with general ledger, accounts receivable/payable, financial reporting, and tax management. The software includes multi-currency support, audit trails, and customizable dashboards.",
        technologies: ["Java", "JavaFX", "MySQL", "Hibernate", "iText", "Apache POI"],
        date: "September 2023",
        link: "#",
        images: ["images/courses/image (1).png", "images/courses/image (4).png", "images/courses/image (2).png"]
    },
    {
        title: "Point of Sale System",
        description: "A desktop POS system for retail and restaurant businesses with sales processing, inventory tracking, customer management, and reporting. The system supports multiple payment methods, discounts, and loyalty programs.",
        technologies: ["Python", "PyQt", "SQLite", "ReportLab", "Pillow"],
        date: "October 2023",
        link: "#",
        images: ["images/courses/image (2).png", "images/courses/image.png", "images/courses/image (4).png"]
    },
    {
        title: "Data Analysis Tool",
        description: "A desktop application for data analysis, visualization, and reporting. The tool includes data import/export, statistical analysis, chart generation, and automated reporting features.",
        technologies: ["Python", "Electron", "Pandas", "NumPy", "Matplotlib", "Plotly"],
        date: "November 2023",
        link: "#",
        images: ["images/courses/image.png", "images/courses/image (1).png", "images/courses/image (2).png"]
    }
];

// Function to update modal content
function updateModalContent(index) {
    const project = projectsData[index];
    
    // Update project title
    projectTitle.textContent = project.title;
    
    // Update project description
    projectDescription.textContent = project.description;
    
    // Update technologies list with icons
    technologiesList.innerHTML = '';
    project.technologies.forEach(tech => {
        const li = document.createElement('li');
        // Add icon based on technology name
        const icon = getTechIcon(tech);
        li.innerHTML = `<i class="${icon}"></i> ${tech}`;
        technologiesList.appendChild(li);
    });
    
    // Update project date
    projectDate.textContent = project.date;
    
    // Update project link
    projectLink.href = project.link;
    
    // Update carousel images
    const carousel = $('.project-images');
    carousel.trigger('destroy.owl.carousel');
    carousel.html('');
    
    project.images.forEach(image => {
        carousel.append(`<div class="item"><img src="${image}" alt="Project Image"></div>`);
    });
    
    carousel.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            }
        }
    });
}

// Function to get appropriate icon for each technology
function getTechIcon(tech) {
    const techIcons = {
        'HTML5': 'fab fa-html5',
        'CSS3': 'fab fa-css3-alt',
        'JavaScript': 'fab fa-js',
        'React': 'fab fa-react',
        'React Native': 'fab fa-react',
        'Node.js': 'fab fa-node-js',
        'Express': 'fab fa-node-js',
        'MongoDB': 'fas fa-database',
        'MySQL': 'fas fa-database',
        'PHP': 'fab fa-php',
        'WordPress': 'fab fa-wordpress',
        'jQuery': 'fab fa-js',
        'Firebase': 'fas fa-fire',
        'Python': 'fab fa-python',
        'Django': 'fab fa-python',
        'Flask': 'fab fa-python',
        'Java': 'fab fa-java',
        'C#': 'fab fa-microsoft',
        '.NET': 'fab fa-microsoft',
        'Angular': 'fab fa-angular',
        'Vue.js': 'fab fa-vuejs',
        'TypeScript': 'fab fa-js',
        'GraphQL': 'fas fa-project-diagram',
        'SQL Server': 'fas fa-database',
        'SQLite': 'fas fa-database',
        'PostgreSQL': 'fas fa-database',
        'AWS': 'fab fa-aws',
        'Docker': 'fab fa-docker',
        'Git': 'fab fa-git-alt',
        'GitHub': 'fab fa-github',
        'Redux': 'fas fa-code',
        'Sass': 'fab fa-sass',
        'Bootstrap': 'fab fa-bootstrap',
        'Tailwind CSS': 'fas fa-wind',
        'Flutter': 'fas fa-mobile-alt',
        'Dart': 'fas fa-code',
        'Swift': 'fab fa-swift',
        'Kotlin': 'fab fa-android',
        'Electron': 'fas fa-atom',
        'Next.js': 'fab fa-react',
        'Gatsby': 'fab fa-react',
        'Webpack': 'fas fa-box-open',
        'Babel': 'fas fa-code',
        'Stripe': 'fab fa-stripe',
        'PayPal': 'fab fa-paypal'
    };
    
    // Return the icon class or a default icon if not found
    return techIcons[tech] || 'fas fa-code';
}

// Add click event to details buttons
detailsButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        updateModalContent(index % projectsData.length);
        projectModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close modal when clicking on close button
closeModal.addEventListener('click', () => {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside of modal content
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Add animation to portfolio items on page load
window.addEventListener('load', () => {
    portfolioItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});

// View All Projects button functionality
const viewAllBtn = document.querySelector('.view-all-btn');
viewAllBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Here you can add functionality to navigate to a dedicated projects page
    // or show more projects on the same page
    alert('Navigate to full portfolio page');
});