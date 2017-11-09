{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import app from './app'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

require('./bootstrap.js');
new Vue(app).$mount('#app');

