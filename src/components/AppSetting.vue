<script>
    import store from '../stores/AppSettingsStore'

    export default {
        props: ['appSetting'],
        computed: {
           count () {
	          return store.state.count
           },
           message() { return store.state.message; }
        },
        methods: {
           refreshMessage() {
              store.dispatch('refreshMessage').then(() => {
                  // do stuff
              });
           },
           loadAppSettings() {
              store.dispatch('loadAppSettings').then(() => {
                  // do stuff
              });
           }
        },
    }
</script>

<style scoped>
  p {
      padding: 10px;
      background-color: orange;
  }
</style>

<template>
    <div>
        <p>
   {{ appSetting }}
   </p>
   And the count: {{ count }}
   <br />
   And the message: {{ message }}
   <button @click="refreshMessage" >Get Message</button>
   <br />
   <button @click="loadAppSettings" >Load Settings</button>
   
   </div>
</template>
