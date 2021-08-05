<template>
  <div class="about">
    <md-card>
      <md-card-header>
        <div class="md-title">درباره ما</div>
      </md-card-header>

      <md-card-content>
        <AboutUs />
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
import AboutUs from "../components/AboutUs";
  export default {
    components : {
      AboutUs
    }
  }
</script>
