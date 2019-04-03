(function () {
    'use strict'

    angular
        .module('app')
        .component('footer', {
            templateUrl: './app/layout/footer/footer.component.html',
            controller: FooterController,
            controlerAS: '$ctrl'
        });


    function FooterController() {
        var vm = this;

        vm.footer = "Ovo je footer!";
    }

})();