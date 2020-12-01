
const responsive ={
    0:{items:1},
    320:{items:1},
    560:{items:2},
    960:{items:3},
    1100:{items:3}
}


$('.owl-carousel').owlCarousel({
    autoplay:false,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.arrow-icon .prev-btn'),$('.arrow-icon .next-btn')],
    responsive:responsive

});
