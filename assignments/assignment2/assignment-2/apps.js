(function () {
'use strict';

var itemlist = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "cake",
    quantity: "2"
  }
];

angular.module('ShoppingListcheckoff', [])
.controller('Tobuy', Tobuy)
.controller('Alreadybought', Alreadybought)




// controller1
Tobuy.$inject = ['$scope'];
function Tobuy($scope)
{
  
  $scope.item = itemlist; 
   
}


// controller2
Alreadybought.$inject = ['$scope'];
function Alreadybought($scope)
{



 


}





})();
