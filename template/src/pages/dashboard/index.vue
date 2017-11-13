<template>
	<v-layout>
		<div id="app">
			<img src="~img/logo.png">
			<v-hello-world></v-hello-world>
		</div>
	</v-layout>
</template>

<script>
  export default {
    name: 'Dashboard',

    components: {
      /**
       * Extend base layout
       *
       * @param resolve
       * @constructor
       */
      VLayout: resolve => require(['@/layouts/back'], resolve),
      vHelloWorld: resolve => require(['@/components/HelloWorld'], resolve),
    },
  };
</script>
