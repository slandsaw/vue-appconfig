<template>
  <div id="app">
    <img src="./assets/logo.png">
    
<p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
  
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  computed: {
    count () {
	    return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
    	this.$store.commit('decrement')
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    this.$store.dispatch('loadAppSettings').then(() => {
      // do stuff
    });    
  }
}
</script>

<style>
</style>
