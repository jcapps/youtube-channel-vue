import * as types from './actionTypes';
import * as youtubeActions from './youtubeActions';

export default {
    getChannelInfo({commit}) {
        commit(types.GETTING_CHANNEL_INFO);
        return youtubeActions.getChannelInfo().then(channelInfo => {
            commit(types.GET_CHANNEL_INFO_SUCCESS, channelInfo);
        }).catch(error => {
            throw(error);
        });
    }
};