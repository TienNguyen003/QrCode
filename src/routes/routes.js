import routesConfig from '~/config/routes';

// pages
import Home from '~/pages/Home/home';
import Follow from '~/pages/Follow';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

// public routes
const publicRoutes = [
    { path: routesConfig.Home, component: Home },
    { path: routesConfig.Follow, component: Follow },
    { path: routesConfig.Profile, component: Profile },
    { path: routesConfig.Upload, component: Upload },
    { path: routesConfig.Search, component: Search },
    { path: routesConfig.Live, component: Live },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
