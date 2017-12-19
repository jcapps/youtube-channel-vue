<template>
    <div id="videos-watch-page">
        <img v-if="isLoading" class="loading-spinner" :src="loadingSpinner" alt="Loading..." />
        <video-player v-else :video="video" />
    </div>
</template>

<script>
    import VideoPlayer from '../common/player/VideoPlayer';

    export default {
        name: 'VideoWatchPage',
        components: {
            VideoPlayer
        },
        data() {
            return {
                pageTitle: 'Video Watch Page',
                loadingSpinner: require('../../images/loading.gif')
            };
        },
        computed: {
            isLoading() {
                const totalAjaxCallsInProgress
                    = this.$store.getters.getAjaxCalls.video;

                return totalAjaxCallsInProgress > 0;
            },
            video() {
                const video = this.$store.getters.getVideo;
                if (video.snippet) document.title = video.snippet.title;
                return video;
            },
            videoId() {
                return this.$route.params.id;
            }
        },

        created() {
            this.$store.dispatch('getVideo', {id: this.videoId});
        },

        mounted() {
            document.title = this.pageTitle;
            window.scroll(0, 0);
        }
    };
</script>