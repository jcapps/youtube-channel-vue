import ajaxGetters from '../getters/ajaxGetters';
import channelGetters from '../getters/channelGetters';
import playlistGetters from '../getters/playlistGetters';

export default {
    ...ajaxGetters,
    ...channelGetters,
    ...playlistGetters
};