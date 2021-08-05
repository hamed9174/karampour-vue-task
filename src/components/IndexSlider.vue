<template>
  <div class="index-slider">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="../assets/images/nature-1.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/nature-2.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/nature-3.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/nature-4.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/nature-5.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/nature-6.jpg">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'swiper-example-responsive-breakpoints',
  title: 'Responsive breakpoints',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  }
}
</script>
<style>

</style>