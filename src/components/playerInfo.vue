<template>
  <div class="playerInfo">
    <div class="row">
      <h3>{{name}}</h3>
      <p>blog <a :href="blogUrl" target="_blank">部落格連結</a></p>
      <p>update time:{{updateTime}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'playerInfo',
  props: {
    blogList: Array,
    blogUrl: String,
    name: String,
    updateTime: String
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.playerInfo{
  margin: auto;
  width: 90%;
  height: 200px;
  box-sizing: border-box;
  padding: 20px;
  border: 2px solid #aaa;
}
</style>
