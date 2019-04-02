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
                state: 'about',
                config: {
                    abstract: false,
                    templateUrl: 'app/about/about.html',
                    url: '/about'
                }
            },
            {
                state: 'home',
                config: {
                    abstract: false,
                    template: '',
                    url: '/'
                }
            }
        ];
    }
})();

