<template>
    <div id="app">
        <header-bar/>
        <div v-if="isLoading"/>
        <div v-else id="content">
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
        },

        computed: {
            isLoading() {
                // Don't render content until header has loaded
                const totalAjaxCallsInProgress
                    = this.$store.getters.getAjaxCalls.channelInfo
                    + this.$store.getters.getAjaxCalls.header;

                return totalAjaxCallsInProgress > 0;
            }
        }
    }
</script>