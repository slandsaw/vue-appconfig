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
import store from './stores/AppSettingsStore'

export default {
  name: 'App',
  computed: {
    count () {
	    return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
    	store.commit('decrement')
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
