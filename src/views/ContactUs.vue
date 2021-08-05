<template>
  <div class="contact-us">
    <md-card>
      <md-card-header class="">
        <div class="md-title">ارتباط با ما</div>
        <div class="md-subhead">جهت ارتباط با ما فرم زیر را تکمیل و ارسال نمایید.</div>
      </md-card-header>
      <md-card-content>
        <form @click.prevent="save">
          <div class="form">
            <div class="form-field">
              <md-field>
                <label for="first-name">نام</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
              </md-field>
            </div>
            <div class="form-field">
              <md-field>
                <label for="last-name">نام خانوادگی</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
              </md-field>
            </div>
            <div class="form-field">
              <md-field>
                <label for="email">ایمیل</label>
                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
              </md-field>
            </div>
            <div class="form-textarea">
              <md-field>
                <label>پیام</label>
                <md-textarea v-model="form.message"></md-textarea>
              </md-field>
            </div>
            <div class="submit-form">
              <md-button type="submit" class="md-raised md-primary">ارسال</md-button>
            </div>
          </div>
        </form>
      </md-card-content>
    </md-card>

  </div>
</template>

<script>

export default {
  data: () => ({
    form: {
      firstName: null,
      lastName: null,
      email: null,
      message : ''
    }
  }),
  methods: {
    save(){
      console.log(this.form);
      this.form = {
        firstName: null,
        lastName: null,
        email: null,
        message : ''
      }
    }
  }
}
</script>

<style scoped>

</style>