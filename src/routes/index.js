import {createRouter, createWebHashHistory} from 'vue-router';

import Home from './Home'
import About from './About'
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
            path : '/about',
            component : About
        }
    ]
})