<template>
    <div class="video-player">
        <div id="player-iframe" />
        <!-- <VideoPlayerStats video={this.props.video} />
        <VideoPlayerDescription video={this.props.video} />
        <VideoPlayerComments video={this.props.video} videoSeek={this.videoSeek} /> -->
    </div>
</template>

<script>
    import YouTubePlayer from 'youtube-player';

    export default {
        name: 'VideoPlayer',
        props: {
            video: {
                type: Object,
                required: true
            },
            playlistIndex: {
                type: Number
            },
            playlistId: {
                type: String
            },
            updatePlaylist: {
                type: Function
            }
        },
        data() {
            return {
                player: null
            }
        },
        components: {},
        methods: {
            initializePlayer() {
                let params = {
                    height: '360',
                    width: '640',
                    videoId: this.video.id
                };

                if (this.playlistId) {
                    params = {
                        height: '360',
                        width: '640',
                        playerVars: {
                            listType: 'playlist',
                            list: this.playlistId
                        }
                    };
                }
                
                if (this.player) this.player.destroy();
                this.player = YouTubePlayer('player-iframe', params);
                this.player.on('stateChange', e => {
                    let playerState = e.target.getPlayerState();
                    let playlistIndex = e.target.getPlaylistIndex(); // -1 if not a playlist
                    if (playlistIndex > -1 && playerState == 0 || playerState == 1) { // -1 = UNSTARTED, 0 = ENDED, 1 = PLAYING, 2 = PAUSED, 3 = BUFFERING, 5 = VIDEO CUED
                        this.updatePlaylist(playlistIndex);
                    }
                });
            },

            videoSeek(time) {
                let hrMinSec = [0, 0, 0];
                const timeUnits = ['h', 'm', 's'];

                for (let i = 0; i < timeUnits.length; i++) {
                    if (time.indexOf(timeUnits[i]) > 0) {
                        hrMinSec[i] = parseInt(time.split(timeUnits[i])[0]);
                        time = time.split(timeUnits[i])[1];
                    }
                }

                const seconds = 3600 * hrMinSec[0] + 60 * hrMinSec[1] + hrMinSec[2];
                this.player.seekTo(seconds, true);
                window.scrollTo(0, 0);
            }
        },

        mounted() {
            if (this.video.snippet) {
                this.initializePlayer();
            }
        },

        beforeDestroy() {
            if (this.player) this.player.destroy();
        }
    }
</script>