/*!
* Start Bootstrap - Grayscale v7.0.3 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        try {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                offset: 74,
            });
        } catch (e) {
            console.error('Error initializing ScrollSpy:', e);
        }
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Add scroll animation effects
    const fadeElements = document.querySelectorAll('.projects-section .row');
    
    // Add fade-in effect class to project rows
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Check if elements are in viewport and add visible class
    const checkFade = function() {
        fadeElements.forEach(element => {
            if (!element) return;
            
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            // Consider element visible if top is in view or if both top and bottom are in view
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initial check
    setTimeout(checkFade, 100); // Short delay to ensure DOM is fully loaded
    
    // Check on scroll
    window.addEventListener('scroll', checkFade);
    
    // Add project image hover effects
    const projectImages = document.querySelectorAll('.projects-section img');
    projectImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'translateY(-5px)';
            img.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
        });
        
        img.addEventListener('mouseout', () => {
            img.style.transform = 'translateY(0)';
            img.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        });
    });

});