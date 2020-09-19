<template>
  <div class="page">
    <header class="title">
      <span class="itemNum">题目{{itemNum}}</span>
    </header>
    <div class="content">
      <header class="itemTitle">{{itemDetail[itemNum-1].topic_name}}</header>
      <ul class="item">
        <li class="choose" v-for="(item,index) in itemDetail[itemNum-1].topic_answer" :key="index">{{item.answer_name}}</li>
      </ul>
    </div>
    <div class="button"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: mapState([
    "itemNum", //第几题
    "itemDetail" //题目详情
  ])
};
</script>

<style scoped>
.page {
  background-image: url(../images/1-1.jpg);
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  z-index: -1;
}
.title {
  background-image: url(../images/WechatIMG2.png);
  position: absolute;
  width: 76px;
  height: 172px;
  top: -28px;
  left: 70%;
  background-size: 100% 100%;
  z-index: 10;
}
.itemNum {
  width: 60px;
  height: 24px;
  color: #000000;
  z-index: 99999;
  position: absolute;
  top: 130px;
  left: 20px;
  font-size: 14px;
}
.content {
  background-image: url(../images/2-1.png);
  position: absolute;
  height: 272px;
  width: 308px;
  top: 15%;
  left: 10%;
  background-size: 100% 100%;
  position: relative;
}
.item {
  width: 200px;
  z-index: 9999;
  position: absolute;
  top: 50px;
  left: 60px;
  color: #ffffff;
  list-style: none;
}
.itemTitle{
    width: 200px;
    position: absolute;
    color: #ffffff;
    left: 60px;
    top: 30px;
}
.choose {
  margin-top: 10px;
}
.button {
  background-image: url(../images/2-2.png);
  background-size: 100% 100%;
  position: absolute;
  width: 100px;
  height: 50px;
  top: 60%;
  left: 50%;
  transform: translate(-50%);
}
</style>