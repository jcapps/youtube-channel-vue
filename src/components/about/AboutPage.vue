<template>
    <div id="about-page">
        <div v-if="isLoading">
            <img class="loading-spinner" :src="loadingSpinner" alt="Loading..." />
        </div>
        <div v-else>
            <img id="profile-pic" :src="profilePicUrl" alt="Profile Picture" />
            <h3>About My Channel</h3>
            <p>
                <span v-for="piece in description" :key="piece">{{piece}}<br/></span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutPage',

        computed: {
            isLoading() {
                return this.$store.getters.getAjaxCalls.about > 0
            },
            loadingSpinner() {
                return require('../../images/loading.gif')
            },
            description() {
                const channel = this.$store.getters.getChannelInfo;
                if (channel.snippet) {
                    return channel.snippet.description.split('\n');
                } else {
                    return '';
                }
            },
            profilePicUrl() {
                const channel = this.$store.getters.getChannelInfo;
                if (channel.snippet) {
                    return channel.snippet.thumbnails.medium.url;
                } else {
                    return '';
                }
            }
        },

        created() {
            this.$store.dispatch('getChannelInfo');
        },
        
        mounted() {
            document.title = 'About My Channel';
            window.scrollTo(0, 0);
        }
    }
</script>