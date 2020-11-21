<template>
  <div>
    <ul>
      <li class="list-group-item" v-for="(item,index) in list" :key="index" @click="toList(item.id,item.picUrl)">
        <van-image round :src="item.picUrl" lazy-load class="avatar" />
        <span class="name">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import api from "@/api";
export default {
  data() {
    return {
      list: [] // 歌手列表
    };
  },
  created() {
    this.getSingerList();
  },
  methods: {
    getSingerList() {
      api.SingerList().then(res => {
        this.list = res.data.artists;
        //  console.log(this.list);
      });
    },
    toList(id,picUrl) {
       this.$router.push({
        path: "/singerList",
        query: {
          //路由传参时push和query搭配使用 ，作用时传递参数
          id,picUrl
        }
      });
    }
  }
};
</script>

<style>
.list-group-item {
  display: flex;
  align-items: center;
  padding: 20px 0 0 20px;
}
.avatar {
  width: 50px;
  height: 50px;
}
.name {
  margin-left: 20px;
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 14px;
}
</style>