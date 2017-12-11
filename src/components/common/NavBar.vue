<template>
    <div id="navbar">
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/products">Products</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavBar'
    };
</script>