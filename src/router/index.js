import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/home/HomePage';
import ProductsPage from '../components/products/ProductsPage';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', name: 'home', component: HomePage},
        {path: '/products', name: 'products', component: ProductsPage}
    ]
});