<template>
  <div>
    <mt-header fixed :title='titleValue'>
    	 <router-link to="/" slot="left">
            <mt-button>返回</mt-button>
          </router-link>
    </mt-header>
   
  </div>
</template>

<script>
export default {
  name: 'header',
  props:{
			titleValue: String
		}
};
</script>

<style lang="css">
  @component-namespace page {
    @component header {
      @descendent main {
        margin-top: 50px;
        min-height: 120vh;
        > * {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>