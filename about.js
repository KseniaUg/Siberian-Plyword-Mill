const swiper = new Swiper('.about-swiper', {
    slidesPerView: 4,
    loop: true,


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });