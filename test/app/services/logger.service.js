(function () {
    'use strict';

    angular
        .module('app')
        .factory('logger', logger);

    logger.$inject = ['$log'];

    function logger($log) {
        var service = {
            info: info
        };

        return service;

        function info() {
            $log.info("This is some info");
        }
    }
})();