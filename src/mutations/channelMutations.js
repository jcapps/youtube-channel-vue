import * as types from '../actions/actionTypes';

export default {
    [types.GET_CHANNEL_INFO_SUCCESS] (state, channelInfo) {
        state.channelInfo = channelInfo.items[0];
        
        state.ajaxCallsInProgress.about -= 1;
        state.ajaxCallsInProgress.header -= 1;
    }
};