(function() {
    'use strict';

    angular
        .module('app.gameAssets')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'gameAssets',
                config: {
                    url: '/gameAssets',
                    templateUrl: 'app/build/game/assets/gameAssets.html',
                    controller: 'GameAssetsController',
                    controllerAs: 'vm',
                    title: 'gameAssets',
                    settings: {
                        nav: 2,
                        content: '<span class="sidebar-item">Assets</span>'
                    }
                }
            }
        ];
    }
})();
