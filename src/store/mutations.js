import ajaxMutations from '../mutations/ajaxMutations';
import channelMutations from '../mutations/channelMutations';
import playlistMutations from '../mutations/playlistMutations';

export default {
    ...ajaxMutations,
    ...channelMutations,
    ...playlistMutations,
};