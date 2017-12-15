<template>
    <div v-if="stats && stats.likeCount" class="video-stats">
        <div id="like-bar-container">
            <div id="like-bar" />
            <div id="dislike-bar" />
            <div id="empty-bar" v-if="stats.likeCount == '0' && stats.dislikeCount == '0'" />
        </div>
        <div id="stats">
            <div id="likes-dislikes">
                <span>Likes: </span>
                <span id="likes">{{formatNumberString(stats.likeCount)}}</span>
                <span> - </span>
                <span id="dislikes">{{formatNumberString(stats.dislikeCount)}}</span>
            </div>
            <div id="views">
                <span>Views: </span>
                <span>{{formatNumberString(stats.viewCount)}}</span>
            </div>
            <div id="end-stats" />
        </div>
    </div>
    <div v-else>(Unable to load video statistics)</div>
</template>

<script>
    export default {
        name: 'VideoPlayerStats',
        props: {
            video: {
                type: Object,
                required: true
            }
        },

        computed: {
            stats() {
                return this.video.statistics;
            }
        },

        methods: {
            formatNumberString(number) {
                return parseInt(number).toLocaleString();
            },
            setLikeBarWidths() {
                setTimeout(() => {
                    const likeBar = document.getElementById('like-bar');
                    const dislikeBar = document.getElementById('dislike-bar');

                    if (likeBar && dislikeBar) {
                        likeBar.removeAttribute('class');
                        dislikeBar.removeAttribute('class');
                        likeBar.removeAttribute('style');
                        dislikeBar.removeAttribute('style');

                        setTimeout(() => {
                            const totalCount = parseInt(this.stats.likeCount) + parseInt(this.stats.dislikeCount);
                            const likePercentage = 100 * (this.stats.likeCount / totalCount);
                            const dislikePercentage = 100 - likePercentage;

                            likeBar.setAttribute('style', 'width: ' + likePercentage + '%;');
                            dislikeBar.setAttribute('style', 'width: ' + dislikePercentage + '%;');
                            likeBar.setAttribute('class', 'displayed');
                            dislikeBar.setAttribute('class', 'displayed');
                        }, 10);
                    }
                }, 10);
            }
        },

        mounted() {
            this.setLikeBarWidths();
        }
    }
</script>