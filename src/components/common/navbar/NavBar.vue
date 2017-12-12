<template>
    <div id="navbar">
        <nav>
            <ul>
                <li><router-link to="/"><div>Home</div></router-link></li>
                <li class="has-submenu" @mouseover="showSubmenu" @mouseout="hideSubmenu">
                    <router-link to="/playlists"><div>Playlists</div></router-link>
                    <ul class="hidden">
                        <li v-for="playlist in allPlaylists" :key="playlist.id">
                            <router-link :to="{path: '/playlist/' + playlist.id}">
                                <div>{{playlist.snippet.title}}</div>
                            </router-link>
                        </li>
                        <li><router-link to="/playlists"><div class="nav-view-all">View All</div></router-link></li>
                    </ul>
                </li>
                <li><router-link to="/videos"><div>Videos</div></router-link></li>
                <li><router-link to="/about"><div>About</div></router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: {
            allPlaylists: {
                type: Array,
                required: true
            }
        },
        methods: {
            showSubmenu(e) {
                let element = e.target;
                while (!element.classList.contains("has-submenu")) {
                    element = element.parentNode;
                }
                element.children[1].classList.remove("hidden");
            },

            hideSubmenu(e) {
                let element = e.target;
                while (!element.classList.contains("has-submenu")) {
                    element = element.parentNode;
                }
                element.children[1].classList.add("hidden");
            }
        }
    };
</script>