import * as types from './actionTypes';
import * as youtubeActions from './youtubeActions';

export default {
    getAllPlaylists({commit}) {
        commit(types.GETTING_ALL_PLAYLISTS);
        return youtubeActions.getAllPlaylists().then(playlists => {
            commit(types.GET_ALL_PLAYLISTS_SUCCESS, playlists);
        });
    }
};