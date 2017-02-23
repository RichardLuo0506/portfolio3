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
            window.sr.reveal('.sr50', { distance: '50px', duration: 1000 });
            window.sr.reveal('.sr30w500', { distance: '30px', duration: 1000, delay: 500 });
            window.sr.reveal('.sr20w1000', { distance: '20px', duration: 1000, delay: 1000 });
            window.sr.reveal('.sr50w300', { distance: '50px', duration: 1000, delay: 300 });
            window.sr.reveal('.sr50w800', { distance: '50px', duration: 1000, delay: 800 });
        }
    }
})();
