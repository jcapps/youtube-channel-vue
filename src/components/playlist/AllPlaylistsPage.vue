<template>
    <div class="search-results">
        <div>
            <h2>Playlists</h2>
            <div class="search-list">
                <playlist-result v-for="playlist in playlistList" :key="playlist.id" :playlist="playlist"/>
                <a v-if="hasNextPageToken" id="view-more" @click="loadMorePlaylists">
                    <div><b>View More</b></div>
                </a>
            </div>
        </div>
        <img v-if="isLoading" class="loading-spinner" :src="loadingSpinner" alt="Loading..." />
    </div>
</template>

<script>
    import PlaylistResult from './PlaylistResult';

    export default {
        name: 'AllPlaylistsPage',
        components: {
            PlaylistResult
        },
        data() {
            return {
                loadingSpinner: require('../../images/loading.gif')
            };
        },
        computed: {
            isLoading() {
                const totalAjaxCallsInProgress
                    = this.$store.getters.getAjaxCalls.allPlaylists;

                return totalAjaxCallsInProgress > 0;
            },
            playlistList() {
                return this.$store.getters.getAllPlaylists;
            },
            playlistPageToken() {
                return this.$store.getters.getPlaylistPageToken;
            },
            hasNextPageToken() {
                return !!this.playlistPageToken.nextPageToken;
            }
        },
        methods: {
            loadMorePlaylists() {
                const nextPageToken = this.playlistPageToken.nextPageToken;
                this.$store.dispatch('getNextPlaylists', {nextPageToken});
            }
        },
        
        created() {
            this.$store.dispatch('getAllPlaylists');
        },
        
        mounted() {
            document.title = 'Playlists';
            window.scrollTo(0, 0);
        }
    };
</script>