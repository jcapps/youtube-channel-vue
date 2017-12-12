<template>
    <div id="subscribe">
        <button @click="subscribe">Subscribe</button>
    </div>
</template>

<script>
    export default {
        name: 'SubscribeButton',
        methods: {
            subscribe(e) {
                alert('Subscribe attempted.');
            }
        }
    };
</script>
