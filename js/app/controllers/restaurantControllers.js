superheroApp.controller('getRestaurant', ['$scope',  '$http', '$location', 'restaurantService',
    function($scope, $http, $location, restaurantService) {
                  
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

           $scope.zipcode = $scope.getParameter('postal_code');

           restaurantService.getRestaurants($scope.zipcode).success(function(data)
           {
             $scope.Restaurants = data;
           });
            
        


    }
]);