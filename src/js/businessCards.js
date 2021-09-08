const businessCardsContent = document.querySelector('.main__blockbusinesscards_content');

function showSwiper() {
  const businessCards = document.querySelectorAll('.main__businesscard');

  function resize() {
    if (window.innerWidth <= 768) {
      if (!document.querySelector('.main__blockbusinesscards_swipermobile')) {

        businessCardsContent.classList.add('main__blockbusinesscards_swipermobile');
        businessCardsContent.classList.remove('main__blockbusinesscards_content');
        const swiperContainer = document.createElement('div');
        const swiperWrapper = document.createElement('div');
        const swiperPagination = document.createElement('div');
        swiperContainer.classList.add('swiper-container', 'mySwiper', 'mySwiper-mobile');
        swiperWrapper.classList.add('swiper-wrapper', 'swiper-wraper_block');
        swiperPagination.classList.add('swiper-pagination', 'swiper-pagination-green');
        businessCardsContent.prepend(swiperContainer);
        swiperContainer.prepend(swiperWrapper);

        businessCards.forEach((card) => {
          const swiperSlide = document.createElement('div');
          const contentMobile = document.createElement('div');
          contentMobile.classList.add('main__blockbusinesscards_contentmobile');
          swiperSlide.classList.add('swiper-slide', 'swiper-slide_block');
          swiperWrapper.append(swiperSlide);
          swiperSlide.append(contentMobile);
          contentMobile.append(card);
        });

        swiperContainer.append(swiperPagination);

        swiper();
      }

    } else {
      if (document.querySelector('.main__blockbusinesscards_swipermobile')) {
        businessCardsContent.classList.add('main__blockbusinesscards_content');
        businessCardsContent.classList.remove('main__blockbusinesscards_swipermobile');
        const mySwiperMobile = document.querySelector('.mySwiper-mobile');
        mySwiperMobile.remove();

        businessCards.forEach((card) => {
          businessCardsContent.append(card);
        });
      }
    }
  }

  resize();
  window.onresize = resize;
}

document.addEventListener('DOMContentLoaded', showSwiper);

