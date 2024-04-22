<template>
    <div class="chat-container">
        <div class="header">
            <div class="h-l">
                <span @click="openhistorysidebar"><svg style="height: 2em;width: 2em;" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
                                d="M3.17157 4.1716C2 5.34318 2 7.2288 2 11V13C2 16.7713 2 18.6569 3.17157 19.8285C4.34315 21 6.22876 21 10 21H14C14.0843 21 14.9176 21.0001 15 21.0001L15 3.00006C14.9176 3.00005 14.0843 3.00003 14 3.00003H10C6.22876 3.00003 4.34315 3.00003 3.17157 4.1716Z"
                                fill="#128785"></path>
                            <path
                                d="M22 13V11C22 7.22876 22 5.34315 20.8284 4.17157C19.8541 3.19724 17.6359 3.03321 15 3.00559V20.9944C17.6359 20.9668 19.8541 20.8028 20.8284 19.8284C22 18.6569 22 16.7712 22 13Z"
                                fill="#128785"></path>
                        </g>
                    </svg></span>
            </div>
            <div class="h-m">
                <span>
                    <svg style="height: 1.5em;width: 1.5em;" fill="#000000" width="256px" height="256px"
                        viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <title>OpenAI icon</title>
                            <path
                                d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z">
                            </path>
                        </g>
                    </svg>
                </span>
                Chat
                <span @click="exportData"><svg style="height: 1.5em;width: 1.5em;" fill="#000000" viewBox="0 0 256 256"
                        id="Flat" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M208,96V216H48V96Z" opacity="0.2"></path>
                            <path
                                d="M80.34229,63.64551A8,8,0,0,1,80.34375,52.332l42-41.98926a8.00063,8.00063,0,0,1,11.3125,0l42,41.98926a7.99983,7.99983,0,1,1-11.3125,11.31445L136,35.3103V128a8,8,0,0,1-16,0V35.3103L91.65625,63.64648A7.99885,7.99885,0,0,1,80.34229,63.64551ZM200,88H176a8,8,0,0,0,0,16h24V208H56V104H80a8,8,0,0,0,0-16H56a16.01833,16.01833,0,0,0-16,16V208a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V104A16.01833,16.01833,0,0,0,200,88Z">
                            </path>
                        </g>
                    </svg></span>
            </div>
            <div class="h-r">
                <span @click="settings"><svg style="height: 2em;width: 2em;" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g id="style=fill">
                                <g id="setting">
                                    <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10.8946 3.00654C10.2226 1.87704 8.75191 1.45656 7.59248 2.14193L5.86749 3.12906C4.59518 3.85639 4.16378 5.48726 4.8906 6.74522L4.89112 6.74611C5.26606 7.39298 5.20721 7.8062 5.09018 8.00929C4.97308 8.21249 4.64521 8.47001 3.9 8.47001C2.43322 8.47001 1.25 9.66837 1.25 11.12V12.88C1.25 14.3317 2.43322 15.53 3.9 15.53C4.64521 15.53 4.97308 15.7875 5.09018 15.9907C5.20721 16.1938 5.26606 16.607 4.89112 17.2539L4.8906 17.2548C4.16378 18.5128 4.59558 20.1439 5.8679 20.8712L7.59257 21.8581C8.75199 22.5434 10.2226 22.123 10.8946 20.9935L11.0091 20.7958C11.3841 20.1489 11.773 19.9925 12.0087 19.9925C12.2434 19.9925 12.6293 20.1476 12.9993 20.793L13.0009 20.7958L13.1109 20.9858L13.1154 20.9935C13.7874 22.123 15.258 22.5434 16.4174 21.8581L18.1425 20.871C19.4157 20.1431 19.8444 18.5235 19.1212 17.2579L19.1189 17.2539C18.7439 16.607 18.8028 16.1938 18.9198 15.9907C19.0369 15.7875 19.3648 15.53 20.11 15.53C21.5768 15.53 22.76 14.3317 22.76 12.88V11.12C22.76 9.65323 21.5616 8.47001 20.11 8.47001C19.3648 8.47001 19.0369 8.21249 18.9198 8.00929C18.8028 7.8062 18.7439 7.39298 19.1189 6.74611L19.1194 6.74522C19.8463 5.48713 19.4147 3.85604 18.1421 3.12883L16.4175 2.14193C15.2581 1.45656 13.7874 1.877 13.1154 3.00651L13.0009 3.20423C12.6259 3.85115 12.237 4.00751 12.0012 4.00751C11.7666 4.00751 11.3807 3.85247 11.0107 3.20701L11.0091 3.20423L10.8991 3.01421L10.8946 3.00654ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                        fill="#397459"></path>
                                </g>
                            </g>
                        </g>
                    </svg></span>
            </div>

        </div>
        <div class="main-content">
            <div class="main-left" v-if="!historysidebarisopen">
                <Sidebar>
                    <!-- 侧边栏内容 -->
                    <div class="addchat" style="text-align: center;">
                        <button @click="newchat" style="width: 100%;">开启新聊天吧
                        </button>
                    </div>
                    <ul>
                        <li class="sidebar-item" v-for="(item, index) in historylist" :key="historylist.id">
                            <div class="item-container" :class="{ selected: currentid == item.id }">
                                <div class="item-link"
                                    style="width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                    <span @click="openlist(item.id)">
                                        {{ item.abstract }}</span>
                                </div>
                                <div class="sidebar-icons">
                                    <span @click="deleteItem(item.id)">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                stroke-linejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M10 12V17" stroke="#db0000" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M14 12V17" stroke="#db0000" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M4 7H20" stroke="#db0000" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path
                                                    d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                                                    stroke="#db0000" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                                <path
                                                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                                    stroke="#db0000" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Sidebar>
            </div>
            <div class="main-right">
                <dialog-bar v-model:value="this.sendVal" type="danger" title="我是标题" content="我是内容" v-on:cancel="clickCancel()"
                    @danger="clickDanger()" @confirm="clickConfirm()" dangerText="Delete"></dialog-bar>

                <div class="msgs-list" ref="scrollableContent" @scroll="handleScroll">
                    <div v-for="(message, index) in messages" :key="index" class="msg">
                        <div v-if="!(message.role === 'user')" class="msg-else">
                            <div class="avatar">
                                <img :src="this.else_avatar" alt="else">
                            </div>
                            <div class="markdown-body msg-bubble-else"
                                v-html="enhanceCodeBlock(rendermarkdown(message.content))">
                            </div>
                        </div>
                        <div v-if="message.role === 'user'" class="msg-my">
                            <div class="markdown-body msg-bubble-my"
                                v-html="enhanceCodeBlock(rendermarkdown(message.content))">
                            </div>
                            <div class="avatar">
                                <img :src="this.my_avatar" alt="my">
                            </div>
                        </div>
                    </div>
                    <div class="msg-else response" v-if="issse">
                        <div class="avatar">
                            <img :src="this.else_avatar" alt="else">
                        </div>
                        <div class="markdown-body msg-bubble-else">
                            <div class="md" v-html="enhanceCodeBlock(rendermarkdown(this.responsemsg))">

                            </div>

                            <div class="thinking">
                                <span
                                    style="background-image: linear-gradient(to right, orange, purple);-webkit-background-clip: text;color: transparent;">
                                    I am thinking 🦄, please wait a minute💕
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="fixedfoot" v-if="showScrollButton" style="position: fixed; bottom: 15%; right: 50%;">
                        <span @click="tobottom"><svg style="height: 2em;width: 2em;" viewBox="-0.5 0 25 25" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z"
                                        stroke="#469b8a" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path
                                        d="M16 10.99L13.13 14.05C12.9858 14.2058 12.811 14.3298 12.6166 14.4148C12.4221 14.4998 12.2122 14.5437 12 14.5437C11.7878 14.5437 11.5779 14.4998 11.3834 14.4148C11.189 14.3298 11.0142 14.2058 10.87 14.05L8 10.99"
                                        stroke="#469b8a" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </g>
                            </svg></span>
                    </div>
                </div>
                <div class="chat-input">
                    <div class="type">
                        <div class="warp">
                            <textarea rows="1" dir="auto" placeholder="Type Here!" ref="textarea" v-model="newMessage"
                                @input="resizeTextarea"></textarea>
                        </div>
                        <button @click="sendMessage"><span>
                                <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M2.33045 8.38999C0.250452 11.82 9.42048 14.9 9.42048 14.9C9.42048 14.9 12.5005 24.07 15.9305 21.99C19.5705 19.77 23.9305 6.13 21.0505 3.27C18.1705 0.409998 4.55045 4.74999 2.33045 8.38999Z"
                                            stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path d="M15.1999 9.12L9.41992 14.9" stroke="#000000" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </span></button>
                            <setting></setting>
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>

