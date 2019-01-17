$(document).ready(function () {

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

});