(function() {
    'use strict';

    angular
        .module('demoApp',['ng-duallist'])
        .controller('demoController', demoController);

    demoController.$inject = ['$rootScope'];

    /* @ngInject */
    function demoController($rootScope){
        var vm = this;
        vm.property = 'demoController';
        

        activate();

        ////////////////

        function activate() {
  
            
            vm.leftValue=[{'name':'satish1'},{'name':'manish1'}]
             vm.rightValue=[{'name':'satish2'},{'name':'manish2'}]
          
        }
    }
})();