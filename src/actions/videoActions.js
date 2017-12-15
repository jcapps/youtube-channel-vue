import * as types from './actionTypes';
import * as youtubeActions from './youtubeActions';

export default {
    getMostRecentUpload({dispatch, commit}) {
        commit(types.GETTING_MOST_RECENT_UPLOAD);

        return dispatch('getRecentUploadsPlaylist').then(playlist => {
            let videoId = playlist.items[0].snippet.resourceId.videoId;
            return youtubeActions.getVideoInfo(videoId).then(video => {
                commit(types.GET_MOST_RECENT_UPLOAD_SUCCESS, video);
            });
        });
    }
};