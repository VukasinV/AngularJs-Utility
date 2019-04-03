(function () {
    'use strict';

    angular.module('app')
        .component('about', {
            templateUrl: 'app/about/about.component.html',
            controller: AboutController,
            controllerAs: '$ctrl'
        });

    function AboutController() {
        var vm = this;

        vm.text = 'This is about component';
    }
})();