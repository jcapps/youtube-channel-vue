<template>
    <div id="titlebar">
        <img id="profile-thumbnail" :src="profilePicUrl" alt="Profile Thumbnail" />
        <h3>James Capps' YouTube Channel</h3>
    </div>
</template>

<script>
    export default {
        name: 'TitleBar',
        props: {
            channel: {
                type: Object,
                required: true
            }
        },
        computed: {
            profilePicUrl() {
                if (this.channel.snippet) {
                    return this.channel.snippet.thumbnails.default.url;
                }
                return '';
            }
        }
    };
</script>
