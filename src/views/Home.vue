<template>
  <div class="home">
    <h1>{{ pageTitle }}</h1>

    <div class="container">
      <div class="header">this is header</div>

      <div class="content">
        <div v-for="i in 30" :key="i">sad</div>
        <div style="margin-right: auto;">
          <div style="display: flex;justify-content: left;">
            <div>
              <input id="myID" class="tt" />
            </div>
            <date-picker popover custom-input=".tt" />

            <div>
              <input id="myIDs" class="ttt" />
            </div>
            <date-picker popover custom-input=".ttt" />
          </div>
        </div>
        <div v-for="i in 33" :key="i">sad</div>
      </div>
    </div>
    <!-- <div>
      111
      <date-picker v-model="date" popover />
      {{ date }}
    </div> -->

    <!-- <div v-for="i in 30" :key="i">sad</div>
    <div style="margin-right: auto;">
      <div style="display: flex;justify-content: left;">
        <div>
          <input id="myID" class="tt" />
        </div>
        <date-picker popover custom-input=".tt" />

        <div>
          <input id="myIDs" class="ttt" />
        </div>
        <date-picker popover custom-input=".ttt" />
      </div>
    </div>
    <div v-for="i in 33" :key="i">sad</div> -->

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
  }
}
</script>
<style lang="css">
body {
}
.container {
  contain: layout;
  width: 900px;
  margin: 24px;
  max-width: calc(100% - 48px);
  border: 1px solid #098fb8;
}

.header {
  font-size: 38px;
  background: #098fb8;
  color: white;
  padding: 16px;
}

.content {
  padding: 24px;
  height: 500px;
  overflow-y: auto;
}
</style>
