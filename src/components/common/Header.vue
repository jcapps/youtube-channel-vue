<template>
    <header>
        <div>
            <nav-bar></nav-bar>
        </div>
    </header>
</template>

<script>
    import NavBar from './NavBar';

    export default {
        name: 'Header',
        components: {
            NavBar
        }
    };
</script>