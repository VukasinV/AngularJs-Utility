(function () {
    'use strict'

    angular
        .module('app')
        .component('header', {
            templateUrl: './app/layout/header/header.component.html',
            controller: HeaderController,
            controlerAS: '$ctrl'
        });


    function HeaderController() {
        var vm = this;

        vm.header = "Ovo je header!";
    }

})();