<template>
    <div class="setting-container">
      <!-- Top image -->
      <img src="https://acat-image.pages.dev/file/b4570d25bc52b352298e7.gif" alt="Image" />
      
      <!-- Center content -->
      <div class="center-content">
        <textarea placeholder="Text area"></textarea>
        <select v-model="selectedOption">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <slider :value.sync="sliderValue" min="0" max="1"></slider>
      </div>
      
      <!-- Bottom buttons -->
      <div class="bottom-buttons">
        <button @click="handleExit">退出登录</button>
        <button @click="handleClose">关闭窗口</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedOption: '',
        sliderValue: 0,
      }
    },
    methods: {
      handleExit() {
        // exit login logic
      },
      handleClose() {
        // close window logic
      }
    }
  }
  </script>

  <style scoped>
.setting-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 600px;
  background-color: #ece7feaa;
  backdrop-filter: blur(20px);

  text-align: center;

  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.14);
  z-index: 1000; /* to ensure the window is always on top */
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
    max-width: 50%;
  object-fit: cover;
}

textarea {
    border: 0px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 8px;
    height: 10vh;
    max-height: 20vh;
    width: 90%;
    font-size: 20px;
    color: #333;
    margin: 0px;
    /*别忘了文本域的box-sizing属性值是border-box;所有的边框和padding都是在你固定的宽高的基础上绘制*/
    /*去除点击出现轮廓颜色*/
    outline: none;
    /*如果有需要，去掉右下角的可拉伸变大小的图标和功能*/
    resize: none;
    /*padding已在重置样式中去除，如果没有去除，记得有padding哦*/

}

.bottom-buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
select{
    margin: 15px;
    width: 90%;
    height: 40px;
    border: none;
    border-radius: 8px;
    background-color: rgba(147, 163, 229, 0.202);
}

option{
    margin: 15px;
    width: 90%;
    height: 40px;
    border: none;
    border-radius: 8px;
    color: rgb(3, 3, 3);
}

button {
    background-color: #d44444;
    color: #fff;
    width: 90%;
    height: 40px;
    border: none;
    border-radius: 8px;
    border-radius: 5px;
    padding: 8px;
    margin: 8px;
    cursor: pointer;
}

</style>