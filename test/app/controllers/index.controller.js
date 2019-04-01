(function () {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['logger'];

    function IndexController(logger) {
        var vm = this;

        vm.test = "Ovo je neki tekst 2";

        vm.$onInit = function () {
            logger.info();
        }
    }

})()
