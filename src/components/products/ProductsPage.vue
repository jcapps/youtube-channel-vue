<template>
    <div id="products-page">
        <h1>Products</h1>
        <button @click="getAllProducts()">
            Get Products
        </button>
        <button @click="clearProducts()">
            Hide Products
        </button>
        <table>
            <tr v-for="(p, i) in allProducts" :key="i">
                <td>{{i + 1}}. {{p.name}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'ProductsPage',
        
        created() {
            document.title = "Products Page";
        },

        computed: {
            allProducts() {
                return this.$store.getters.allProducts;
            }
        },

        methods: {
            getAllProducts() {
                return this.$store.dispatch('getAllProducts');
            },
            clearProducts() {
                return this.$store.dispatch('clearProducts');
            }
        }
    };
</script>