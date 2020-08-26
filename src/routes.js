import React, {lazy} from 'react';

const Home = lazy(()=>import('./pages/Home'));
const NotFound = lazy(()=>import('./pages/NotFound'));
const Register = lazy(()=>import('./pages/Register'));
const Login = lazy(()=>import('./pages/Login'));

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/register',
        component: Register,
        exact: true,
    },
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '*',
        component: NotFound,
        exact: true,
    },
]