<script>
import { marked } from 'marked';
import hljs from "highlight.js";
import Sidebar from './sidebar.vue';
import setting from './setting.vue';
import dialogBar from './dialog.vue';

import { fetchEventSource } from '@/api/fetcheventsource';



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
    components: {
        'dialog-bar': dialogBar,
    },
    data() {
        return {
            my_avatar: 'https://acat-image.pages.dev/file/4e27ea41320a94ea47f3e.png',
            else_avatar: 'https://acat-image.pages.dev/file/91d6f1b67af3ab9ca93e8.png',
            newMessage: '',
            responsemsg: '',
            historysidebarisopen: false,
            showScrollButton: false,
            controller: null,
            issse: false,
            currentid: '1',
            historysize: 1,
            selectedid: '1',
            sendVal: false,
            messages: [
                {
                    role: "system",
                    content: "I am a chat-bot,nice to meet you!👋"
                }
            ],
            historylist: [
                {
                    id: '1',
                    abstract: "New Coversation..."
                }
            ]
        }
    },

    created() {
    },
    methods: {
        openhistorysidebar() {
            this.historysidebarisopen = !this.historysidebarisopen;
        },

        tobottom() {
            const container = this.$refs.scrollableContent;
            container.scrollTop = container.scrollHeight;
        },

        handleScroll() {
            const container = this.$refs.scrollableContent;
            if (container.scrollHeight - container.scrollTop <= container.clientHeight + 250) {
                this.showScrollButton = false;
            } else {
                this.showScrollButton = true;
            }
        },

        resizeTextarea() {
            this.$refs.textarea.style.height = 'auto';
            this.$refs.textarea.style.height = (this.$refs.textarea.scrollHeight) + 'px';
        },

        sendMessage() {
            if (this.newMessage.trim()) {
                // 发送消息到后端
                // 你需要根据后端的实际情况来发送消息，这里只是一个简单的示例
                if (this.messages.length === 1) {
                    let itr;
                    for (itr in this.historylist) {
                        if (this.historylist[itr].id === this.currentid) {
                            this.historylist[itr].abstract = this.newMessage;
                            localStorage.setItem("historylist", JSON.stringify(this.historylist));
                        }
                    }
                }
                this.messages.push({
                    role: "user",
                    content: this.newMessage
                });
                this.issse = true;
                // 发送消息到后端
                const formData = new FormData();
                formData.append('msgs', JSON.stringify(this.messages));

                this.controller = new AbortController();
                fetchEventSource('http://127.0.0.1:8000/api/chat', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Authorization': localStorage.getItem("token")
                    },
                    signal: this.controller.signal,
                    onopen: () => {
                    },
                    onclose: () => {
                        this.messages.push({
                            role: "assistant",
                            content: this.responsemsg
                        });
                        localStorage.setItem(this.currentid, JSON.stringify(this.messages));
                        this.issse = false;
                        this.responsemsg = '';
                        
                        

                    },
                    onmessage: (event) => {
                        this.responsemsg += event;
                    },
                    error: (e) => {
                        console.log(e);
                        this.responsemsg += 'connect falied!';
                        this.messages.push({
                            role: "assistant",
                            content: " "
                        })
                    }
                });

                this.newMessage = '';
                this.$refs.textarea.style.height = 'auto';
            }
        },
        newchat() {
            this.historysize = this.historysize + 1;
            this.currentid = (this.historysize).toString();
            console.log(this.currentid);
            this.historylist.push({
                id: this.currentid,
                abstract: "New Coversation..."
            })
            localStorage.setItem("historylist", JSON.stringify(this.historylist));
            localStorage.setItem(this.currentid, "");
            this.messages = [
                {
                    role: "system",
                    content: "I am a chat-bot,nice to meet you!👋"
                }
            ]
        },

        openlist(id) {
            this.currentid = id;
            let msgs = localStorage.getItem(id);
            if (msgs === "") {
                this.messages = [
                    {
                        role: "system",
                        content: "I am a chat-bot,nice to meet you!👋"
                    }
                ]
            } else {
                this.messages = JSON.parse(localStorage.getItem(id));
            }
        },
        deleteItem(id) {
            localStorage.removeItem(id);
            this.historylist = this.historylist.filter(item => item.id != id);
            localStorage.setItem("historylist", JSON.stringify(this.historylist));
            if (this.currentid === id) {
                this.currentid = (this.historylist[this.historylist.length - 1]).id;
                this.messages = JSON.parse(localStorage.getItem(this.currentid));
            }
        },
        rendermarkdown(rawtext) {
            return marked(rawtext);
        },

        clickCancel() {
            console.log('点击了取消');
        },
        clickDanger() {
            console.log('这里是danger回调')
        },
        clickConfirm() {
            console.log('点击了confirm');
        },

        settings() {
            this.sendVal = true;
        },

        exportData() {
            // 导出数据为 JSON 文件
            const blob = new Blob([JSON.stringify(this.messages, null, 2)], {
                type: 'application/json'
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'data.json';
            a.click();
        },

        //增强代码块
        enhanceCodeBlock(content) {
            // console.log(content)
            //在pre块中增加一个元素用于显示
            let enhance = content.replace(/<pre><code/g, '<pre><div class="enhance"><div class="lang">CODE</div><div class="copyCode">Copy<span class="el-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"></path></svg></span></div></div><code')
            // console.log(enhance)
            return enhance
        },
    },
    mounted() {
        let historylist = localStorage.getItem("historylist")
        if (historylist === null) {
            console.log("init histry list");
            localStorage.setItem("historylist", JSON.stringify(this.historylist));
            localStorage.setItem(this.currentid, JSON.stringify(this.messages));
        } else {
            this.historylist = JSON.parse(historylist);
            this.historysize = Number((this.historylist[(this.historylist.length) - 1]).id);
            console.log(this.historysize);
            this.currentid = (this.historylist[(this.historylist.length) - 1]).id;
            console.log(this.currentid);
            if (localStorage.getItem(this.currentid) === "") {

            } else {
                this.messages = JSON.parse(localStorage.getItem(this.currentid));
            }
            if (this.messages === null) {
                this.messages = [
                    {
                        role: "system",
                        content: "I am a chat-bot,nice to meet you!👋"
                    }
                ]
            }
        }
    }
}
</script>
<style scoped>
.chat-container {
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 auto;
    border: 2px solid #d5f6ef;
    border-radius: 5px;
    overflow: hidden;
}

