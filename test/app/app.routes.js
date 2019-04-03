(function () {
    'use strict'

    angular
        .module('app')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    abstract: false,
                    component: 'home',
                    url: '/home'
                }
            },
            {
                state: 'blog',
                config: {
                    abstract: false,
                    component: 'blog',
                    url: '/blog'
                }
            },
            {
                state: 'about',
                config: {
                    abstract: false,
                    component: 'about',
                    url: '/about'
                }
            },
            {
                state: 'contact',
                config: {
                    abstract: false,
                    component: 'contact',
                    url: '/contact'
                }
            }
        ];
    }
})();

