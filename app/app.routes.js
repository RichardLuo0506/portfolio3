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
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.html',
                // controller: 'about as vm'
            })
            .state('portfolio', {
                url: '/portfolio',
                templateUrl: 'app/portfolio/portfolio.html',
                // controller: 'home as vm'
            })
            .state('listManager', {
                url: "/portfolio/list-manager",
                templateUrl: 'app/portfolio/list-manager.html',
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/contact/contact.html',
                controller: 'contact as vm'
            })
    }
})();
