import Swiper, {Thumbs} from "swiper";
Swiper.use([Thumbs]);

const swiperThumb = new Swiper('.swiper--novelty-thumb', {
    spaceBetween: 20,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
});

const swiperNovelty = new Swiper('.swiper--novelty', {
    spaceBetween: 20,
    thumbs: {
        swiper: swiperThumb,
    }
});
