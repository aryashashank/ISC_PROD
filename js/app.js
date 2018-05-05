
$(document).ready(function () {
    var elem = document.querySelector('.slider');
    var options = {
        indicators: false
    };
    var instance = M.Slider.init(elem, options);

    function toggleTitle(){
        console.log("heroo");
            $(".showcase-title").toggleClass('hide');
    }
    var corousel = document.querySelector('.carousel');
    var corouselInstance = M.Carousel.init(corousel, { fullWidth: false, numVisible:15,dist:0,indicators:true });
    

    autoplay();

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 2500);
    }
    $('.parallax').parallax();

    $('.sidenav').sidenav();

    $('.materialboxed').materialbox( {onOpenEnd:toggleTitle, onCloseStart:toggleTitle});
    $(document).scroll(function () {
        let boundingBox = $(".homeSlider").get(0).getBoundingClientRect();
        if (boundingBox.top < 0) {
            $('#navbar-sticky').addClass('white');
            $('.headingContainer').addClass('white');
            $('#hamberger').addClass('black-text').removeClass('white-text');
            $('.navbtn').addClass('black-text').removeClass('white-text');

        }
        else {
            console.log(boundingBox.top);
            $('#navbar-sticky').removeClass('white');
            $('.headingContainer').removeClass('white');
            $('#hamberger').addClass('white-text').removeClass('black-text');
            $('.navbtn').addClass('white-text').removeClass('black-text');
        }

    });


});











