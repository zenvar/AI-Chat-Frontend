<template>
    <div class="chat-container">
        <div class="header">
            <slot name="header">Chat</slot>
        </div>
        <div class="msgs-list">
            <div v-for="(message) in messages" :key="message.id" class="msg">
                <div v-if="!message.fromMe" class="msg-else">
                    <div class="avatar">
                        <img :src="message.avatar" alt="else-avatar">
                    </div>
                    <div class="msg-bubble-else">
                        {{ message.content }}
                    </div>
                </div>
                <div v-if="message.fromMe" class="msg-my">
                    <div class="msg-bubble-my">
                        {{ message.content }}
                    </div>
                    <div class="avatar">
                        <img :src="message.avatar" alt="my-avatar">
                    </div>
                </div>
            </div>
        </div>
        <div class="chat-input">
            <div class="type">
            <textarea ref="textarea" v-model="newMessage" @input="resizeTextarea"></textarea>
            <button @click="sendMessage">Send</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            my_avatar: 'https://acat-image.pages.dev/file/4e27ea41320a94ea47f3e.png',
            messages: [
                {
                    id: '1',
                    content: "Hello!888888 888888888 88888888 888888888888 8888888888888888 8888888888888  88888 88888  88888888888",
                    fromMe: false,
                    avatar: 'https://acat-image.pages.dev/file/91d6f1b67af3ab9ca93e8.png', // 替换为服务器头像的实际 URL
                },
                {
                    id: '2',
                    content: "Hi there!",
                    fromMe: true,
                    avatar: 'https://acat-image.pages.dev/file/4e27ea41320a94ea47f3e.png', // 替换为用户头像的实际 URL
                },
            ]
        }
    },
    methods: {
      resizeTextarea() {
      this.$refs.textarea.style.height = 'auto';
      this.$refs.textarea.style.height = (this.$refs.textarea.scrollHeight + 2) + 'px';
    },
      sendMessage() {
        // 发送消息到后端
        // 你需要根据后端的实际情况来发送消息，这里只是一个简单的示例
        this.messages.push({
          content: this.newMessage,
          fromMe: true,
          avatar: this.my_avatar, // 替换为用户头像的实际 URL
        });
        this.newMessage = '';
        this.$refs.textarea.style.height = '20px';
        this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight;
      },
    },
    mounted() {

    }
}
</script>
<style scoped>
.chat-container {
    min-width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.header {
    background-color: #93a6b3;
    color: #fff;
    padding: 10px;
    text-align: center;
}

.msgs-list {
    margin: 20px,20px;
    padding: 10px;
    overflow-y: auto;
}

.msg-else {
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}

.msg-my {
    margin-bottom: 10px;
    display: flex;
    flex-grow: 1;
}

.avatar img {
    width: 40px;
    /* Adjust as needed */
    height: 40px;
    /* Adjust as needed */
    border-radius: 50%;

    object-fit:cover;
}

.msg-bubble-else {
    margin-left: 5px;
    margin-top: 10px;
    min-height: 20px;
    padding: 10px;
    border-radius: 1px 8px 8px 10px;
    background-color: #ecf0f1;
    max-width: 70%;
    /* Adjust as needed */
}

.msg-my .msg-bubble-my {
    margin-left: auto;
    margin-top: 10px;
    margin-right: 5px;
    min-height: 20px;
    padding: 10px;
    border-radius: 8px 1px 10px 8px;
    max-width: 70%;
    background-color: #80a4bb;
    color: #fff;
    overflow-wrap: break-word;

}

.chat-input {
    margin-top: auto;
    padding: 10px;
    background-color: #ccc;
  }

  .type {
    display: flex;
  }
  
 .chat-input textarea {
    flex-grow: 3;
    max-height: 150px;
    font-size: 14px;
    height: 20px;
    color: #333;
    font-family: Arial, sans-serif;
    padding: 5px;
    margin: 0px 10px;
    /*别忘了文本域的box-sizing属性值是border-box;所有的边框和padding都是在你固定的宽高的基础上绘制*/
     /*去除点击出现轮廓颜色*/
    outline: none;    
      /*如果有需要，去掉右下角的可拉伸变大小的图标和功能*/
    resize: none;
      /*padding已在重置样式中去除，如果没有去除，记得有padding哦*/
 }
  
  .chat-input button {
    background-color: #4caf50;
    height: 30px;
    flex-grow: 1;
    color: #fff;
    border: none;
    padding: 8px;
    cursor: pointer;
  }


/* Add additional styling for input and send button as needed */</style>