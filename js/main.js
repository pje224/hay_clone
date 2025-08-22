window.addEventListener("load", function () {
  const swiper = new Swiper(".product-imgs", {
    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 1200일때 slidesPerView5개반개 보이겠다
      391: {
        slidesPerView: 3.3,
        // },
        // 768: {
        //   slidesPerView: 3.3,
        // },
        // 1200: {
        //   slidesPerView: 3.3,
      },
    },
  });
  const swiper2 = new Swiper(".outdoor-imgs", {
    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 1200일때 slidesPerView5개반개 보이겠다
      391: {
        slidesPerView: 2.3,
      },
      // 768: {
      //   slidesPerView: 2.3,
      // },
      // 1200: {
      //   slidesPerView: 2.3,
      // },
    },
  });
  const swiper3 = new Swiper(".web-banner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // 처음으로 자연스럽게 넘어가기
    loop: true,
  });
  const swiper4 = new Swiper(".tab-banner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // 처음으로 자연스럽게 넘어가기
    loop: true,
  });
  const swiper5 = new Swiper(".mo-banner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // 처음으로 자연스럽게 넘어가기
    loop: true,
  });
  // 햄버거 메뉴 기능
  const hamburger = this.document.querySelector("#hamburger");
  const mobileMenu = this.document.querySelector("#mobileMenu");
  const product = this.document.querySelector(".product");
  const subMenu = this.document.querySelector(".sub-menu");
  // 햄버거바 클릭시
  hamburger.addEventListener("click", function () {
    if (hamburger.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("active");
      document.body.style.overflow = "";
    } else {
      mobileMenu.classList.add("active");
      hamburger.classList.add("active");
      document.body.style.overflow = mobileMenu.classList.contains("active")
        ? "hidden"
        : "";
    }
  });

  product.addEventListener("click", function () {
    if (subMenu.classList.contains("open")) {
      subMenu.classList.remove("open");
    } else {
      subMenu.classList.add("open");
    }
  });

  //   위로가기 버튼
  const goTopBtn = this.document.querySelector(".goTop-btn");
  goTopBtn.addEventListener("click", () => {
    this.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
