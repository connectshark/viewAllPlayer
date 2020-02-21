<template>
  <div id="Author">
		<playerInfo
		:name="filterPlayer.name"
		:updateTime="filterPlayer.updateTime"
		:blogUrl="filterPlayer.blogUrl" />
		<ul class="article">
			<li class="article-item" v-for="(item, index) in filterPlayer.blogList" :key="index">
				<a :href="item.url" target="_blank">{{item.title}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import playerInfo from '../components/playerInfo'
export default {
	name:'Author',
	components: {
		playerInfo
	},
	data() {
		return {
			url: this.$route.params.url
		}
	},
	computed: {
		...mapGetters(['filterPlayer'])
	}
}
</script>

<style lang="scss">
#Author{
	width: 100%;
	margin: auto;
	max-width: 1280px;
	padding: 10px 0 0;
	.article{
		padding: 20px;
		box-sizing: border-box;
	}
	.article-item{
		margin: auto;
		width: 50%;
		background-color: #f2ab39;
		border-radius: 10px;
		transition: box-shadow .2s, transform .2s;
		margin-bottom: 10px;
		a{
			display: block;
			padding: 20px 0;
			text-decoration: none;
			color: #fff;
		}
		&:hover{
			box-shadow: 2px 2px 5px #69491a;
		}
		&:active{
			box-shadow: 1px 1px 2px #ffd954;
			transform: translate(1px, 1px);
		}
	}
}
</style>