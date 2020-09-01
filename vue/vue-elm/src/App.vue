<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import VHeader from '@/components/v-header/v-header.vue';
import { getSeller } from '@/api'
import qs from 'query-string'

export default {
  data() {
    return {
      seller: {
      }
    }
  },
  created() {
    this._getSeller();
  },
  methods:{
    _getSeller(){
      getSeller({
        id: this.seller.id
      }).then((seller)=> {
        console.log('sdas');
      })
    }
  },
  components: {
    VHeader,
  },
};
</script>>

<style lang="stylus" scoped>/*私有样式 */
</style>
