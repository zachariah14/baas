(function () {
    'use strict';

    angular
        .module('app.gameProperties')
        .controller('GamePropertiesController', GamePropertiesController);

    GamePropertiesController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function GamePropertiesController($q, dataservice, logger) {
        var vm = this;
        vm.news = {
            title: 'webapp',
            description: 'Game Properties Configuration'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Game Properties';

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople()];
            return $q.all(promises).then(function() {
                logger.info('Activated Game Properties View');
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
