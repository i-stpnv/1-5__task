// Swiper
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

if (document.documentElement.clientWidth < 768) {
    let swiperElem = document.querySelector('.brands-repair__list');
    let swiperSlides = document.querySelectorAll('.brands-repair__item');

    swiperElem.classList.add('swiper');
    for (let i = 0; i < swiperSlides.length; i++) {
        swiperSlides[i].classList.add('swiper-slide');
    }

    const swiper = new Swiper('.brands-repair__content', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        simulateTouch: true,
        grabCursor: true,
        slideToClickedSlide: true,
        spaceBetween: 16,
        slidesPerView: 1.1,
        breakpoints: {
            320: {
                slidesPerView: 1.1,
            },
            400: {
                slidesPerView: 1.4,
            },
            480: {
                slidesPerView: 1.6,
            },
            560: {
                slidesPerView: 1.8,
            },
            640: {
                slidesPerView: 2,
            },
            720: {
                slidesPerView: 2.2,
            },
        },
    });
}

// Expand button
let list = document.querySelector('.brands-repair__list');
let expandButton = document.querySelector('.brands-repair__expand-button');
let expandButtonText = document.querySelector('.brands-repair__expand-description');

expandButton.addEventListener('click', function () {
    if (list.classList.contains('brands-repair__list--expanded')) {
        list.classList.remove('brands-repair__list--expanded');
        expandButton.classList.remove('brands-repair__expand-button--rotated');
        expandButtonText.textContent = 'Показать все';
    } else {
        list.classList.add('brands-repair__list--expanded');
        expandButton.classList.add('brands-repair__expand-button--rotated');
        expandButtonText.textContent = 'Скрыть';
    }
});
