import Swiper, {Navigation, Thumbs} from "swiper";
Swiper.use([Thumbs, Navigation]);

const swiperThumb = new Swiper('.swiper--novelty-thumb', {
    spaceBetween: 20,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
});

const swiperNovelty = new Swiper('.swiper--novelty', {
    spaceBetween: 20,
    navigation: {
        prevEl: ".swiper-button--prev",
        nextEl: ".swiper-button--next",
    },
    thumbs: {
        swiper: swiperThumb,
    }
});
