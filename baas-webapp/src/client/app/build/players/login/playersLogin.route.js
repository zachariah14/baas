(function() {
    'use strict';

    angular
        .module('app.playersLogin')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'playersLogin',
                config: {
                    url: '/playersLogin',
                    templateUrl: 'app/build/players/login/playersLogin.html',
                    controller: 'PlayersLoginController',
                    controllerAs: 'vm',
                    title: 'playersLogin',
                    settings: {
                        nav: 3,
                        content: '<div class="menu-group-title"> <span>PLAYERS</span> </div>' +
                        '<span class="sidebar-item">Login</span>'
                    }
                }
            }
        ];
    }
})();
