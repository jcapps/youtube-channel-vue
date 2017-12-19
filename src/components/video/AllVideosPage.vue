<template>
    <div class="search-results">
        <div>
            <h2>Videos</h2>
            <div class="search-list">
                <video-result v-for="video in videoList" :key="video.id" :video="video"/>
                <a v-if="hasNextPageToken" id="view-more" @click="loadMoreVideos">
                    <div><b>View More</b></div>
                </a>
            </div>
        </div>
        <img v-if="isLoading" class="loading-spinner" :src="loadingSpinner" alt="Loading..." />
    </div>
</template>

<script>
    import VideoResult from './VideoResult';

    export default {
        name: 'AllVideosPage',
        components: {
            VideoResult
        },
        data() {
            return {
                loadingSpinner: require('../../images/loading.gif')
            };
        },
        computed: {
            isLoading() {
                const totalAjaxCallsInProgress
                    = this.$store.getters.getAjaxCalls.recentUploadsPlaylist
                    + this.$store.getters.getAjaxCalls.playlist;

                return totalAjaxCallsInProgress > 0;
            },
            playlistId() {
                return this.$store.getters.getRecentUploadsPlaylistId;
            },
            videoList() {
                return this.$store.getters.getRecentUploadsPlaylist;
            },
            videoPageToken() {
                return this.$store.getters.getVideoPageToken;
            },
            hasNextPageToken() {
                return !!this.videoPageToken.nextPageToken;
            }
        },
        methods: {
            loadMoreVideos() {
                const nextPageToken = this.videoPageToken.nextPageToken;
                const id = this.playlistId;
                this.$store.dispatch('getNextVideos', {id, nextPageToken});
            }
        },
        
        created() {
            this.$store.dispatch('getRecentUploadsPlaylist');
        },
        
        mounted() {
            document.title = 'Videos';
            window.scrollTo(0, 0);
        }
    };
</script>