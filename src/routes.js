import React, {lazy} from 'react';

const Home = lazy(()=>import('./pages/Home'));
const NotFound = lazy(()=>import('./pages/NotFound'));

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '*',
        component: NotFound,
        exact: true,
    }
]