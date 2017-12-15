<template>
    <div id="home-page">
        <div v-if="isLoading">
            <img class="loading-spinner" :src="loadingSpinner" alt="Loading..." />
        </div>
        <div v-else>
            <h2>Most Recent Upload</h2>
            <video-player :video="mostRecentUpload" />
        </div>
    </div>
</template>

<script>
    import VideoPlayer from '../common/player/VideoPlayer';

    export default {
        name: 'HomePage',
        components: {
            VideoPlayer
        },
        data() {
            return {
                loadingSpinner: require('../../images/loading.gif')
            };
        },

        computed: {
            isLoading() {
                const totalAjaxCallsInProgress
                    = this.$store.getters.getAjaxCalls.mostRecentUpload
                    + this.$store.getters.getAjaxCalls.recentUploadsPlaylist

                return totalAjaxCallsInProgress > 0;
            },
            mostRecentUpload() {
                return this.$store.getters.getMostRecentUpload;
            }
        },

        created() {
            this.$store.dispatch('getMostRecentUpload');
        },
        
        mounted() {
            document.title = 'Home: Most Recent Upload';
            window.scrollTo(0, 0);
        }
    }
</script>