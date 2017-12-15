import ajaxMutations from '../mutations/ajaxMutations';
import channelMutations from '../mutations/channelMutations';
import playlistMutations from '../mutations/playlistMutations';
import videoMutations from '../mutations/videoMutations';

export default {
    ...ajaxMutations,
    ...channelMutations,
    ...playlistMutations,
    ...videoMutations,
};