import React, {lazy} from 'react';

const Home = lazy(()=>import('./pages/Home'));
const NotFound = lazy(()=>import('./pages/NotFound'));
const Register = lazy(()=>import('./pages/Register'));
const Login = lazy(()=>import('./pages/Login'));
const Verification = lazy(()=>import('./pages/Verification'));
const Biodata = lazy(()=>import('./pages/Biodata'));

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
        path: '/verification',
        component: Verification,
        exact: true,
    },
    {
        path: '/register/biodata',
        component: Biodata,
        exact: true,
    },
    {
        path: '*',
        component: NotFound,
        exact: true,
    },
]