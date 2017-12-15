import * as types from '../actions/actionTypes';

export default {
    [types.GET_MOST_RECENT_UPLOAD_SUCCESS] (state, video) {
        state.mostRecentUpload = video.items[0];
        state.ajaxCallsInProgress.mostRecentUpload -= 1;
    }
};