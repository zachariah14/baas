(function() {
    'use strict';

    angular
        .module('app.playersProperties')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'playersProperties',
                config: {
                    url: '/playersProperties',
                    templateUrl: 'app/build/players/properties/playersProperties.html',
                    controller: 'PlayersPropertiesController',
                    controllerAs: 'vm',
                    title: 'playersProperties',
                    settings: {
                        nav: 4,
                        content: '<span class="sidebar-item">Properties</span>'
                    }
                }
            }
        ];
    }
})();
