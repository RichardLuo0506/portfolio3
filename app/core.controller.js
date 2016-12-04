(function() {
    'use strict';
    // Include app dependency on ngMaterial 

    angular
        .module('App')
        .controller('core', core);

    core.$inject = [];

    function core() {
        var core = this;

        core.toggleMenu = toggleMenu;

        init();

        function init() {
            core.menuIsOpen = false;
        }

        function toggleMenu() {
            core.menuIsOpen = !core.menuIsOpen;
        }
    }
})();