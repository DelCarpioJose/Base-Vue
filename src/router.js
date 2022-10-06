import {createRouter,createWebHistory} from "vue-router";

import Home from './components/home-content.component.vue';
import Product from './components/product-form.component.vue';
import Comment from './components/comments-list.component.vue';
import Post from './components/post-list.component.vue';

const routes = [ //definimos rutas
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/comments', component: Comment },
    { path: '/post', component: Post }
]

const history = createWebHistory();

const router = createRouter({
        history,
        routes
    }
)

export default router