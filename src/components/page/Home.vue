<template>
    <div class="whole">
        <div class="loading" id="loading">
            <div class="font1" id="font1">B</div>
            <div class="font2" id="font2">o</div>
            <div class="font3" id="font3">o</div>
            <div class="font4" id="font4">k</div>
            <div class="font5" id="font5">s</div>
        </div>
        <div id="mod1">
            <h1><router-link to="/information">Books</router-link></h1> 
        </div>
        <ul id="mod2">
            <li v-for="(item,index) in booksList" :key="index">
                <img width="70%" height="70%" :src="item.img" :alt="item.name">
                <p style="width:30%;height:70%;overflow:auto;text-overflow:ellipsis;">简介：{{ item.introduce }}</p>
                <div class="bookInf">
                    <p>书名：{{ item.name }}</p>
                    <p>作者：{{ item.author }}</p>
                    <p>价格：{{ item.price }}</p>
                </div>
                <div class="btn">
                    <button @click="$toast.success({message:'购买成功，感谢您的支持',duration:1000})">购买</button>
                </div>
            </li>
        </ul>
    </div>    
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            booksList: [
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                },
                {
                    name: '鬼吹灯',
                    author: '天下霸唱',
                    price: 168,
                    introduce: '鬼吹灯是一个系列形式的文字冒险故事，以一本家传的秘书残卷为引。小说中作者首创历史上四大盗墓门派——摸金、卸岭、发丘、搬山，其中摸金是技术含量最高，规矩最多的门派。“人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。',
                    img: '../../../static/books/guichuideng.jpg'
                }
            ]
        }
    },
    mounted(){
        let mod1 = document.getElementById('mod1');
        let mod2 = document.getElementById('mod2');
        let font1 = document.getElementById('font1');
        let font2 = document.getElementById('font2');
        let font3 = document.getElementById('font3');
        let font4 = document.getElementById('font4');
        let font5 = document.getElementById('font5');
        mod1.style.display = 'none';
        mod2.style.display = 'none';
        font2.style.animationPlayState = font3.style.animationPlayState = font4.style.animationPlayState = font5.style.animationPlayState = 'paused';
        setTimeout(() => {
            font2.style.animationPlayState = 'running';
            font1.style.display = 'none';
            setTimeout(() => {
                font3.style.animationPlayState = 'running';
                font2.style.display = 'none';
                setTimeout(() => {
                    font4.style.animationPlayState = 'running';
                    font3.style.display = 'none';
                    setTimeout(() => {
                        font5.style.animationPlayState = 'running';
                        font4.style.display = 'none';
                        setTimeout(() => {
                            // font5.style.display = 'none';
                            loading.style.display = 'none';
                            mod1.style.display = 'inline';
                            mod2.style.display = 'flex';
                        }, 1100);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }
}
</script>

<style lang="scss" scoped>
    .whole{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template: 1fr 20fr / 1fr;
        background: gainsboro;
        .loading{
            height: 555px;
            display: flex;
            justify-content: center;
            align-items: center;
            .font1{
                animation: font1 1s linear;
                animation-fill-mode: forwards;
                opacity: 0;
            }
            .font2{
                animation: font2 1s linear;
                animation-fill-mode: forwards;
                opacity: 0;
            }
            .font3{
                animation: font3 1s linear;
                animation-fill-mode: forwards;
                opacity: 0;
            }
            .font4{
                animation: font4 1s linear;
                animation-fill-mode: forwards;
                opacity: 0;
            }
            .font5{
                animation: font5 1s linear;
                animation-fill-mode: forwards;
                opacity: 0;
            }
            @keyframes font1
            {
                1% {font-size:50px;opacity: 1;}
                100% {font-size:350px;opacity: 0;transform: rotate(360deg)}
            }
            @keyframes font2
            {
                1% {font-size:50px;opacity: 1;}
                100% {font-size:350px;opacity: 0;transform: rotate(-360deg)}
            }
            @keyframes font3
            {
                1% {font-size:50px;opacity: 1;}
                100% {font-size:350px;opacity: 0;transform: rotate(360deg)}
            }
            @keyframes font4
            {
                1% {font-size:50px;opacity: 1;}
                100% {font-size:350px;opacity: 0;transform: rotate(-360deg)}
            }
            @keyframes font5
            {
                1% {font-size:50px;opacity: 1;}
                100% {font-size:350px;opacity: 0;transform: rotate(360deg)}
            }
        }
        ul{
            animation: ul 1s linear;
            animation-fill-mode: forwards;
            opacity: 0;
            overflow: auto;
            width: 100%;
            // height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li{
                width: 45%;
                height: 200px;
                border: 1px solid cornsilk;
                margin: 5px;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .bookInf{
                    width:70%;
                    display:flex;
                    flex-direction:column;
                    text-align: left;
                    p{
                        width:80%;
                        overflow:auto;
                        white-space:nowrap;
                    }
                }
                .btn{
                    width:30%;
                    height:30%;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    button{
                        width:40px;
                        height:40px;
                        border-radius:50%;
                        border:1px solid white;
                    }
                    button:active{
                        background: gray;
                    }
                }
            }
            @keyframes ul
            {
                100% {opacity: 1}
            }
        }
    }
</style>
