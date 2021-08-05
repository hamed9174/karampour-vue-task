<template>
 <div class="footer">
   <div class="md-layout">
     <div class="footer-head md-layout-item md-large-size-100">
       <h1>لیمو</h1>
     </div>
     <div class="footer-about md-layout-item md-large-size-33 md-small-size-100">
       <div>
         <h2>درمورد فروشگاه</h2>
       </div>
       <div>
         <h4><i class="fas fa-map-marker"></i> آدرس ...</h4>
       </div>
       <div class="my-3">
         <h4><i class="fas fa-mobile-alt"></i> 555 555 5555</h4>
       </div>
       <div class="my-3">
         <h4><i class="fas fa-envelope"></i> test@test.com</h4>
       </div>
     </div>
     <div class="md-layout-item md-large-size-33 md-small-size-100 footer-information">
       <div>
         <h2>اطلاعات</h2>
       </div>
       <div>
         <p>
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، ..
         </p>
       </div>
     </div>
     <div class="md-layout-item md-large-size-33 md-small-size-100 footer-newsletter">
       <div>
         <h2>خبرنامه</h2>
       </div>
       <div class="newsletter-input">
         <md-field md-inline>
           <label>درخواست ...</label>
           <md-input v-model="inline"></md-input>
         </md-field>
       </div>
       <div>
         <md-button class="md-raised md-primary">ارسال</md-button>
       </div>
       <div class="social-media">
         <i class="fab fa-facebook-f"></i>
         <i class="fab fa-twitter"></i>
         <i class="fab fa-linkedin-in"></i>
         <i class="fab fa-youtube"></i>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      inline : ''
    }
  }
}
</script>

<style scoped>

</style>
