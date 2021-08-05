<template>
  <div class="gallery">
    <div class="slider">
      <div class="slides" id="slider" :style="slides_style">
        <div class="slide" :style="slide_style" v-for="(image , index) in images" :key="index">
          <img :src="require(`../assets/images/${image}`)">
        </div>
      </div>
    </div>

<!--    navigations-->
    <div v-if="right_nav" @click="NextSlide" class="navigation left-navigation"></div>
    <div v-if="left_nav" @click="PreviousSlide" class="navigation right-navigation"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      images : ['nature-1.jpg', 'nature-2.jpg', 'nature-3.jpg', 'nature-4.jpg' ,'nature-5.jpg', 'nature-6.jpg',
        'nature-1.jpg', 'nature-2.jpg', 'nature-3.jpg', 'nature-4.jpg' ,'nature-5.jpg', 'nature-6.jpg',
        'nature-1.jpg', 'nature-2.jpg', 'nature-3.jpg', 'nature-4.jpg' ,'nature-5.jpg', 'nature-6.jpg',
        'nature-3.jpg', 'nature-4.jpg'
      ],
      slide_style : {
        width : ''
      },
      left_nav: false,
      right_nav: true,
      step_width : 0,
      slides_width : 0,
      slide_width : 0,
      nth: 0,
      slides_style: {
        width : '',
        right : 0 + '%'
      }
    }
  },
  watch: {
    // enable and disable navigations
    step_width : function (val) {
      if (val >= -5 && val < this.slides_width -100 ){
        this.left_nav = true
        this.right_nav =  true
      } else if (val >= this.slides_width -100 && val <= this.slides_width - 100/3* 2 +1) {
        this.left_nav = true
        this.right_nav =  false
      } else if (val <= -5) {
        this.left_nav = false
        this.right_nav =  true
      }
    }
  },
  methods:{
    NextSlide(){
      // go slides to right
      this.step_width = this.step_width + (100/3);
      this.nth += 1;
      let el = document.getElementById('slider');
      el.childNodes.forEach(element => {
        element.classList.remove('active')
      });
      el.childNodes[this.nth].classList.add('active');
      this.slides_style.right = - (this.step_width) + '%';
    },
    PreviousSlide(){
      // go slides to left
      let el = document.getElementById('slider');
      this.nth -= 1;
      this.step_width = this.step_width - (100/3);
      el.childNodes.forEach(element => {
        element.classList.remove('active')
      });
      el.childNodes[this.nth].classList.add('active');

      this.slides_style.right = -(this.step_width) + '%';
    }
  },
  mounted() {
    // active class for main image
    let el = document.getElementById('slider')
    el.childNodes[this.nth].classList.add('active');

    // slides width
    this.step_width = -100/3
    this.slide_width = 100/(this.images.length)
    this.slides_width = (this.images.length)/3 * 100
    this.slides_style.width = (this.images.length)/3 * 100 + '%'
    this.slides_style.right = 100/3 + '%'
    this.slide_style.width = 100 /(this.images.length)+ '%'
  }
}
</script>

<style scoped>

</style>