let burger =$('.burger');
let nav =$('.header__nav');
burger.on('click', function () {
    burger .toggleClass('active');
    nav .toggleClass('active')
});




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 25,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

