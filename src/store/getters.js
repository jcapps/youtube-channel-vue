import ajaxGetters from '../getters/ajaxGetters';
import channelGetters from '../getters/channelGetters';
import playlistGetters from '../getters/playlistGetters';
import videoGetters from '../getters/videoGetters';

export default {
    ...ajaxGetters,
    ...channelGetters,
    ...playlistGetters,
    ...videoGetters,
};