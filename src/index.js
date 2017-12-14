/* eslint-disable import/default */
import 'babel-polyfill';
import Vue from 'vue';
import {sync} from 'vuex-router-sync';
import router from './router';
import store from './store';
import App from './components/App';
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

sync(store, router);
store.dispatch('getChannelInfo');

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});