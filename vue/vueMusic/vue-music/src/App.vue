<template>
  <div class="header">
    <Header>
      <i class="iconfont" slot="left-icon">&#xe96d;</i>
      <span slot="content">我的音乐</span>
      <i class="iconfont" slot="right-icon">&#xe67a;</i>
    </Header>
    <tab></tab>

    <keep-alive>
      <router-view/>
    </keep-alive>
    <!-- 播放页面 -->
    <play></play>

    <!-- menu -->
    <sideBar></sideBar>
  </div>
</template>

<script>
import Header from '@/components/header'
import sideBar from '@/components/sideBar'
import tab from '@/components/tab'
import play from '@/components/play'

export default {
    components:{
      Header,
      sideBar,
      tab,
      play
    }
}
</script>

<style lang="stylus">
@font-face {
  font-family: 'iconfont';  /* project id 2052915 */
  src: url('//at.alicdn.com/t/font_2052915_af7qy3tzvo.eot');
  src: url('//at.alicdn.com/t/font_2052915_af7qy3tzvo.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2052915_af7qy3tzvo.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2052915_af7qy3tzvo.woff') format('woff'),
  url('//at.alicdn.com/t/font_2052915_af7qy3tzvo.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2052915_af7qy3tzvo.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
    html,
body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(8, 5, 58, 0.9);
  color: #fff;
}
</style>  