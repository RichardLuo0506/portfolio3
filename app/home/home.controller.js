(function() {
    'use strict';
    // Include app dependency on ngMaterial 

    angular
        .module('App')
        .controller('home', home);

    home.$inject = [];

    function home() {
        var vm = this;

        init();

        function init() {
        }
    }
})();
