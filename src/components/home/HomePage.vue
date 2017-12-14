<template>
    <div id="home-page">
        <h2>Most Recent Upload</h2>
        <!-- <VideoPlayer video={this.props.mostRecentUpload}/> -->
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        
        mounted() {
            document.title = 'Home: Most Recent Upload';
            window.scrollTo(0, 0);
        }
    }
</script>