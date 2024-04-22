<template>
  <div class="home">
    <h1>aa{{ pageTitle }}aa</h1>
    <!-- <div>
      111
      <date-picker v-model="date" popover />
      {{ date }}
    </div> -->

    <div>
      222
      <input class="tt"/>
      <date-picker v-model="date" popover custom-input=".tt" />
      {{ date }}
    </div>

    <!-- <div style="margin-top:30px">
      <date-picker v-model="time" type="time" />
      {{ time }}
    </div> -->
  </div>
</template>

<script>
import Vue3PersianDatetimePicker from '@/picker/Vue3PersianDatetimePicker'
export default {
  name: 'Home',
  components: {
    DatePicker: Vue3PersianDatetimePicker
  },
  data() {
    return {
      date: '',
      time: '',
      pageTitle: process.env.VUE_APP_TITLE
    }
  }
}
</script>
