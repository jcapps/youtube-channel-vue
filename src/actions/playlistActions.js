import * as types from './actionTypes';
import * as youtubeActions from './youtubeActions';

export default {
    getAllPlaylists({commit}) {
        commit(types.GETTING_ALL_PLAYLISTS);
        return youtubeActions.getAllPlaylists().then(playlists => {
            commit(types.GET_ALL_PLAYLISTS_SUCCESS, playlists);
        });
    },

    getRecentUploadsPlaylist({commit}) {
        commit(types.GETTING_RECENT_UPLOADS_PLAYLIST_ID);
        commit(types.GETTING_RECENT_UPLOADS_PLAYLIST);
        return youtubeActions.getChannelDetails().then(channelContent => {
            let playlistId = channelContent.items[0].contentDetails.relatedPlaylists.uploads;
            commit(types.GET_RECENT_UPLOADS_PLAYLIST_ID_SUCCESS, playlistId);
            return youtubeActions.getPlaylist(playlistId).then(playlist => {
                commit(types.GET_RECENT_UPLOADS_PLAYLIST_SUCCESS, playlist);
                return playlist;
            });
        });
    }
};