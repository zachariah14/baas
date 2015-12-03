(function () {
    'use strict';

    angular
        .module('app.playersProperties')
        .controller('PlayersPropertiesController', PlayersPropertiesController);

    PlayersPropertiesController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function PlayersPropertiesController($q, dataservice, logger) {
        var vm = this;
        vm.news = {
            title: 'webapp',
            description: 'Players Properties Configuration'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Players Properties';

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople()];
            return $q.all(promises).then(function() {
                logger.info('Activated Players Properties View');
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
