<template>
  <div id="app">
    {{this.$store.getters.getCount}}
    {{this.$store.state.count}}
    <button @click="add">+1</button>
    <button  @click="reduce">-2</button>
  </div>
</template>

<script>
// import store from '@/store/index'
export default {
  methods:{
    add(){
      this.$store.commit('addCount',1)
    },
    reduce() {
      this.$store.dispatch('getReduceCount',2)
    }
  }
}
</script>

<style>

</style>