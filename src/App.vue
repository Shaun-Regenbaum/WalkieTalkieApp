<template>
  <div id="app">
    <header>
      <h1>Title</h1>
      <p>Random Text</p>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
import { auth } from './firebase'
console.log(auth)

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
</style>
