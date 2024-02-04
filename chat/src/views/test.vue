<template>
    <div class="chat-container">
      <div class="chat-header">Chat App</div>
      <div class="chat-messages" ref="messagesContainer">
        <div v-for="(message, index) in messages" :key="index" class="chat-message" :class="{ 'my-message': message.fromMe }">
          <div class="avatar" v-if="!message.fromMe">
            <img :src="message.avatar" alt="Avatar">
          </div>
          <div class="message-content">
            <div class="message-bubble">{{ message.content }}</div>
          </div>
          <div class="avatar" v-if="message.fromMe">
            <img :src="message.avatar" alt="Avatar">
          </div>
        </div>
      </div>
      <div class="chat-input">
        <textarea ref="textarea" v-model="newMessage" @input="resizeTextarea" placeholder="Type your message..."></textarea>
        <button @click="sendMessage">Send</button>
  </div>
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [
          {
            content: "Hello!888888 888888888 88888888 888888888888 8888888888888888 8888888888888  88888 88888  88888888888",
            fromMe: false,
            avatar: 'https://acat-image.pages.dev/file/b7c85bf5f31bb53eedbf7.png', // 替换为服务器头像的实际 URL
          },
          {
            content: "Hi there!",
            fromMe: true,
            avatar: 'https://acat-image.pages.dev/file/b7c85bf5f31bb53eedbf7.png', // 替换为用户头像的实际 URL
          },
        ],
        newMessage: '',
        my_avatar: 'https://acat-image.pages.dev/file/b7c85bf5f31bb53eedbf7.png',
      };
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
        this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight;
        this.$refs.textarea.style.height = 'auto';
      },
      setupSSE() {
        // 设置Server-Sent Events监听
        const eventSource = new EventSource('/sse-endpoint');
  
        eventSource.onmessage = (event) => {
          // 处理从后端收到的消息
          this.messages.push({
            content: event.data,
            fromMe: false,
            avatar: 'url_to_server_avatar', // 替换为服务器头像的实际 URL
          });
          this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight;
        };
  
        eventSource.onerror = (error) => {
          // 处理错误
          console.error('SSE Error:', error);
          eventSource.close();
        };
      },
    },
    mounted() {
      this.setupSSE();
    },
  };
  </script>
  
  <style scoped>
  .chat-container {
    width: 300px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    height: 400px;
  }
  
  .chat-header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
  }
  
  .chat-messages {
    flex-grow: 1;
    overflow-y: auto;
    padding: 10px;
  }
  
  .chat-message {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    max-width: 100%;
  }
  
  .my-message .avatar {
    margin-left: 10px;
  }
  
  .message-content {
    flex-grow: 1;
    max-width: 100%;
  }
  
  .avatar img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .chat-message .message-bubble {
    display: flex;
    background-color: #e8eaee;
    word-wrap: break-word; /* 允许长单词或 URL 换行 */
    flex-wrap: wrap;
    border-radius: 10px;
    padding: 8px 12px;
    max-width: 50%;
    margin-left: 10px; 
  }
  .my-message .message-bubble {
    background-color: #4caf50;
    display: flex;
    flex-wrap: wrap;
    padding: 8px 12px;
    max-width: 50%;
    margin-left: auto; /* 将用户消息推到最右边 */
  }
  .chat-input {
    display: flex;
    padding: 10px;
  }
  
  .chat-input input {
    flex-grow: 1;
    margin-right: 10px;
  }
  
  .chat-input button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 8px;
    cursor: pointer;
  }
  
  textarea {
    overflow-wrap: break-word;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  
  </style>
  