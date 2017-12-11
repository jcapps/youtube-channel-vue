<template>
    <div id="app">
        <header-bar></header-bar>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Header from './common/Header';

    export default {
        name: 'App',
        components: {
            HeaderBar: Header
        }
    }
</script>