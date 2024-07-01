/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== Scroll Sections Active Link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true, // Uncomment to reset the animations every time they come into view
    distance: '80px',
    duration: 2000,
    delay: 200,
    easing: 'ease-in-out', // Adds a smooth easing effect
    scale: 0.85, // Adds a scaling effect
    rotate: {
        x: 0,
        y: 0,
        z: 10 // Adds a slight rotation
    }
});

// Top-origin elements
ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top',
    distance: '100px',
    duration: 2200,
    delay: 300
});

// Bottom-origin elements
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom',
    distance: '60px',
    duration: 2400,
    delay: 400,
    scale: 0.9
});

// Left-origin elements
ScrollReveal().reveal('.home-content h1, .about-img', {
    origin: 'left',
    distance: '80px',
    duration: 2600,
    delay: 500,
    rotate: { x: 0, y: 10, z: 0 }
});

// Right-origin elements
ScrollReveal().reveal('.home-content p, .about-content', {
    origin: 'right',
    distance: '80px',
    duration: 2600,
    delay: 500,
    rotate: { x: 0, y: -10, z: 0 }
});


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: [
        'Digital Marketer',
        'UI/UX Designer',
        'Graphic Designer',
        'Software Developer'
    ],
    typeSpeed: 70, // Kecepatan mengetik
    backSpeed: 50, // Kecepatan menghapus
    smartBackspace: true, // Hapus hanya karakter yang telah diketik ulang
    backDelay: 1500, // Delay sebelum mulai menghapus
    startDelay: 100, // Delay sebelum mulai mengetik
    loop: true,
    showCursor: true, // Tampilkan kursor ketik
    cursorChar: '|', // Karakter kursor
    shuffle: true // Acak urutan teks
});
