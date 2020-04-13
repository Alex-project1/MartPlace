$(function() {

    $(".rate-star").rateYo({
        rating: 5,
        readOnly: true,
        starWidth: "12px"
    });


    $('.slider__items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slick-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow"></button>',
    });


});