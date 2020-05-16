import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Insert from '../views/Insert'
import MyHouses from '../views/MyHouses'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/insert',
            name: 'Insert',
            component: Insert
        },
        {
            path: '/myHouses',
            name: 'MyHouses',
            component: MyHouses
        }
    ]
})
