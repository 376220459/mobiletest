<template>
    <div class="whole" id="whole">
        <div class="animation" id="animation">
            <img class="img" id="img" src="../../../static/back/login.jpg" alt="">
            <!-- <h1>你好，基佬</h1> -->
        </div>
        <h1 style="font-family:Comic Sans MS">Books</h1>
        <div class="login-form">
            <form action="">
                <div class="div"><div>账号：</div><input v-model="user" type="text"></div>
                <div class="div"><div>密码：</div><input v-model="password" type="password"></div>
            </form>
            <button @click="toLogin">登陆</button>
            <button @click="register">注册</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            user: '',
            password: ''
        }
    },
    methods: {
        toLogin(){
            this.$toast.fail('请先注册账号');
            // this.$router.push({
            //     path: '/home'
            // })
        },
        register(){
            this.user = 'admin',
            this.password = 'admin',
            this.$toast.loading({
                message: '注册成功,正在登陆...',
                mask: true,
                duration: 2000
            })
            setTimeout(() => {
                this.$router.push({
                    path: '/home'
                })
            }, 2000);
        }
    },
    mounted() {
        setTimeout(() => {
            let animation = document.getElementById('animation');
            animation.style.display = 'none';
        }, 2000);
    },
}
</script>

<style lang="scss" scoped>
    .whole{
        // background: url(/static/back/login.jpg);
        height: 100%;
        overflow: hidden;
        background: url(../../../static/back/login.jpg);
        background-size: cover;
        .animation{
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .img{
                animation: img 2s linear;
                animation-timing-function: linear;
                animation-fill-mode: forwards;
                width: 100px;
            }
            @keyframes img
            {
                0% {width: 50%;opacity: 1;}
                100% {transform: scale(10);opacity: 0;}
            }
        }
        .login-form{
            font-size: 24px;
            .div:nth-child(1){
                margin: 50px 0 20px 0;
            }
            input{
                // background: gainsboro;
                border-radius: 10px;
            }
            button{
                border: none;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin-top: 120px;
                background: white;
            }
            button:active{
                background: gray
            }
        }
    }
</style>



