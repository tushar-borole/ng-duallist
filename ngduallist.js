(function () {
    'use strict';

    angular
        .module('ng-duallist', [])
        .directive('duallist', ngDuallist)
        .run(templateCache)

    ngDuallist.$inject = ['$rootScope', '$filter'];
    templateCache.$inject = ['$templateCache'];

    /* @ngInject */
    function ngDuallist($rootScope, $filter) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'E',
            scope: {
                leftscope: '=',
                rightscope: '='
            },
            bindToController: false,
            controller: Controller,
            controllerAs: 'vm',
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'dual/duallist.html';
            },
            replace: true
        };
        return directive;

        function link(scope, element, attrs, controller) {


            $(element).find('.left-container').bind('scroll', function () {
                if ($(this)[0].scrollHeight - $(this).scrollTop() === $(this).outerHeight()) {

                };
            });


            $(element).find('.right-container').bind('scroll', function () {
                if ($(this)[0].scrollHeight - $(this).scrollTop() === $(this).outerHeight()) {

                };
            });



        }

    }
    
       Controller.$inject = ['$scope'];

    /* @ngInject */
    function Controller($scope) {
        
        



            /**
             * @description move the selected item to the right
             */
            $scope.moveRight = function () {
             
                //var leftSelectedValue=$filter()
                angular.forEach($scope.leftscope, function (val) { // push the value to right array
                    if (val.selected) {
                        val.selected = false
                        $scope.rightscope.push(val);
                        //delete val;
                        var index = $scope.leftscope.indexOf(val)
                        $scope.leftscope.splice(index, 1)
                    }

                });
            };


            /**
             * @description move the selected item to the left
             */
            $scope.moveLeft = function () {
                //var leftSelectedValue=$filter()
                angular.forEach($scope.rightscope, function (val) { // push the value to right array
                    if (val.selected) {
                        val.selected = false
                        $scope.leftscope.push(val);
                        var index = $scope.rightscope.indexOf(val)
                        $scope.rightscope.splice(index, 1)
                            //delete val;
                    }

                });
            };



            /**
             * @description select all left container
             */
            $scope.selectAllLeftContainer = function () {

                angular.forEach($scope.leftscope, function (val) {
                    if ($scope.leftSelectAll) {
                        val.selected = true;
                    } else {
                        val.selected = false;
                    }
                })
            }

            /**
             * @description select all right container
             */
            $scope.selectAllRightContainer = function () {
                angular.forEach($scope.rightscope, function (val) {
                    if ($scope.rightSelectAll) {
                        val.selected = true;
                    } else {
                        val.selected = false;
                    }
                })

            }
        
    }

    function templateCache($templateCache) {
        $templateCache.put('dual/duallist.html', '<div class="row ngduallist"><div class="col-sm-4 left-container"> <div class="list-group" id="list1"> <a href="#" class="list-group-item active">List 1 <input title="toggle all" class="all pull-right" ng-model="leftSelectAll" ng-change="selectAllLeftContainer()" type="checkbox"></a> <a ng-repeat="data in leftscope" href="#" class="list-group-item">{{data.name}}<input class="pull-right" ng-model="data.selected" type="checkbox"></a>  </div></div><div class="col-md-2 v-center"> <button ng-click="moveRight()"  title="Send to list 2" class="btn btn-default center-block add"><i class="glyphicon glyphicon-chevron-right"></i></button> <button ng-click="moveLeft()" title="Send to list 1" class="btn btn-default center-block remove"><i class="glyphicon glyphicon-chevron-left"></i></button> </div><div class="col-sm-4 right-container"> <div class="list-group" id="list2"> <a href="#" class="list-group-item active">List 2 <input ng-model="rightSelectAll" ng-change="selectAllRightContainer()" title="toggle all" class="all pull-right" type="checkbox"></a> <a ng-repeat="data in rightscope" href="#" class="list-group-item">{{data.name}} <input ng-model="data.selected"  class="pull-right" type="checkbox"></a>  </div></div></div>');

    }






})();