.header {
    display: flex;
    height: 40px;
    justify-content: space-between;
    background-color: rgba(67, 181, 137, 0.6);
    backdrop-filter: blur(50%);
    color: #393939;
    padding: 5px;
    text-align: center;
    align-items: center;
}

.main-content {
    display: flex;
    max-width: 100%;
    flex-direction: row;
    flex-grow: 1;
    overflow: hidden;
    /* 关键：防止侧边栏消失时产生空隙 */

}

.main-left {
    background-color: #cae5e4;
}

.main-right {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.msgs-list {
    margin: 20px, 20px;
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

    object-fit: cover;
}

.msg-bubble-else {
    margin-left: 5px;
    margin-top: 10px;
    margin-right: auto;
    min-height: 15px;
    padding: 10px;
    border-radius: 1px 8px 8px 10px;
    background-color: #F8DFDF;
    max-width: 65%;
    overflow-wrap: break-word;
    /* Adjust as needed */
}

.msg-my .msg-bubble-my {
    margin-left: auto;
    margin-top: 10px;
    margin-right: 5px;
    min-height: 15px;
    padding: 10px;
    border-radius: 8px 1px 10px 8px;
    max-width: 65%;
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
    width: calc(100% - 50px);
    /* 让输入框和按钮在同一行，留出按钮的宽度 */
    align-items: center;
}

.chat-input textarea {
    border: 0px;
    padding: 0px;
    max-height: 10vh;
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

button {
    background-color: #44c884;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px;
    cursor: pointer;
}

.msg-bubble-my>>>pre .enhance {
    display: flex;
    color: #fff;
    padding: 0px 10px;
    border-radius: 5px 5px 0 0;
    font-size: 16px;
    background: #abacc0de;
    justify-content: space-between;
    align-items: center;
}

.msg-bubble-my>>>.copyCode {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
}

.msg-bubble-my>>>&:hover {
    color: #bae9a4d7;
}

.msg-bubble-my>>>svg {
    height: 20px;
    height: 20px;
    margin-left: 5px;
    vertical-align: middle;
    /* 将SVG图标垂直居中对齐 */
}

.msg-bubble-else>>>pre .enhance {
    display: flex;
    color: #fff;
    padding: 0px 10px;
    border-radius: 5px 5px 0 0;
    font-size: 16px;
    background: #abacc0de;
    justify-content: space-between;
    align-items: center;
}

.msg-bubble-else>>>.copyCode {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
}

.msg-bubble-else>>>&:hover {
    color: #bae9a4d7;
}

.msg-bubble-else>>>svg {
    height: 20px;
    height: 20px;
    margin-left: 5px;
    vertical-align: middle;
    /* 将SVG图标垂直居中对齐 */
}

.sidebar-content {
    padding: 10px;
}

.sidebar-content ul {
    list-style: none;
    padding: 0;
}

.sidebar-content ul li {
    margin-bottom: 10px;
}

.sidebar-content ul li a {
    text-decoration: none;
    color: #333;
}

.item-container {
    display: flex;
    padding: 4px;
    flex-direction: row;
    justify-content: space-between;
    height: 30px;
    align-content: center;
    border: solid 1.5px #e5f9f1;
    border-radius: 5px;
}

.selected {
    border: solid 2.5px #54c983;
}

.item-link {
    flex-grow: 3;
    align-content: center;
}

.sidebar-icons {
    align-self: center;
}


svg {
    height: 1.25em;
    width: 1.25em;
    vertical-align: middle;
    /* 将SVG图标垂直居中对齐 */
}



/* Add additional styling for input and send button as needed */
</style>