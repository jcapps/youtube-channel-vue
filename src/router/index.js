import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/home/HomePage';
import AllPlaylistsPage from '../components/playlist/AllPlaylistsPage';
import AllVideosPage from '../components/video/AllVideosPage';
import VideoWatchPage from '../components/video/VideoWatchPage';
import AboutPage from '../components/about/AboutPage';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', component: HomePage},
        {path: '/playlists', component: AllPlaylistsPage},
        {path: '/videos', component: AllVideosPage},
        {path: '/watch/:id', component: VideoWatchPage},
        {path: '/about', component: AboutPage}
    ]
});