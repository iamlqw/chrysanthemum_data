<template>
  <div id="picture">
    <img :src="lbpbaseCode" width="600" height="400">
  </div>
</template>

<script>
    export default {
        name: "NewDataLBPImgView",
        props:['lbpbaseCode']
    }
</script>

<style scoped>
  #picture{
    margin-left: 28%;
  }
</style>
