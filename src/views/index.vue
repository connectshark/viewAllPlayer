<template>
  <div class="index">
    <searchBar />
    <div class="player-group">
      <div class="player-item"
      v-for="(item, index) in filterKeyword || playerList"
      :key="index">
        <playerInfo
        :state="true"
        :name="item.name"
        :updateTime="item.updateTime"
        :blogUrl="item.blogUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import searchBar from '../components/searchBar'
import playerInfo from '../components/playerInfo'
export default {
  name: 'index',
  components: {
    playerInfo,
    searchBar
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['playerList']),
    ...mapGetters(['filterKeyword'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixin.scss';
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
      @include rwd(mobile){
        width: 100%;
      }
    }
  }
}
</style>
