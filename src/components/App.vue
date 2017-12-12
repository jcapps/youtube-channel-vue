<template>
    <div id="app">
        <header-bar/>
        <div id="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Header from './common/header/Header';

    export default {
        name: 'App',
        components: {
            HeaderBar: Header
        }
    }
</script>