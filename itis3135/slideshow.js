$(document).ready(function() {
    let slideIndex = 1;
    let slideInterval;
    const slideDelay = 5000; // 5 seconds
    
    // Initialize the slideshow
    showSlides(slideIndex);
    startSlideShow();
    
    function showSlides(n) {
        const slides = $(".mySlides");
        const dots = $(".dot");
        
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        
        slides.hide();
        dots.removeClass("active");
        slides.eq(slideIndex - 1).fadeIn(1000);
        dots.eq(slideIndex - 1).addClass("active");
    }
    
    function startSlideShow() {
        slideInterval = setInterval(function() {
            plusSlides(1);
        }, slideDelay);
    }
    
    function resetSlideTimer() {
        clearInterval(slideInterval);
        startSlideShow();
    }
    
    // Set up the global functions
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
        resetSlideTimer();
    };
    
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
        resetSlideTimer();
    };
    
    // Pause on hover
    $('.slideshow-container').hover(
        function() {
            clearInterval(slideInterval);
        },
        function() {
            startSlideShow();
        }
    );
});
