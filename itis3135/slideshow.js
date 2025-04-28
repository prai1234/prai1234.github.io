$(document).ready(function() {
    let slideIndex = 1;
    let slideInterval; // Variable to store setInterval ID

    // Function to show slides
    function showSlides(n) {
        let slides = $(".mySlides");
        let dots = $(".dot");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.hide();
        dots.removeClass("active");
        slides.eq(slideIndex - 1).show();
        dots.eq(slideIndex - 1).addClass("active");
    }

    // Initialize the slideshow
    showSlides(slideIndex);

    // Function to advance slides
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Function to jump to a specific slide
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Function to pause the slideshow
    function pauseSlides() {
        clearInterval(slideInterval);
    }

    // Function to resume the slideshow (auto-advance slides)
    function resumeSlides() {
        slideInterval = setInterval(function() {
            plusSlides(1);
        }, 5000); // Change slide every 5 seconds
    }

    // Set up the global functions for HTML controls
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;
    window.pauseSlides = pauseSlides;
    window.resumeSlides = resumeSlides;

    // Start the slideshow auto-advance
    resumeSlides();
});
