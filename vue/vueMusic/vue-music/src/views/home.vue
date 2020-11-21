<template>
  <div class="container">
    <Header>
      <i class="iconfont" slot="left-icon">&#xe96d;</i>
      <span slot="content">我的音乐</span>
      <i class="iconfont" slot="right-icon">&#xe67a;</i>
    </Header>
    <tab></tab>

    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- 播放页面 -->
    <play></play>

    <!-- menu -->
    <sideBar></sideBar>
  </div>
</template>

<script>
import Header from "@/components/header";
import sideBar from "@/components/sideBar";
import tab from "@/components/tab";
import play from "@/components/play";
export default {
  components: {
    Header,
    sideBar,
    tab,
    play
  }
};
</script>

<style>
</style>