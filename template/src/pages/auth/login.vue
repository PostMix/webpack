<template>
	<v-layout>
		<h1>Login page</h1>
	</v-layout>
</template>

<script>
  export default {
    name: 'Login',
    components: {
      /**
       * Extend base layout
       *
       * @param resolve
       * @constructor
       */
      VLayout: resolve => require(['@/layouts/guest.vue'], resolve),
    },
  };
</script>
