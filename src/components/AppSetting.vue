<script>

    export default {
        props: ['appSetting'],
        computed: {
           count () {
	          return this.$store.state.count
           },
           message () { return this.$store.state.message; },
            currentValue: {
              get () {
                return this.appSetting.value;
              },
              set (value) {
                //this.$store.commit('updateMessage', value)
                console.log("setting currentValue", value);               
                }
            }           
        },
        methods: {
           refreshMessage() {
              this.$store.dispatch('refreshMessage').then(() => {
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
            
   {{ appSetting.setting }} <input v-model.lazy="currentValue">
   </p>
   And the count: {{ count }}
   <br />
   And the message: {{ message }}
   <button @click="refreshMessage" >Get Message</button>
  
   </div>
</template>
