<template>
  <div class="home">
    <h1>{{ pageTitle }}</h1>
    <!-- <div>
      111
      <date-picker v-model="date" popover />
      {{ date }}
    </div> -->

    <div class="mClass">
      <div style="display: flex;justify-content: right;">
        <div>
          <input id="myID" class="tt" />
        </div>
        <date-picker popover custom-input="myID" />

        <div>
          <input id="myIDs" class="tt" />
        </div>
        <date-picker popover custom-input="myIDs" />
      </div>
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
      date: '2024-05-05',
      time: '',
      pageTitle: process.env.VUE_APP_TITLE
    }
  },
  methods: {
    getPos() {
      const element = document.querySelector('.tt')
      const rect = element.getBoundingClientRect()

      console.log(rect.right)
      console.log(rect.left)
    },
    getVal() {
      const customInput = document.getElementById('myID')
      // console.log('ehhhh',customInput.value);
    }
  },

  mounted() {
    this.getVal()
  }
}
</script>
<style lang="css">
.mClass {
  background: royalblue;
  contain: layout;
  width: 900px;
}
</style>
