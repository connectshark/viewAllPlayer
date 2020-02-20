<template>
  <div id="Author">
		hello{{url}}
	</div>
</template>

<script>
export default {
	name:'Author',
	data() {
		return {
			url: this.$route.params.url
		}
	},
}
</script>

<style>

</style>