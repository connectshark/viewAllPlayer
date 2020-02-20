<template>
  <div class="playerInfo">
    <div class="row">
      <h3>{{name || '無提供名字'}}</h3>
    </div>
    <div class="row">
      <p>blog <a :href="blogUrl" target="_blank">部落格連結</a></p>
    </div>
    <div class="row">
      <p>update time:{{updateTime}}</p>
    </div>
    <div class="row" v-if="state">
      <router-link :to="{ name: 'author', params: { url: blogUrl}}">文章列表</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'playerInfo',
  props: {
    state: {
      type: Boolean,
      default: false
    },
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
  border-radius: 10px;
  &:hover{
    box-shadow: 1px 1px 5px #aaa;
  }
  .row{
    padding: 10px 0;
  }
}
</style>
