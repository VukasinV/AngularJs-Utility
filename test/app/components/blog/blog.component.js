(function () {
    'use strict';

    angular.module('app')
        .component('blog', {
            templateUrl: 'app/blog/blog.component.html',
            controller: BlogController,
            controllerAs: '$ctrl'
        });

    function BlogController() {
        var vm = this;

        vm.text = 'This is blog component';
    }
})();