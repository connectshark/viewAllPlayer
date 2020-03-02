<template>
  <div class="searchBar">
    <div class="search-area">
      <label>
        <i class="material-icons">search</i>
        <input type="text"
        class="search"
        placeholder="搜尋作者"
        @keyup.enter="submitHandler"
        v-model="keyword">
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchBar',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    submitHandler () {
      // if (this.name === 'searchResult') {
        this.$router.replace({
          path: '/index',
          query: {
            keyword: this.keyword
          }
        }).catch(() => {})
      //   return
      // }
      // this.$router.push({
      //   path: '/index',
      //   query: {
      //     keyword: this.keyword
      //   }
      // }).catch(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.searchBar{
  margin: 10px 0;
  .search-area{
    label{
      width: 60%;
      max-width: 800px;
      margin: auto;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      padding:10px 20px;
      border-radius: 10px;
      background-color: #fff;
      i{
        color: #ccc;
      }
      .search{
        width: 100%;
        min-width: 0;
        border: none;
        padding: 10px;
        border-radius: 10px;
        background-color: transparent;
        color: #333;
        font-size: 16px;
        outline: none;
        &::placeholder{
          color: #ccc;
        }
      }
    }
  }
}
</style>
