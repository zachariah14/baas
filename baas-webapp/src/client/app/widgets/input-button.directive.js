(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('inputButton', inputButton);

    /* @ngInject */
    function inputButton($compile) {

        var directive = {
            restrict: 'EA',
            scope: {
                placeholder: '&?',
                items: '=dropdownData',
                doSelect: '&selectVal',
                selectedItem: '=preselectedItem'
            },
            link: function (scope, element, attrs) {
                var html = '';
                switch (attrs.menuType) {
                    case "button":
                        html += '<div class="btn-group">' +
                            '<button class="btn btn-default btn-xs button-label outline">{{setPlaceholder()}}</button>' +
                            '<button class="btn btn-default btn-xs dropdown-toggle outline" data-toggle="dropdown"><span class="caret"></span></button>';
                        break;
                    default:
                        html += '<div class="dropdown"><a class="dropdown-toggle" role="button" data-toggle="dropdown"  href="javascript:;">Dropdown<b class="caret"></b></a>';
                        break;
                }
                html +=
                    '<ul class="dropdown-menu">' +
                    '<li ng-repeat="item in items">' +
                    '<a tabindex="-1" data-ng-click="selectVal(item)">{{item.name}}</a>' +
                    '</li>' +
                    '</ul></div>';
                element.append($compile(html)(scope));

                if (scope && scope.items) {
                    for (var i = 0; i < scope.items.length; i++) {
                        if (scope.items[i].id === scope.selectedItem) {
                            scope.bSelectedItem = scope.items[i];
                            break;
                        }
                    }
                }
                scope.selectVal = function (item) {
                    if (item === undefined || item == null)
                        return;
                    switch (attrs.menuType) {
                        case "button":
                            $('button.button-label', element).html(item.name);
                            break;
                        default:
                            $('a.dropdown-toggle', element).html('<b class="caret"></b> ' + item.name);
                            break;
                    }
                    scope.doSelect({
                        selectedVal: item.name
                        //selectedVal: item.id
                    });
                };
                scope.selectVal(scope.bSelectedItem);

                scope.setPlaceholder = function () {
                    return attrs.placeholder;
                };
            }
        };

        return directive;
    }

})();
