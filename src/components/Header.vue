<template>
  <div class="header md-gutter">
    <div class="md-layout-item md-large-size-100 md-layout md-gutter sub-header">
      <div class="md-layout-item md-medium-size-20 md-small-size-50 logo">
        <img src="../assets/images/logo.png" alt="">
      </div>
      <div class="md-layout-item md-medium-size-50 md-small-hide search">
        <md-field>
          <div class="search-icon">
            <i class="fas fa-search"></i>
          </div>
          <md-input v-model="search"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-medium-size-30 md-small-size-50 auth-link">
        <div class="login-btn">
          <md-button class="md-dense md-raised md-primary">ورود</md-button>
        </div>
        <div>
          <md-button class="md-dense md-raised md-primary">ثبت نام</md-button>
        </div>
      </div>
    </div>

    <div class="md-layout-item md-large-size-100 mega-menu">
      <ul>
        <li>
          <router-link to="/">خانه</router-link>
        </li>
        <li>
          <router-link to="/products">محصولات</router-link>
        </li>
        <li>
          <router-link to="/about">درباره ما</router-link>
        </li>
        <li>
          <router-link to="/contact-us">تماس با ما</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      search : ''
    }
  }
}
</script>

<style scoped>

</style>