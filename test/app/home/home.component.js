(function () {
    'use strict';

    angular.module('app')
        .component('home', {
            templateUrl: 'app/home/home.component.html',
            controller: HomeController,
            controllerAs: '$ctrl'
        });

    function HomeController() {
        var vm = this;

        vm.text = 'This is home component';
    }
})();