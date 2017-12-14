import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', name: 'home', component: HomePage},
        {path: '/about', name: 'about', component: AboutPage}
    ]
});