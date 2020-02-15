$(document).ready(function(){
    $('.section-rooms-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-rooms-arrow arrow"></button>',
        nextArrow: '<button class="next-rooms-arrow arrow"></button>',
        dots: true,
        centered: true,
        appendArrows: '.section-rooms-slider',
        appendDots: '.section-rooms-slider'
    });
});

$(document).ready(function(){
    $('.section-feedback-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-feedback-arrow arrow"></button>',
        nextArrow: '<button class="next-feedback-arrow arrow"></button>',
        dots: true,
        dotsClass: 'feedback-dots',
        centerMode: true,
        variableWidth: true,
        appendArrows: '.section-feedback-slider',
        appendDots: '.section-feedback-slider'
    });
});