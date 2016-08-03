(function(){
    "use strict";

    angular
        .module('dorksStore.login', [
            'inform',
            'satellizer',
        ])
        .config(loginConfig)
        .controller('loginCtrl', login)

    loginConfig.$inject = ['$authProvider'];
    function loginConfig($authProvider){
        $authProvider.loginUrl = 'http://dorks.loc/dorksAPI/public/api/auth';
        $authProvider.tokenName = 'token';
        $authProvider.tokenPrefix = 'user';
    }

    login.$inject = ['$auth'];
    function login($auth){
        var vm = this;

        vm.send = sendForm;

        function sendForm(){
            var user = {
                "grant_type": "password",
                "client_id": "client45jw",
                "client_secret": "floster#481$p",
                username: vm.nickName,
                password: vm.password,
            }

            $auth.login(user)
            .then(function(res){
                console.log('bienvenido', res);
                //$location.path("/")
            })
            .catch(function(res){
                console.log('Error', res);
            });
        }
    }
})();
