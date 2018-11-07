<template>
    <div>
      <van-button type="default" @click="clickDialog">default-dialog</van-button>
      <van-button :loading="clickLoading" @click="clickLoading=true" type="primary">primary-loading</van-button>
      <van-button type="danger" @click="clickToast">danger-toast</van-button>
      <van-button type="warning" @click="aaa">哈哈</van-button>
    </div>
</template>

<script>
export default {
  data(){
    return{
      clickLoading: false
    }
  },
  methods:{
    clickDialog(){
      this.$dialog.alert({
        title: 'Hello',
        message: 'Hello Vanter'
      }).then(() => {
        // on close
      });
    },
    clickToast(){
      this.$toast({
        type: 'loading',
        message: 'Sorry...',
        mask: true
      });
    },
    aaa(){
      this.$toast('哈哈');
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>

