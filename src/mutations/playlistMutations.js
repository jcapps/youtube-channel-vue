import * as types from '../actions/actionTypes';

export default {
    [types.GET_ALL_PLAYLISTS_SUCCESS] (state, playlists) {
        state.allPlaylists = playlists.items;
        state.ajaxCallsInProgress.allPlaylists -= 1;
    }
};