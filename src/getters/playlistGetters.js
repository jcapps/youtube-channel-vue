export default {
    getAllPlaylists(state) {
        return state.allPlaylists;
    },
    getHeaderPlaylists(state) {
        return state.headerPlaylists;
    },
    getPlaylistPageToken(state) {
        return state.playlistPageToken;
    },
    getRecentUploadsPlaylist(state) {
        return state.playlist;
    },
    getRecentUploadsPlaylistId(state) {
        return state.recentUploadsPlaylistId;
    },
    getVideoPageToken(state) {
        return state.videoPageToken;
    }
};