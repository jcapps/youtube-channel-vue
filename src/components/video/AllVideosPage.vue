<template>
    <div class="search-results">
        <div>
            <h2>Videos</h2>
            <div class="search-list">
                <video-result v-for="(video, i) in videoList" :key="i" :video="video"/>
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
                playlist: [],
                videos: [],
                loadingSpinner: require('../../images/loading.gif')
            };
        },
        computed: {
            isLoading() {
                const totalAjaxCallsInProgress
                    = this.$store.getters.getAjaxCalls.recentUploadsPlaylist
                    + this.$store.getters.getAjaxCalls.playlist
                    + this.$store.getters.getAjaxCalls.videos;

                return totalAjaxCallsInProgress > 0;
            },
            playlistId() {
                return this.$store.getters.getRecentUploadsPlaylistId;
            },
            videoList() {
                const playlist = this.$store.getters.getRecentUploadsPlaylist;
                if (JSON.stringify(playlist) != JSON.stringify(this.playlist)) {
                    this.playlist = playlist;
                    this.getVideos(playlist);
                }

                const videos = this.$store.getters.getVideos;
                if (
                    (videos.length > 0) &&
                    (JSON.stringify(videos) != JSON.stringify(this.videos.slice(-25)))
                ) {
                    this.videos = this.videos.concat(videos);
                }
                return this.videos;
            },
            videoPageToken() {
                return this.$store.getters.getVideoPageToken;
            },
            hasNextPageToken() {
                return !!this.videoPageToken.nextPageToken;
            }
        },
        methods: {
            getVideos(playlist) {
                let videoIds = [];
                for (let i = this.videoList.length; i < playlist.length; i++) {
                    const videoId = playlist[i].snippet.resourceId.videoId;
                    videoIds.push(videoId);
                }
                const videoIdString = videoIds.join(',');

                this.$store.dispatch('getVideos', {videoIdString});
            },

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