import React, {lazy} from 'react';

const Home = lazy(()=>import('./pages/Home'));
const NotFound = lazy(()=>import('./pages/NotFound'));
const Register = lazy(()=>import('./pages/Register'));
const Login = lazy(()=>import('./pages/Login'));
const Verification = lazy(()=>import('./pages/Verification'));
const Biodata = lazy(()=>import('./pages/Biodata'));
const ChooseCommunity = lazy(()=>import('./pages/ChooseCommunity'));
const OpenStore = lazy(()=>import('./pages/OpenStore'));

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
        path: '/register/choose-community',
        component: ChooseCommunity,
        exact: true,
    },
    {
        path: '/open-store',
        component: OpenStore,
        exact: true,
    },
    {
        path: '*',
        component: NotFound,
        exact: true,
    },
]