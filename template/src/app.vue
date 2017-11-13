<template>
	<router-view></router-view>
</template>

<script>
  import store from '@/store';
  import { router } from './bootstrap';

  export default {
    name: 'app',
	{{#if_eq build "standalone"}}
	render: h => h(this),
    {{/if_eq}}

    /**
     * Load Vuex store into application
     */
    store,

    /**
     * Load routing into application
     */
    router,
  };
</script>

<style>
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	  margin-top: 60px;
	}
</style>
