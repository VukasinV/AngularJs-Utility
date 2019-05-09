(function () {
    'use strict';

    angular.module('app')
        .component('contact', {
            templateUrl: 'app/contact/contact.component.html',
            controller: ContactController,
            controllerAs: '$ctrl'
        });

    function ContactController() {
        var vm = this;

        vm.text = 'This is contact component';
    }
})();