<template>
    <div class="video-details">
        <div>
            <h3>{{title[0].trim()}}</h3>
            <h4 v-for="(subTitle, i) in subTitleArray" :key="i">{{subTitle}}</h4>
        </div>
        <hr/>
        <p class="video-description">
            <span v-for="piece in description" :key="piece">{{piece}}<br/></span>
        </p>
        <p class="date-published">Published: {{date}}</p>
    </div>
</template>

<script>
    export default {
        name: 'VideoPlayerDescription',
        props: {
            video: {
                type: Object,
                required: true
            }
        },
        computed: {
            title() {
                return this.video.snippet.title.split(/\|(.+)/);
            },
            subTitleArray() {
                let title = this.title;
                let subTitleArray = new Array();
                let subTitleIndex = 1;
                while (subTitleIndex < title.length) {
                    if (title[subTitleIndex] !== '') {
                        subTitleArray.push(title[subTitleIndex].trim());
                    }
                    subTitleIndex++;
                }
                return subTitleArray;
            },
            description() {
                return this.video.snippet.description.split('\n');
            },
            date() {
                let date = new Date(this.video.snippet.publishedAt);
                return date.toLocaleString('en-us', { year: 'numeric', month: 'short', day: 'numeric' });
            }
        }
    }
</script>