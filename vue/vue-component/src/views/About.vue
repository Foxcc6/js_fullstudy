<template>
  <div class="about">
    <User :userName="name" @cgbb="updateBaby"></User>
    <Animal :babyName="baby"></Animal>
  </div>
</template>

<script>
import User from '@/components/User'
import Animal from '@/components/Animal'
export default {
  data() {
    return {
      name: "皮皮",
      baby:undefined
    }
  },
  components: {
    User,
    Animal
  },
   methods:{
    updateBaby(baby) {
      console.log(baby);
      this.baby = baby
      
    }
  }
};
</script>

<style>

</style>