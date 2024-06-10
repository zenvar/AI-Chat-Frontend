<template>
    <div class="container">
        <div class="login-form">
            <img src="https://acat-image.pages.dev/file/a244c859449551230b3a2.png" alt="logo">
            <h2>Registry</h2>
            <input v-model="form.account" type="text" name="username" placeholder="用户名" />
            <input v-model="form.password" type="password" name="password" placeholder="密码" />
            <button @click="doregistry" >Registry</button>   
            <span><a href="/login"style="color:rgb(255,0,0);">已有账号？返回登录</a>
                <span><svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14" stroke="#448943" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span>
            </span>       
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("https://i0.wp.com/fmonk.quasigentsia.com/wp-content/uploads/2020/07/Absolution_Gap-07.png") fixed no-repeat;
    background-size: cover;
}

.login-form {
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 40px;
    text-align: center;
    position: relative;
    z-index: 100;
    /* other styles */
	background: rgb(255 255 255 / 45%);
	backdrop-filter: blur(10px);
    border-radius: 18px;
    overflow: hidden;
    /* 隐藏多余的模糊效果*/
}

.login-form h2 {
    font-size: 18px;
    font-weight: 400;
    color: #3d5245;
}

.login-form input,
.login-form button {
    margin: 6px 0;
    height: 36px;
    border: none;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    padding: 0 14px;
    color: #3d5245;
}

button:hover{
    background-color: rgba(143, 211, 190, 0.3);
}

svg {
height: 1.25em;
width: 1.25em;
vertical-align: middle; /* 将SVG图标垂直居中对齐 */
}
</style>

<script>
import { registry } from '@/api/sendmsg';
export default {
    data() {
        return {
            form: {
                account: '',
                password: '',
            }
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        doregistry(){
            registry(JSON.stringify(this.form)).then(response=>{
               console.log(response.data.message)
               this.$router.push({ path: '/login' }); // 跳转到指定路径
          }).catch(e=>{
              console.log(e)
          })
        }
    },

}
</script>