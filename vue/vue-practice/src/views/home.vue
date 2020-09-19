<template>
  <div class="page">
      <div class="content"></div>
      <div class="button" @click="getIn"></div>
      <div class="time"></div>
      
  </div>
</template>

<script>
export default {
    methods:{
        getIn(){
            this.$router.push({path:'/item'})
        }
    }
}
</script>

<style scoped>
*{
    font-size: 23.437px;
}
.page{
    background-image: url(../images/1-1.jpg) ;
    background-size: 100% 100%;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
}
.content {
    background-image: url(../images/1-2.png);
    position: absolute;
    height: 272px;
    width: 308px;
    top: 15%;
    left: 10%;
    background-size:100% 100%;
}
.time {
    background-image: url(../images/WechatIMG2.png);
    position: absolute;
    width: 76px;
    height: 172px;
    top: -28px;
    left: 70%;
    background-size:100% 100%;
}
.button {
    background-image: url(../images/1-4.png);
    background-size:100% 100%;
    position: absolute;
    width: 100px;
    height: 50px;
    top: 60%;
    left: 50%;
    transform: translate(-50%);
    
}
</style>