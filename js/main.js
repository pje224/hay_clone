window.addEventListener("load", function () {
  const swiper = new Swiper(".product-imgs", {
    // slidesPerView: 3.3,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 1200일때 slidesPerView5개반개 보이겠다
      390: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3.3,
      },
      1200: {
        slidesPerView: 3.3,
      },
    },
  });
  const swiper2 = new Swiper(".outdoor-imgs", {
    // slidesPerView: 2.3,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 1200일때 slidesPerView5개반개 보이겠다
      390: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2.3,
      },
      1200: {
        slidesPerView: 2.3,
      },
    },
  });
  const swiper3 = new Swiper(".visual", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // 처음으로 자연스럽게 넘어가기
    loop: true,
  });
});
