import * as types from '../actions/actionTypes';

export default {
    [types.GETTING_ALL_PLAYLISTS] (state) {
        state.ajaxCallsInProgress.allPlaylists += 1;
    },
    [types.GETTING_CHANNEL_INFO] (state) {
        state.ajaxCallsInProgress.channelInfo += 1;
    },
    [types.GETTING_HEADER_PLAYLISTS] (state) {
        state.ajaxCallsInProgress.header += 1;
    },
    [types.GETTING_MOST_RECENT_UPLOAD] (state) {
        state.ajaxCallsInProgress.mostRecentUpload += 1;
    },
    [types.GETTING_PLAYLIST] (state) {
        state.ajaxCallsInProgress.playlist += 1;
    },
    [types.GETTING_RECENT_UPLOADS_PLAYLIST] (state) {
        state.ajaxCallsInProgress.recentUploadsPlaylist += 1;
    },
    [types.GETTING_RECENT_UPLOADS_PLAYLIST_ID] (state) {
        state.ajaxCallsInProgress.recentUploadsPlaylist += 1;
    },
    [types.GETTING_VIDEO_INFO] (state) {
        state.ajaxCallsInProgress.video += 1;
    },
};