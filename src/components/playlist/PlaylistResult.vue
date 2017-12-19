<template>
    <router-link :to="{path: '/playlist/' + playlistId}">
        <div class="playlist-result">
            <img
                height="90"
                width="160"
                :title="playlist.snippet.title"
                :src="playlist.snippet.thumbnails.medium.url"
                :alt="playlist.snippet.title"
            />
            <div>
                <h3>{{playlist.snippet.title}}</h3>
                <p>{{playlist.snippet.description}}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'PlaylistResult',
        props: {
            playlist: {
                type: Object,
                required: true
            }
        },

        computed: {
            playlistId() {
                if (this.playlist.kind == 'youtube#searchResult') {
                    return this.playlist.id.playlistId;
                } else {
                    return this.playlist.id;
                }
            }
        }
    };
</script>