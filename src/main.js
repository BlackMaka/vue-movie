import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js';
//import store from './store/index.js';
import store from './store';//index.js는 생략가능 알아서 index.파일이름을 찾아줌

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')