<template>
    <scroll class="page" ref="test" :data="list">
      <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in Banner" :key="index">
            <img class="banner" :src="item.imageUrl" />
          </van-swipe-item>
        </van-swipe>
        <recommendList @changeList="changeList" @hasData="hasData"></recommendList>
      </div>
    </scroll>
</template>

<script>
import recommendList from "@/components/recommendList";
import scroll from "@/components/scroll";
import api from "@/api";
export default {
  components: {
    recommendList,
    scroll
  },
  data() {
    return {
      Banner: [],
      list: []
    };
  },
  created() {
    this.getbanner();
  },
  methods: {
    hasData(list) {
      this.list = list
    },
    getbanner() {
      api.Banner().then(res => {
        // 获取轮播图
        this.Banner = res.data.banners;
        //console.log(res.data.banners)
      });
    },
    changeList(id) {
      this.$router.push({
        path: "/songList",
        query: {
          //路由传参时push和query搭配使用 ，作用时传递参数
          id
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl';

// .home {
//   height: 100%;
// }

.page {
  height: calc(100vh - 5.5rem);
  overflow hidden
}

.my-swipe .van-swipe-item {
  height: px2rem(350px);
}

.banner {
  height: 100%;
  width: 100%;
}
</style>
