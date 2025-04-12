$(document).ready(function () {
    let slideIndex = 1;

    function showSlides(n) {
        let i;
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

    window.plusSlides = function (n) {
        showSlides(slideIndex += n);
    };

    window.currentSlide = function (n) {
        showSlides(slideIndex = n);
    };

    showSlides(slideIndex);

    setInterval(function () {
        plusSlides(1);
    }, 5000);
});
