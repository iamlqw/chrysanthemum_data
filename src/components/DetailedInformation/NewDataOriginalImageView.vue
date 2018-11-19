<template>
    <div id="picture">
      <img :src="baseCode" width="600" height="400">
    </div>
</template>

<script>
    export default {
        name: "NewDataOriginalImageView",
        props:['baseCode']
    }
</script>

<style scoped>
  #picture{
    margin-left: 28%;
  }
</style>
