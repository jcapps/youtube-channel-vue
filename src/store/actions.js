import channelActions from '../actions/channelActions';
import playlistActions from '../actions/playlistActions';
import videoActions from '../actions/videoActions';

export default {
    ...channelActions,
    ...playlistActions,
    ...videoActions
};