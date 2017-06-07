<template>
	<div>
		
	
	<HeaderCompontent :titleValue='titleValue'></HeaderCompontent>
	<div class="page-header-main">
		<h5>{{$route.params.title}}</h5>
	</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import { Toast } from 'mint-ui'
	import HeaderCompontent from './header.vue'
	
	export default {
		name: 'detail',
		data() {
			return {
				titleValue: '详情页'
			}
		},
		components: {
			HeaderCompontent,
			Toast
		}

	}
</script>

<style>
</style>