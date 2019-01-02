// 路由器对象

import Vue from 'vue';
import VueRouter from 'vue-router';
import Msite from '../pages/Msite/Msite.vue';
import Search from '../pages/Search/Search.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
// 声明使用插件
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:Msite
        },
        {
            path:'/order',
            component:Order
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/profile',
            component:Profile
        },
        {
            path:'/',
            redirect:'/msite'
        }
    ]
})