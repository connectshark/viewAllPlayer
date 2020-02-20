<template>
  <div class="index">
    <div class="player-group">
      <div class="player-item"
      v-for="(item, index) in playerList"
      :key="index">
        <playerInfo
        :blogList="item.blogList"
        :name="item.name"
        :updateTime="item.updateTime"
        :blogUrl="item.blogUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import playerInfo from '../components/playerInfo'
export default {
  name: 'index',
  components: {
    playerInfo
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['playerList'])
  }
}
</script>

<style lang="scss" scoped>
.index{
  .player-group{
    width: 100%;
    max-width: 1280px;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    .player-item{
      width: 33.333333%;
      margin-bottom: 20px;
    }
  }
}
</style>
