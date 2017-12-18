<template>
    <router-link :to="{path: '/watch/' + video.id}">
        <div class="video-result">
            <img 
                height="90" 
                width="160" 
                :title="video.snippet.title"
                :src="video.snippet.thumbnails.medium.url"
                :alt="video.snippet.title"/>
            <div>
                <h4>{{video.snippet.title}}</h4>
                <p>{{video.snippet.description}}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'VideoResult',
        props: {
            video: {
                type: Object,
                required: true
            }
        }
    };
</script>