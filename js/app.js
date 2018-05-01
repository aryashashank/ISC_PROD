
$(document).ready(function () {
    var elem = document.querySelector('.slider');
    var options = {
        indicators: false
    };
    var instance = M.Slider.init(elem, options);


    var corousel = document.querySelector('.carousel');
    var corouselInstance = M.Carousel.init(corousel, { fullWidth: false, numVisible:15 });


    autoplay();

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 2500);
    }
    $('.parallax').parallax();

    $('.sidenav').sidenav();

    $('.materialboxed').materialbox();
    $(document).scroll(function () {
        let boundingBox = $("#navbar-sticky").get(0).getBoundingClientRect();
        if (boundingBox.top == 0) {
            $('#navbar-sticky').addClass('white');
            $('#hamberger').addClass('black-text').removeClass('white-text');
            $('.navbtn').addClass('black-text').removeClass('white-text');

        }
        else {
            $('#navbar-sticky').removeClass('white');
            $('#hamberger').addClass('white-text').removeClass('black-text');
            $('.navbtn').addClass('white-text').removeClass('black-text');
        }

    });


});











