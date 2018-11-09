<template>
    <div class="whole">
        <div class="img">
            <van-uploader :after-read="upload">
                <div class="img-head"><img :src="img" alt="头像"></div>
                <!-- <van-icon size="20px" name="photograph" /> -->
            </van-uploader>
        </div>
        <div class="inf">
            <van-dialog show-cancel-button v-model="show" :before-close="beforeClose"><van-field v-model="something" :label="itemName+'：'"></van-field></van-dialog>
            <strong>昵称</strong><p id="name" @click="edit">{{ name }}</p>
            <strong>性别</strong><p id="sex" @click="edit">{{ sex }}</p>
            <strong>年龄</strong><p id="age" @click="edit">{{ age }}</p>
            <strong>个性签名</strong><p id="words" @click="edit" style="white-space:pre-wrap;height:100px">{{ words }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Information',
    data(){
        return{
            itemName: '',
            something: '',
            show: false,
            img: '../../../static/person/head.jpg',
            name: '下雨天的纸飞机',
            sex: '男',
            age: '21',
            words: '宇宙之大，万物皆渺小。\n渺小的举动，伟大的效应。'
        }
    },
    methods: {
        // judge(){
        //     if(this.sex != '男' && this.sex != '女'){
        //         this.sex = '男';
        //     }
        //     if(!Number.isInteger(this.age)){
        //         this.age = '老男人';
        //     }
        // },
        upload(file){
            console.log(file);
            this.img = file.content;
        },
        edit(e){
            // console.log(e.target.id);
            this.itemName = e.target.id;
            this.show = true;
        },
        beforeClose(action,done){
            if(action == 'confirm'){
                if(this.something.trim()==''){
                    this.$toast.fail({
                        message: '不能为空',
                        duration: 1000
                    });
                    done();
                }else{
                    setTimeout(()=>{
                        done();
                        document.getElementById(this.itemName).innerHTML = this.something;
                        this.itemName = this.something = '';
                        this.$toast.success({
                            message: '修改成功',
                            duration: 1000
                        })
                    }, 1000);
                }
            }else{
                done();
                this.itemName = this.something = '';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .whole{
        height: 100%;
        display: grid;
        grid-template: 1fr 2fr / 1fr;
        background: gray;
        .img{
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid black;
            .img-head{
                width: 170px;
                height: 170px;
                border: 1px solid black;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                img{
                    width: 110%;
                }
            }
        }
        .inf{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 20px;
            p{
                // width: 90%;
                width: 300px;
                margin: 10px 0;
                white-space: nowrap;
                overflow: auto;
            }
            p:active{
                color: saddlebrown;
            }
        }
    }
</style>
