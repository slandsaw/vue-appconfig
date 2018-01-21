<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div style="width: 500px;">
    <AppSetting v-for="item in appSettings" :key="item.id":appSetting="item"/>
</div>  </div>
</template>

<script>
  import AppSetting from './AppSetting'
  
   /*global fetch*/
  export default {
    name: 'HelloWorld',
    components: { AppSetting },
    data() {
      return {
        msg: 'This stuff is actually fun',
        appSettings: []
      }
    },
    created() {
      fetch('https://vue-appsetting-bluerose.c9users.io:8081/appSettings')
        .then(response => response.json())
        .then(json => {
          console.log("json", json);
          this.appSettings = json;
        });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
