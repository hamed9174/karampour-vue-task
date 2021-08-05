<template>
  <div class="home">
    <md-card class="md-primary" md-theme="purple-card">
      <md-card-header>
        <div class="md-title">منتخب تصاویر طبیعت</div>
      </md-card-header>
      <md-card-content>
        <IndexSlider />
      </md-card-content>
    </md-card>
    <md-card class="md-primary" md-theme="purple-card">
      <md-card-header>
        <div class="md-title">درباره ما</div>
      </md-card-header>

      <md-card-content>
        <AboutUs />
      </md-card-content>
    </md-card>
    <md-card class="md-primary" md-theme="purple-card">
      <md-card-header>
        <div class="md-title">منتخب تصاویر طبیعت</div>
      </md-card-header>
      <md-card-content>
        <GallerySlider />
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import IndexSlider from "../components/IndexSlider";
import AboutUs from "../components/AboutUs";
import GallerySlider from "../components/GallerySlider";
export default {
  components:{
    IndexSlider,
    AboutUs,
    GallerySlider
  },
  methods:{
  }
}
</script>

<style>

</style>