<template>
    <div class="whole">
        <div class="animation" id="animation">
            <img class="img" id="img" src="../../../static/back/login.jpg" alt="">
            <!-- <h1>你好，基佬</h1> -->
        </div>
        <h1 style="font-family:Comic Sans MS">Books</h1>
        <div class="login-form">
            <form action="">
                <div class="div"><div>账号：</div><input type="text"></div>
                <div class="div"><div>密码：</div><input type="password"></div>
            </form>
            <button @click="toLogin">登陆</button>
            <button @click="$toast.success('注册成功')">注册</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    methods: {
        toLogin(){
            this.$router.push({
                path: '/home'
            })
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



