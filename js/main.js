window.addEventListener("load" , function(){
    const swiper = new Swiper(".product-imgs", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
        const swiper2 = new Swiper(".outdoor-imgs", {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
})