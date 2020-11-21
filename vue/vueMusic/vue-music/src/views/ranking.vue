<template>
  <div class="ranklist">
    <ul>
      <li class="item" v-for="item in list" :key="item.id" @click="toList(item.id)">
        <div class="img">
          <img :src="item.coverImgUrl" alt />
        </div>
        <ul class="songlist" v-if="item.tracks.length>0">
          <li class="song" v-for="(item1,index) in item.tracks" :key="index">
            <span class="index">{{index+1}}</span>
            <span>{{item1.first}}-{{item1.second}}</span>
          </li>
        </ul>
        <ul class="songlist" v-else>
          <div class="title">{{item.name}}</div>
          <div class="say">{{item.updateFrequency}}</div>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      list: [] //榜单摘要
    };
  },
  created() {
    this.getTopList();
  },
  methods: {
    // 获取榜单摘要
    getTopList() {
      api.TopList().then(res => {
        this.list = res.data.list;
        console.log(this.list);
      });
    },
    toList(id) {
      this.$router.push({
        path: "/rankSong",
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
.ranklist {
  margin: 10px;
  overflow: hidden;
}

.item {
  height: 100px;
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.img {
  width: 90px;
  height: 90px;
  border-radius: 10px;
  overflow: hidden;
  margin-left: 5px;
}

.img img {
  width: 100%;
}

.songlist {
  flex: 1;
  margin: 10px;
  color: hsla(0, 0%, 100%, 0.6);
  overflow: hidden;
  font-size: 14px;
}

.song {
  line-height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.index {
  margin-right: 4px;
}

.title {
  font-size: 20px;
  // line-height: 26 px;
  margin-bottom: 10px;
  color: hsla(0, 0%, 100%, 0.9);
}

.say {
  font-size: 14px;
  color: hsla(0, 0%, 100%, 0.7);
}
</style>