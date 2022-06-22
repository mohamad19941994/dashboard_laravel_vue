import {createRouter, createWebHashHistory} from "vue-router";

import UsersIndex from '../../components/dashboard/users/UsersIndex';

const routes = [
    {
        path:'/dashboard',
        name:'dashboard.users.index',
        components:UsersIndex,
    }
]

export default 
