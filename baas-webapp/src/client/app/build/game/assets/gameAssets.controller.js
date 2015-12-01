(function () {
    'use strict';

    angular
        .module('app.gameAssets')
        .controller('GameAssetsController', GameAssetsController);

    GameAssetsController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function GameAssetsController($q, dataservice, logger) {
        var vm = this;
        vm.news = {
            title: 'webapp',
            description: 'Game Assets Configuration'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Game Assets';

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople()];
            return $q.all(promises).then(function() {
                logger.info('Activated Game Assets View');
            });
        }

        function getMessageCount() {
            return dataservice.getMessageCount().then(function (data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                vm.people = data;
                return vm.people;
            });
        }
    }
})();
