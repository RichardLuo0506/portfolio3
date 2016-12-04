(function() {
    'use strict';
    angular
        .module('App')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider'];

    function config($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
        $urlMatcherFactoryProvider.strictMode(false);
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('notFound', {
                url: '/404',
                templateUrl: 'app/404.html'
            })
            .state('home', {
                url: '',
                templateUrl: 'app/home/home.html',
                controller: 'home as vm'
            })
            .state('contact', {
                url: '',
                templateUrl: 'app/contact/contact.html',
                controller: 'contact as vm'
            })
    }
})();
