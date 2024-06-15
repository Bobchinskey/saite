new Swiper('.swiper-slide');

const swiper = new Swiper('.swiper-container', {

    loop: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".swiper-slide"
    },

    autoHeight: true,

    slidesPerView: 2,

    autoplay: {
        delay: 1700,
        stopOnLastSlide: true,
        disableOnInteraction: false
    }
});