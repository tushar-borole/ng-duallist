(function () {
    'use strict';

    angular
        .module('demoApp', ['ng-duallist'])
        .controller('demoController', demoController);

    demoController.$inject = ['$rootScope', '$filter'];

    /* @ngInject */
    function demoController($rootScope, $filter) {
        var vm = this;
        vm.property = 'demoController';


        activate();

        ////////////////

        function activate() {


            vm.options = {
                leftContainerScrollEnd: function () {
                    console.log("inn")

                },
                rightContainerScrollEnd: function () {
                    console.log("inn")

                },
                leftContainerSearch: function (text) {
                    console.log(text)
                    vm.leftValue = $filter('filter')(leftValue, {
                        'name': text
                    })

                },
                rightContainerSearch: function (text) {

                    vm.rightValue = $filter('filter')(rightValue, {
                        'name': text
                    })
                },
                leftContainerLabel: 'Available Lists',
                rightContainerLabel: 'Selected Lists'

            };
            console.log(vm.options)

            vm.leftValue = [{
                'name': 'left1'
            }, {
                'name': 'left2'
            }, {
                'name': 'left3'
            }, {
                'name': 'left4'
            }, {
                'name': 'left5'
            }, {
                'name': 'left6'
            }, {
                'name': 'left7'
            }, {
                'name': 'left8'
            }, {
                'name': 'left9'
            }]
            var leftValue = angular.copy(vm.leftValue)
            vm.rightValue = [{
                'name': 'right1'
            }, {
                'name': 'Right2'
            }, {
                'name': 'Right3'
            }]
            var rightValue = angular.copy(vm.rightValue)

        }
    }
})();