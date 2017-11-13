import Vue from 'vue';
import app from './app';

require('./bootstrap.js');

new Vue(app).$mount('#app');

