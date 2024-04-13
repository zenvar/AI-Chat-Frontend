<template>
    <div class="chat-container">
        <div class="header">
            <slot name="header">Chat</slot>
        </div>
        <div class="msgs-list" >
            <div v-for="(message) in messages" :key="message.id" class="msg">
                <div v-if="!message.fromMe" class="msg-else">
                    <div class="avatar">
                        <img :src="message.avatar" alt="else-avatar">
                    </div>
                    <div class="markdown-body msg-bubble-else" v-html="rendermarkdown(message.content)">
                    </div>
                </div>
                <div v-if="message.fromMe" class="msg-my">
                    <div class="markdown-body msg-bubble-my" v-html="enhanceCodeBlock(rendermarkdown(message.content))">
                    </div>
                    <div class="avatar">
                        <img :src="message.avatar" alt="my-avatar">
                    </div>
                </div>
            </div>
        </div>
        <div class="chat-input">
            <div class="type">
            <div class="warp">
                <textarea rows="1" dir="auto" placeholder="Type Here!" ref="textarea" v-model="newMessage" @input="resizeTextarea"></textarea>
            </div>
            <button @click="sendMessage">Send</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { marked } from 'marked';
    import hljs from "highlight.js";


    const renderer = new marked.Renderer();

    renderer.code = (code, language) => {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return `<pre><code class="hljs ${validLanguage}">${hljs.highlight(validLanguage, code).value}</code></pre>`;
    };

    marked.setOptions({
        renderer,
        highlight: (code) => hljs.highlight('plaintext', code).value,
    });

export default {
    data() {
        return {
            my_avatar: 'https://acat-image.pages.dev/file/4e27ea41320a94ea47f3e.png',
            newMessage:'',
            messages: [
                {
                    id: '1',
                    content: "## Title2 \n**Test**\n ```java\nint a = test;\nint b = 111;\nint c = 123;\n```\n-test!",
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
      this.$refs.textarea.style.height = (this.$refs.textarea.scrollHeight) + 'px';
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
        this.$refs.textarea.style.height = 'auto';
      },    
        rendermarkdown(rawtext){
            return marked(rawtext);
        },

        //增强代码块
        enhanceCodeBlock (content){
        // console.log(content)
        //在pre块中增加一个元素用于显示
        let enhance = content.replace(/<pre><code/g, '<pre><div class="enhance"><div class="lang">CODE</div><div class="copyCode">Copy<span class="el-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"></path></svg></span></div></div><code')
        // console.log(enhance)
        return enhance
        }
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
    border: 2px solid #d5f6ef;
    border-radius: 5px;
    overflow: hidden;
}

.header {
    background-color: rgba(67, 181, 137, 0.6);
    backdrop-filter: blur(50%);
    color: #393939;
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
    min-height: 15px;
    padding: 10px;
    border-radius: 1px 8px 8px 10px;
    background-color: #F8DFDF;
    max-width: 70%;
    min-width: 40%;
    /* Adjust as needed */
}

.msg-my .msg-bubble-my {
    margin-left: auto;
    margin-top: 10px;
    margin-right: 5px;
    min-height: 15px;
    padding: 10px;
    border-radius: 8px 1px 10px 8px;
    max-width: 70%;
    min-width: 20%;
    background-color: #cae5d9;
    color: #000000;
    overflow-wrap: break-word;
}

.chat-input {
    margin-top: auto;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 10px;
    border: 2px solid #549372;
    
  }

  .type {
    display: flex;
    align-items: flex-end;
    padding: 8px;
  }

  .warp {
    display: flex;
    min-height: 30px;
    width: calc(100% - 50px); /* 让输入框和按钮在同一行，留出按钮的宽度 */
    align-items: center;
  }
  
 .chat-input textarea {
    border: 0px;
    padding: 0px;
    max-height: 150px;
    width: 100%;
    font-size: 20px;
    color: #333;
    font-family: Arial, sans-serif;
    margin: 0px 10px;
    /*别忘了文本域的box-sizing属性值是border-box;所有的边框和padding都是在你固定的宽高的基础上绘制*/
     /*去除点击出现轮廓颜色*/
    outline: none;    
      /*如果有需要，去掉右下角的可拉伸变大小的图标和功能*/
    resize: none;
      /*padding已在重置样式中去除，如果没有去除，记得有padding哦*/

 }
  
.chat-input button {
    background-color: #44c884;
    height: 30px;
    width: 50px;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px;
    cursor: pointer;
  }


.msg-bubble-my >>> pre .enhance {
  display: flex;
  color: #fff ;
  padding: 0px 10px ;
  border-radius: 5px 5px 0 0 ;
  font-size: 16px ;
  background: #abacc0de;
  justify-content:space-between;
  align-items: center;
}
.msg-bubble-my >>> .copyCode{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

.msg-bubble-my >>>  &:hover{
      color: #bae9a4d7;
    }

.msg-bubble-my >>> svg{
    height: 20px;
    height: 20px    ;
    margin-left: 5px;
    }


/* Add additional styling for input and send button as needed */</style>