import * as types from '../actions/actionTypes';

export default {
    [types.GET_ALL_PLAYLISTS_SUCCESS] (state, playlists) {
        state.allPlaylists = playlists.items;
        state.ajaxCallsInProgress.allPlaylists -= 1;
    },
    [types.GET_RECENT_UPLOADS_PLAYLIST_SUCCESS] (state, video) {
        state.ajaxCallsInProgress.recentUploadsPlaylist -= 1;
    },
    [types.GET_RECENT_UPLOADS_PLAYLIST_ID_SUCCESS] (state, video) {
        state.ajaxCallsInProgress.recentUploadsPlaylist -= 1;
    }
};