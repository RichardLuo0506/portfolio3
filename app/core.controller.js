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

        function toggleMenu(type) {
            if (type === 'menu') {
                var top = $('body').scrollTop();
                $('body').scrollTop(0);
                $('.ui-vv').css({ marginTop: -top });
                core.menuIsOpen = true;
            } else if (type === 'view') {
                var top = $('.ui-vv').css('marginTop');
                core.menuIsOpen = false;
                var scrollTop = top.slice(0, -2) * -1;
                $('.ui-vv').css({ marginTop: 0 });
                setTimeout(function() {
                    $('body').scrollTop(top.slice(0, -2) * -1);
                }, 0);
            } else if (type === 'link') {
                $('body').scrollTop(0);
                core.menuIsOpen = false;
                $('.ui-vv').css({ marginTop: 0 });
            }
        }
    }
})();
