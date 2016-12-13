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

        function toggleMenu(open) {
            console.log('', open);
            if (open) {
                var top = $('body').scrollTop();
                $('body').scrollTop(0);
                $('.ui-vv').css({ marginTop: -top });
                core.menuIsOpen = true;
            } else {
                var top = $('.ui-vv').css('marginTop');
                core.menuIsOpen = false;
                var scrollTop = top.slice(0, -2) * -1;
                console.log('', scrollTop);
                $('.ui-vv').css({ marginTop: 0 });
                setTimeout(function() {
                    $('body').scrollTop(top.slice(0, -2) * -1);
                }, 0);
            }
        }
    }
})();
