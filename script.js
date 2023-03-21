
const swiper = new Swiper('.hero-swiper', {

    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    navigation: {
      nextEl: '.hero-button-next',
      prevEl: '.hero-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });