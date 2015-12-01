(function () {
    'use strict';

    angular
        .module('app.playersLogin')
        .controller('PlayersLoginController', PlayersLoginController);

    PlayersLoginController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function PlayersLoginController($q, dataservice, logger) {
        var vm = this;
        vm.news = {
            title: 'webapp',
            description: 'Players Login Configuration'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Players Login';

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople()];
            return $q.all(promises).then(function() {
                logger.info('Activated Players Login View');
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
