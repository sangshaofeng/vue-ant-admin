<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  text-align: center;
}
body::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #eee;
}
body::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgb(189, 189, 189); 
}
</style>
