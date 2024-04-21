// 在你的父组件或入口文件中
<template>
  <div class="APP-containner">
    <router-view></router-view>
  </div>
</template>

<script>
import Chat from './components/chat.vue';
import login from './components/login.vue';
import registry from './components/registry.vue';
export default {
  components: {
    Chat,
    login,
    registry
  }
}
</script>

<style>
.APP-containner {
  display: flex;
  height: 98vh;
}
</style>
