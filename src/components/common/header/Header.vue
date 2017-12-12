<template>
    <header>
        <div v-if="isLoading"/>
        <div v-else>
            <div>
                <title-bar :channel="channel"/>
                <subscribe-button/>
            </div>
            <div>
                <nav-bar :allPlaylists="allPlaylists"/>
                <search-bar/>
            </div>
        </div>
    </header>
</template>

<script>
    import NavBar from './NavBar';
    import SearchBar from './SearchBar';
    import SubscribeButton from './SubscribeButton';
    import TitleBar from './TitleBar';
    import * as channelActions from '../../../actions/channelActions';

    export default {
        name: 'Header',
        components: {
            NavBar,
            SearchBar,
            SubscribeButton,
            TitleBar
        },

        computed: {
            isLoading() {
                const totalAjaxCallsInProgress
                    = this.$store.getters.getAjaxCalls.header
                    + this.$store.getters.getAjaxCalls.allPlaylists;

                return totalAjaxCallsInProgress > 0;
            },
            allPlaylists() {
                return this.$store.getters.getAllPlaylists;
            },
            channel() {
                return this.$store.getters.getChannelInfo;
            }
        },

        created() {
            this.$store.dispatch('getChannelInfo');
            this.$store.dispatch('getAllPlaylists');
        }
    };
</script>