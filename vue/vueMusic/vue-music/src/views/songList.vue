<template>
  <div>
    <div class="title">
      <i class="iconfont back" @click="back">&#xe61f;</i>
      <h1 class="titleName">{{list.name}}</h1>
    </div>
    <div class="bg-img" :style="`background-image:url(${list.coverImgUrl})`">
      <div class="filter"></div>
      <div class="playWrapper">
        <i class="iconfont play">&#xe679;</i>
        <span>播放全部</span>
      </div>
    </div>
    <div class="list">
      <div class="list-item" v-for="(item,index) in songList" :key="index">
        <div class="info" @click="play">
          <div class="songName">{{item.name}}</div>
          <div class="singer">{{item.ar[0].name}} — {{item.al.name}}</div>
        </div>
        <div class="iconfont more">&#xe60a;</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      list: [],
      songList: []
    };
  },
  created() {
    this.getSongList();
  },
  methods: {

    // 获取推荐歌单歌曲列表
    getSongList() {
      let id = this.$route.query.id;
      api.ListDetail(id).then(res => {
        this.list = res.data.playlist;
        this.songList = res.data.playlist.tracks;
        //console.log(res);
      });
    },
    back() {
      this.$router.go(-1)
    },
    play(){
      
    }
  }
};
</script>

<style lang="stylus" scoped>
.title {
  position: fixed;
  padding: 5px 10px;
  height: 44px;
  z-index: 100;
  display: flex;
  line-height: 44px;
  color: #ffffff;
}

.back {
  margin-right: 5px;
  font-size: 18px;
}

.titleName {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0px 6px;
  font-size: 18px;
  width: 90%;
}

.bg-img {
  padding-top: 70%;
  z-index: 0;
  position: relative;
  background-size: cover;
}

.filter {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(7, 17, 27, 0.4);
}

.playWrapper {
  height: 32px;
  position: absolute;
  left: 130px;
  bottom: 40px;
  box-sizing: border-box;
  width: 120px;
  padding: 6px 0;
  text-align: center;
  border: 1px solid #ea2448;
  color: #ea2448;
  border-radius: 20px;
  font-size: 14px;
}

.play {
  margin-right: 4px;
}

.list {
  padding: 15px 25px;
  position: relative;
}

.list-item {
  position: relative;
  height: 60px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #fff;
}

.info {
  flex: 1;
  line-height: 20px;
  s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.more {
  width: 50px;
  height: 100%;
  box-sizing: border-box;
  padding-top: 12px;
  text-align: right;
}

.singer {
  margin-top: 4px;
  color: hsla(0, 0%, 100%, 0.5);
}
</style>