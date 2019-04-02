(function () {
    'use strict'

    angular
        .module('app')
        .config(function ($stateProvider) {

            var aboutState = {
                name: 'about',
                url: '/about',
                templateUrl: 'app/about/about.html'
            };

            var homeState = {
                name: 'home',
                url: '/',
                template: ''
            }

            $stateProvider.state(aboutState);
            $stateProvider.state(homeState);
        });
})();