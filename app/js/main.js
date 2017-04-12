$(document).ready(function () {
    /*MENU BURGER*/
    $('.burg-wrapper').click(function () {
        $('.header-nav').fadeToggle();
        $('body').toggleClass('overflow-hidden');
        $(".burg-wrapper").toggleClass('change');
    });

    /*INTRO SLIDER*/
    $('.intro-slider').on('init reInit afterChange', function (event, slick, currentSlide) {
        var currentSlide = currentSlide ? currentSlide + 1 : 1;
        $('.current').text(currentSlide);
        $('.quantity').text(slick.slideCount);
    });

    $('.intro-slider').slick({
        fade: true,
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 500
    });
    /*arrows for intro-slider*/
    $('.slick-arrow').appendTo('.arrows')

    /*ANCHORS*/
    $('a[href^="#"]').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top
        }, 700);
        return false;
    });

    /*SEARCH*/
    $('.header-search_btn').click(function () {
        $('.search').fadeToggle(300).find('.search-input').focus();
    });
    /*search-close*/
    $('.search-close').click(function () {
        $('.search').fadeOut(300);
    });




        $('.news-carousel-wrapper').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: "unslick"
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

    /*new carousel*/
  /* $(window).resize(function () {
       if ($(window).width() < 768) {
           $('.news-carousel-wrapper').slick({
               mobileFirst: true,
               dots: true,
               prevArrow: false,
               nextArrow: false,
               infinite: true,
               speed: 500,
               slidesToShow: 2,
               responsive: [
                   {
                       breakpoint: 1024,
                       settings: {
                           slidesToShow: 3,
                           slidesToScroll: 3,
                           infinite: true,
                           dots: false
                       }
                   },
                   {
                       breakpoint: 768,
                       settings: {
                           slidesToShow: 2,
                           slidesToScroll: 1,
                           infinite: true,
                           dots: true
                       }
                   }
               ]
           });
       }
       else {

       }
   })*/
});
