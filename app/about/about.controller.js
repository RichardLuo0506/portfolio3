(function() {
    'use strict';
    // Include app dependency on ngMaterial 

    angular
        .module('App')
        .controller('about', about);

    about.$inject = [];

    function about() {
        var vm = this;

        init();

        function init() {
            window.sr.reveal('.sr20w700', { distance: '20px', duration: 700 });
        }
    }
})();
