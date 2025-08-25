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
      searchOpen.classList.remove("active");
      document.body.style.overflow = "";
    } else {
      mobileMenu.classList.add("active");
      hamburger.classList.add("active");
      searchPage.classList.remove("active");
      searchClose.classList.remove("active");
      document.body.style.overflow = mobileMenu.classList.contains("active")
        ? "hidden"
        : "";
    }
  });
  // 검색 페이지
  const searchOpen = this.document.querySelector(".search-open");
  const searchClose = this.document.querySelector(".search-close");
  const searchPage = this.document.querySelector(".search");
  // 돋보기 클릭시
  searchOpen.addEventListener("click", () => {
    if (searchOpen.classList.contains("active")) {
      searchPage.classList.remove("active");
      searchOpen.classList.remove("active");
      searchClose.classList.remove("active");
      document.body.style.overflow = "";
    } else {
      searchPage.classList.add("active");
      searchOpen.classList.add("active");
      searchClose.classList.add("active");
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = searchPage.classList.contains("active")
        ? "hidden"
        : "";
    }
  });
  // 검색페이지 창닫기
  searchClose.addEventListener("click", () => {
    if (searchClose.classList.contains("active")) {
      searchPage.classList.remove("active");
      searchOpen.classList.remove("active");
      searchClose.classList.remove("active");
      document.body.style.overflow = "";
    } else {
      searchPage.classList.add("active");
      searchOpen.classList.add("active");
      searchClose.classList.add("active");
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = searchPage.classList.contains("active")
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
  this.window.addEventListener("scroll", () => {
    if (this.document.documentElement.scrollTop > 200) {
      goTopBtn.classList.add("active");
    } else {
      goTopBtn.classList.remove("active");
    }
  });
  goTopBtn.addEventListener("click", () => {
    this.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
