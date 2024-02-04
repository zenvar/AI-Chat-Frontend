// 在你的父组件或入口文件中
<template>
  <div class="APP-containner">
    <Chat />
  </div>
</template>

<script>
import Chat from './components/chat.vue';

export default {
  components: {
    Chat
  }
}
</script>

<style>
.APP-containner {
  display: flex;
  margin: auto;
  width: 300px;
  height: 500px;
}
</style>
