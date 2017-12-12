<template>
    <div id="searchbar">
        <form @submit.prevent="search">
            <img @click="toggleSearchBar"
                id="search-img"
                :src="searchImgUrl"
                alt="Search"
            />
            <input
                id="search"
                name="search"
                v-model="searchText"
                placeholder="Search channel..."
                :style="{width: '0px'}"
            />
        </form>
    </div>
</template>

<script>
    export default {
        name: 'SearchBar',
        data() {
            return {
                searchImgUrl: require('../../../images/search.png'),
                searchText: ''
            }
        },
        methods: {
            search() {
                alert('Search attempted: ' + this.searchText);
            },
            toggleSearchBar() {
                const searchBar = document.getElementById('search');
                if (searchBar.style.width === '200px') {
                    searchBar.style.width = '0';
                } else {
                    searchBar.style.width = '200px';
                    searchBar.focus();
                }
            }
        }
    };
</script>
