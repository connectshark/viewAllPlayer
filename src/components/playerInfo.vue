<template>
  <div class="playerInfo">
    <div class="row">
      <h3 v-html="highlightText(name)"></h3>
    </div>
    <div class="row">
      <p>blog <a :href="blogUrl" target="_blank">部落格連結</a></p>
    </div>
    <div class="row">
      <p>update time:{{setTime}}</p>
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
      today: new Date()
    }
  },
  methods: {
    highlightText (name) {
      if (name === null) return '無提供名字'
      if (name.indexOf(this.searchKeyWord) !== -1 && this.searchKeyWord !== '') {
        return name.replace(this.searchKeyWord, `<span style="color:#D76735;">${this.searchKeyWord}</span>`)
      }
      return name
    }
  },
  computed: {
    setTime () {
      let arr = this.updateTime.split('/')
      const month = this.today.getMonth() + 1
      const date = this.today.getDate()
      if (month === parseInt(arr[1])) {
        if (date === arr[2].split(' ')[0]) {
          return 'today'
        } else {
          return `${parseInt(date) - parseInt(arr[2].split(' ')[0])}天前更新`
        }
      }
      return `許久未更新`
    },
    searchKeyWord () {
      return this.$store.state.route.query.keyword
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
