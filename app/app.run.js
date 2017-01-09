(function() {
    'use strict';
    angular
        .module('App')
        .run(run);

    run.$inject = ['$rootScope', '$state', '$location'];

    function run($rootScope, $state, $location) {
        $rootScope.$on('$stateChangeSuccess', function() {
            $("html, body").animate({ scrollTop: 0 }, 0);
        })
    }
})();
