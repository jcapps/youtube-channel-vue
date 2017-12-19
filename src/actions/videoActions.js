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
    },

    getVideo({commit}, {id, playlistIndex = 0}) {
        commit(types.GETTING_VIDEO_INFO);
        return youtubeActions.getVideoInfo(id).then(video => {
            commit(types.GET_VIDEO_SUCCESS, video, playlistIndex);
        });
    }
};