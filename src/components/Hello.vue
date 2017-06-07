<template>
	<div class="hello">
		<HeaderCompontent :titleValue='titleValue'></HeaderCompontent>
		<div class="page-header-main">
			 <div class="page-cell">
			 	 <mt-cell v-for="item in list" :title="item.title" is-link :to="{ name: 'detail', params: {title:item.title}}">
			    </mt-cell>
		  </div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import { Toast } from 'mint-ui'
	import HeaderCompontent from './header.vue'
	import detail from './detail.vue'
	export default {
		name: 'hello',
		data() {
			return {
				titleValue: '列表页',
				list:[]
			}
		},
		components: {
			HeaderCompontent,
			Toast
		},
		created() {
			axios.post('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=2').then((res) => {
				this.list = res.data.result;
				
				
			})
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>