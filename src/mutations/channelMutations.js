import * as types from '../actions/actionTypes';

export default {
    [types.GET_CHANNEL_INFO_SUCCESS] (state, channelInfo) {
        state.channelInfo = channelInfo.items[0];
        state.ajaxCallsInProgress.channelInfo -= 1;
    }
};