<template>
  <div class="hello">
    <Hi></Hi>
    <router-link to="/hi/hi1">hi 一</router-link>|
    <router-link to="/hi/hi2">hi 二</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Hi from "@/components/Hi.vue";

export default {
  name: "Hello",
  components: {
    Hi
  }
};
</script>

<style>
</style>