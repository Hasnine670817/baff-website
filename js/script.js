$(document).ready(function() {
    // Mobile Menu Toggle
    $('#mobile-menu-btn').click(function() {
        $('#mobile-menu').removeClass('translate-x-full');
        $('#mobile-menu-backdrop').removeClass('hidden');
    });

    $('#close-menu, #mobile-menu-backdrop').click(function() {
        $('#mobile-menu').addClass('translate-x-full');
        $('#mobile-menu-backdrop').addClass('hidden');
    });

    // Mobile Solutions Dropdown
    $('#mobile-solutions-btn').click(function() {
        const dropdown = $('#mobile-solutions-dropdown');
        const icon = $(this).find('svg');
        
        dropdown.slideToggle();
        icon.toggleClass('rotate-180');
    });

    // Swiper Testimonial Slider
    const swiper = new Swiper('.testimonialSwiper', {
        effect: 'cards',
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        initialSlide: 0,
        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        },
        cardsEffect: {
            slideShadows: false,
            rotate: false,
            perSlideOffset: 12,
            perSlideRotate: 0,
        },
    });

    // FAQ Accordion
    $('.faq-toggle').click(function() {
        const content = $(this).next('.faq-content');
        const icon = $(this).find('.icon');
        
        // Close other items
        $('.faq-content').not(content).slideUp();
        $('.icon').not(icon).removeClass('rotate-180');

        // Toggle current item
        content.slideToggle();
        icon.toggleClass('rotate-180');
    });

    // Smooth Scroll
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });
});
