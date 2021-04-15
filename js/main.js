$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        900:{
            items:5
        },
        1400:{
            items:8
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});