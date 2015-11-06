superheroApp.controller('getProducts', ['$scope',  '$http', '$location', 'restaurantService',
    function($scope, $http, $location, restaurantService) {
          
          $scope.total = 0;

          

          $scope.getParameter = function(sParam)
          {
              var sPageURL = decodeURIComponent(window.location.search.substring(1)),
              sURLVariables = sPageURL.split('&'),
              sParameterName,
              i;

              for (i = 0; i < sURLVariables.length; i++) {
              sParameterName = sURLVariables[i].split('=');

              if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
          }

           $scope.restaurantId = $scope.getParameter('id');

           restaurantService.getProducts($scope.restaurantId).success(function(data)
           {
             $scope.Products = data;

           });

           $scope.calculateQuantityPlus = function(index,unitPrice)
           {
              number = $( "input[name$='quantity-"+index+"']" ).val();
              totalQuantity = parseInt(number)+1;
              number = $( "input[name$='quantity-"+index+"']" ).val(totalQuantity);
              updatePrice = parseInt(totalQuantity)*parseFloat(unitPrice);
              $( "#amount-"+index ).text("Kr. "+updatePrice.toFixed(2));
              $scope.total = $scope.total + unitPrice; 
              
           }

           $scope.calculateQuantitySub = function(index,unitPrice)
           {
               number = $( "input[name$='quantity-"+index+"']" ).val();
                if (number > 0) 
                {
                  totalQuantity = parseInt(number)-1;
              number = $( "input[name$='quantity-"+index+"']" ).val(totalQuantity);
              updatePrice = parseInt(totalQuantity)*parseFloat(unitPrice);
              $( "#amount-"+index ).text("Kr. "+updatePrice.toFixed(2));
              $scope.total = $scope.total - unitPrice;    
                };

           }

           $scope.clearAll = function()
           {
              for (var i = $scope.Products.length - 1; i >= 0; i--) {
                 
                  number = $( "input[name$='quantity-"+i+"']" ).val("0");
                  $( "#amount-"+i ).text("Kr. 0");
                };  
              
                 $scope.total = 0;
           }
            
        


    }
]);