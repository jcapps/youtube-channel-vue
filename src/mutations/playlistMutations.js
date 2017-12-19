import * as types from '../actions/actionTypes';

export default {
    [types.GET_ALL_PLAYLISTS_SUCCESS] (state, playlists) {
        state.allPlaylists = playlists.items;
        state.playlistPageToken = {
            prevPageToken: playlists.prevPageToken,
            nextPageToken: playlists.nextPageToken
        };
        state.ajaxCallsInProgress.allPlaylists -= 1;
    },
    [types.GET_HEADER_PLAYLISTS_SUCCESS] (state, playlists) {
        state.headerPlaylists = playlists.items;
        state.ajaxCallsInProgress.header -= 1;
    },
    [types.GET_NEXT_PLAYLISTS_SUCCESS] (state, playlists) {
        state.allPlaylists = playlists.items;
        state.playlistPageToken = {
            prevPageToken: playlists.prevPageToken,
            nextPageToken: playlists.nextPageToken
        };
        state.ajaxCallsInProgress.allPlaylists -= 1;
    },
    [types.GET_NEXT_VIDEOS_SUCCESS] (state, playlist) {
        state.playlist = playlist.items;
        state.videoPageToken = {
            prevPageToken: playlist.prevPageToken,
            nextPageToken: playlist.nextPageToken
        };
        state.ajaxCallsInProgress.playlist -= 1;
    },
    [types.GET_RECENT_UPLOADS_PLAYLIST_SUCCESS] (state, playlist) {
        state.playlist = playlist.items;
        state.videoPageToken = {
            prevPageToken: playlist.prevPageToken,
            nextPageToken: playlist.nextPageToken
        };
        state.ajaxCallsInProgress.recentUploadsPlaylist -= 1;
    },
    [types.GET_RECENT_UPLOADS_PLAYLIST_ID_SUCCESS] (state, playlistId) {
        state.recentUploadsPlaylistId = playlistId;
        state.ajaxCallsInProgress.recentUploadsPlaylist -= 1;
    }
};