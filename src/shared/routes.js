import Home from '../client/pages/home';
import About from '../client/pages/about';
import Error500 from '../client/pages/error';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/error',
        component: Error500
    }
];
