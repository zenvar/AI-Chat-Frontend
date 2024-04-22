<template>
    <div :class="{ 'sidebar-open': !isOpen, 'sidebar-closed': isOpen }">
        <div class="sidebar-header" style="text-align: center;">
            <img src="https://acat-image.pages.dev/file/b8f7375e5d82498d29de7.png" alt="history">
            <h2>Chat History
            </h2>
        </div>
        <div class="sidebar-content">
            <slot>
                <!-- 侧边栏内容 -->
            <ul>
                <li class="sidebar-item" v-for="(item, index) in sidebarItems" :key="index">
                    <div class="item-container">
                        <div class="item-link">
                            <router-link :to="item.route" class="sidebar-link">
                                {{ item.name }}
                            </router-link>
                        </div>
                        <div class="sidebar-icons">
                            <span @click="editItem(index)">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#27a078" fill-rule="evenodd" d="M15.747 2.97a.864.864 0 011.177 1.265l-7.904 7.37-1.516.194.653-1.785 7.59-7.044zm2.639-1.366a2.864 2.864 0 00-4-.1L6.62 8.71a1 1 0 00-.26.39l-1.3 3.556a1 1 0 001.067 1.335l3.467-.445a1 1 0 00.555-.26l8.139-7.59a2.864 2.864 0 00.098-4.093zM3.1 3.007c0-.001 0-.003.002-.005A.013.013 0 013.106 3H8a1 1 0 100-2H3.108a2.009 2.009 0 00-2 2.19C1.256 4.814 1.5 7.848 1.5 10c0 2.153-.245 5.187-.391 6.81A2.009 2.009 0 003.108 19H17c1.103 0 2-.892 2-1.999V12a1 1 0 10-2 0v5H3.106l-.003-.002a.012.012 0 01-.002-.005v-.004c.146-1.62.399-4.735.399-6.989 0-2.254-.253-5.37-.4-6.99v-.003zM17 17c-.001 0 0 0 0 0zm0 0z"></path> </g></svg>
                            </span>
                            <span @click="deleteItem(index)">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#db0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#db0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#db0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#db0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#db0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSidebarOpen: false,
            sidebarItems: [
                { name: 'Home', route: '/' },
                { name: 'About', route: '/about' },
                { name: 'Contact', route: '/contact' }
            ]
        };
    },

    props: {
        isOpen: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        closeSidebar() {
            this.$emit('toggleSidebar');
        }
    }
};
</script>

<style scoped>
.sidebar {
    width: 250px;
    height: 100%;
    position: fixed;
    top: 0;
    left: -250px;
    transition: left 0.3s ease;
}

.sidebar-open {
    width: 250px;
    height: 100%;
    position: relative;
    top: 0;
    transition: left 0.3s ease;
    left: 0;
}

.sidebar-closed {
    width: 250px;
    height: 100%;
    position: relative;
    top: 0;
    transition: left 0.3s ease;
    left: -250px;
}

.sidebar-header {
    padding: 10px;
}

.sidebar-content {
    padding: 10px;
    max-height: 60%;
    overflow-y: scroll;
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
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    height: 40px;
    border: solid 2px #e6ebe9;
    border-radius: 5px;
}

.item-link {
    flex-grow: 3;
    align-content: center;
}

.sidebar-icons {
    flex-grow: 1;
    align-self: center;
}

svg {
height: 1.25em;
width: 1.25em;
vertical-align: middle; /* 将SVG图标垂直居中对齐 */
}

img {
    width: 55%;
    align-self: center;
}

</style>