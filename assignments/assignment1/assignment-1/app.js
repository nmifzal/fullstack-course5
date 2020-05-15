(function (){
  'use strict';

  angular.module('check',[])
  .controller('chcontroller',chcontroller);

  chcontroller.$inject = ['$scope'];
  function chcontroller($scope){


   $scope.open = function(){
    if ($scope.message == null || $scope.message == " " ) 
      { $scope.result = "Please enter data first"; }
    else{
     var arr=$scope.message;
     var arr1= arr.split(',');
          if (arr.length == 0) {
            $scope.result = "Please enter data first";
          }
        else if (arr1.length <= 3) {
              $scope.result = "Enjoy!";
          }
          else 
          {
              $scope.result = "Too much!";
          }
        }
    };     

  }

})();
