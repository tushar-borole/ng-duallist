(function () {
    'use strict';

    angular
        .module('ng-duallist',[])
        .directive('duallist', ngDuallist)
        .run(templateCache)

    ngDuallist.$inject = ['$rootScope'];
    templateCache.$inject = ['$templateCache'];

    /* @ngInject */
    function ngDuallist($rootScope) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict :'E',
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'dual/duallist.html';
            },
            replace: true
        };
        return directive;

        function link(scope, element, attrs, controller) {

        }
    }

    function templateCache($templateCache) {
        $templateCache.put('dual/duallist.html', '<div class="modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" aria-label="Close" ng-click="$hide()"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>');

    }






})();