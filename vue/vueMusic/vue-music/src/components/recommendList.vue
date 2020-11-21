<template>
  <div class="recommendList">
    <h1 class="title">推荐歌单</h1>
    <div class="wrapper">
      <div class="wrapper_box" v-for="(item,index) in list" :key="index" @click="toList(item.id)">
        <div class="img_wrapper">
          <img :src="item.picUrl" >
        </div>
        <div class="desc">{{item.name}}</div>
      </div>
    </div>
  </div>
</template> 

<script>
import api from "@/api";
export default {
  data() {
    return {
      list:[]
    };
  },

  created() {
    this.getRecommendList();
  },
  methods: {
    getRecommendList() {
      // 获取推荐歌单
      api.RecommendList().then(res => {
        this.list = res.data.result
        // console.log(this.list);
        this.$emit('hasData', this.list)
      });
    },

    toList(id) {
      this.$emit('changeList',id)
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl';

.title {
  height: px2rem(100px);
  line-height: px2rem(100px);
  text-align: center;
  font-weight: bold;
}

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.wrapper_box{
  position: relative;
  width: 32%;
}
.img_wrapper{
  position: relative;
    // height: 0px;
    padding-bottom: 100%;
}
.img_wrapper img{
  position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 3px;
}
.desc{
  font-size:px2rem(28px);
  height:px2rem(100px);
  line-height:px2rem(32px);
  margin-top:px2rem(4px)
  overflow: hidden;
  padding: px2rem(4px) px2rem(6px)
}
</style>
