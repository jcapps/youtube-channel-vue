import * as types from '../actions/actionTypes';

export default {
    [types.GETTING_ALL_PLAYLISTS] (state) {
        state.ajaxCallsInProgress.allPlaylists += 1;
    },
    [types.GETTING_CHANNEL_INFO] (state) {
        state.ajaxCallsInProgress.header += 1;
    }
};