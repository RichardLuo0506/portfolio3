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
            var top = $('body').scrollTop();
            $('body').scrollTop(0);
            $('.ui-vv').css({marginTop: -top});
            core.menuIsOpen = !core.menuIsOpen;
        }
    }
})();
