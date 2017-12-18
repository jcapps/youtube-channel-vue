export default {
    getAllPlaylists(state) {
        return state.allPlaylists;
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