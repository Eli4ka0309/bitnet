$(document).ready(function () {
    $('.slides_inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
        touchThreshold: 10,
        variableWidth: true,
        centerMode: true,
        mobileFirst: true,
        responsive:[{
            breakpoints:570,
            settings: {

            }
        }

        ]
    });

    $('.header__burger-btm').click(function (event){
        $('.header__burger-btm,.header_nav').toggleClass("active");
    });

});