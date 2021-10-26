import {createRouter, createWebHashHistory} from 'vue-router';

import Home from './Home'
import About from './About'
import Movie from './Movie'
export default createRouter({
    //Hash, History
    //https://google.com/#/search
    history: createWebHashHistory(), //해시모드 (pagenotfound 방지)
    //page
    routes:[
        {
            path : '/',
            component : Home
        },
        {
            path : '/movie',
            component : Movie
        },
        {
            path : '/about',
            component : About
        }
    ]
})