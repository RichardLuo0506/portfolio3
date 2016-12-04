(function() {
    'use strict';
    // Include app dependency on ngMaterial 

    angular
        .module('App')
        .controller('contact', contact);

    contact.$inject = [];

    function contact() {
        var vm = this;

        init();

        function init() {
        }
    }
})();
