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
            vm.leftValue = [];
            var leftcounter = 0;
            vm.rightValue = [];
            var rightcounter = 0;
            vm.addValue = [];
            vm.removeValue = [];

            function loadMoreLeft() {
                for (var i = 0; i < 15; i++) {
                    vm.leftValue.push({
                        'name': 'left' + leftcounter
                    });
                    leftcounter += 10;
                }



            }

            function loadMoreRight() {
                for (var i = 0; i < 15; i++) {
                    vm.rightValue.push({
                        'name': 'right' + rightcounter
                    });
                    rightcounter += 10;
                }


            }


            vm.options = {
                leftContainerScrollEnd: function () {
                    loadMoreLeft()


                },
                rightContainerScrollEnd: function () {
                    loadMoreRight();

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
                rightContainerLabel: 'Selected Lists',
                onMoveRight: function () {
                    console.log('right');
                    console.log(vm.addValue);

                },
                onMoveLeft: function () {
                    console.log('left');
                    console.log(vm.removeValue);
                }

            };
            console.log(vm.options)
            loadMoreLeft();
            loadMoreRight();


            var leftValue = angular.copy(vm.leftValue)

            var rightValue = angular.copy(vm.rightValue)

        }
    }
})();