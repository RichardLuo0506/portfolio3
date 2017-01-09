(function() {
    'use strict';
    // Include app dependency on ngMaterial 

    angular
        .module('App')
        .controller('contact', contact);

    contact.$inject = ['$timeout'];

    function contact($timeout) {
        var vm = this;

        init();

        vm.sendMail = sendMail;

        function init() {
            vm.btnText = "SEND MESSAGE";
        }

        function sendMail() {
            vm.btnText = "WORKING...";
            emailjs.send("richard_luo", "richard_luo_io", { from_name: vm.fromName, from_email: vm.fromEmail, body: vm.body }).then(function(res) {
                if (res.text === 'OK') {
                    $timeout(function() {
                        vm.btnText = 'SENT!';
                    }, 500);
                }
            }, function(err) {
                console.log('', err);
            });
        }
    }
})();
