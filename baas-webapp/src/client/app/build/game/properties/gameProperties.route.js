(function() {
    'use strict';

    angular
        .module('app.gameProperties')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'gameProperties',
                config: {
                    url: '/',
                    templateUrl: 'app/build/game/properties/gameProperties.html',
                    controller: 'GamePropertiesController',
                    controllerAs: 'vm',
                    title: 'gameProperties',
                    settings: {
                        nav: 1,
                        content: '<div class="menu-group-title first"> <span>GAME</span> </div> ' +
                        '<span class="sidebar-item">Properties</span>'
                    }
                }
            }
        ];
    }
})();
