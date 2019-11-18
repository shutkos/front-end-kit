$(document).ready(function () {
//Owl carousel responsive
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

//Resize text on on page
    $(".increase").click(function() {
        var get_h1 = $('.resizable h1');
        var set_h1 = getCurrentFontSize(get_h1);
        get_h1.css("font-size", set_h1 + 4);

        var get_h2 = $('.resizable h2');
        var set_h2 = getCurrentFontSize(get_h2);
        get_h2.css("font-size", set_h2 + 4);

        var get_h3 = $('.resizable h3');
        var set_h3 = getCurrentFontSize(get_h3);
        get_h3.css("font-size", set_h3 + 4);

        var get_p = $('.resizable p');
        var set_p = getCurrentFontSize(get_p);
        get_p.css("font-size", set_p + 4);

        var get_li = $('.resizable li');
        var set_li = getCurrentFontSize(get_li);
        get_li.css("font-size", set_li + 4);

        var get_li = $('.resizable th');
        var set_li = getCurrentFontSize(get_li);
        get_li.css("font-size", set_li + 4);

        var get_li = $('.resizable td');
        var set_li = getCurrentFontSize(get_li);
        get_li.css("font-size", set_li + 4);
    });
    $(".decrease").click(function() {
        var get_h1 = $('.resizable h1');
        var set_h1 = getCurrentFontSize(get_h1);
        get_h1.css("font-size", set_h1 - 4);

        var get_h2 = $('.resizable h2');
        var set_h2 = getCurrentFontSize(get_h2);
        get_h2.css("font-size", set_h2 - 4);

        var get_h3 = $('.resizable h3');
        var set_h3 = getCurrentFontSize(get_h3);
        get_h3.css("font-size", set_h3 - 4);

        var get_p = $('.resizable p');
        var set_p = getCurrentFontSize(get_p);
        get_p.css("font-size", set_p - 4);

        var get_li = $('.resizable li');
        var set_li = getCurrentFontSize(get_li);
        get_li.css("font-size", set_li - 4);

        var get_li = $('.resizable th');
        var set_li = getCurrentFontSize(get_li);
        get_li.css("font-size", set_li - 4);

        var get_li = $('.resizable td');
        var set_li = getCurrentFontSize(get_li);
        get_li.css("font-size", set_li - 4);
    });
    function getCurrentFontSize(textBoxes) {
        var fontSize = textBoxes.eq(0).css("font-size");
        return parseInt(fontSize, 10);
    }

});

