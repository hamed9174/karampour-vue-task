<template>
  <div class="contact-us">
    <md-card>
      <md-card-header class="">
        <div class="md-title">ارتباط با ما</div>
        <div class="md-subhead">جهت ارتباط با ما فرم زیر را تکمیل و ارسال نمایید.</div>
      </md-card-header>
      <md-card-content>
        <ContactUS />
      </md-card-content>
    </md-card>

  </div>
</template>

<script>
import ContactUS from "../components/ContactUS";
export default {
  components : {
    ContactUS
  }
}
</script>

<style scoped>

</style>