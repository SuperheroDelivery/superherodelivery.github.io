superheroApp.controller('formCode', ['$scope',  '$http',
    function($scope, $http) {
          $scope.zipcode = '';

          $scope.goToRestaurants = function ()
          {
            window.location.replace("http://superherodelivery/restaurants.html");
                 /*$http({
                    method: 'GET',
                    url: 'http://188.166.116.179/restaurants?country=IS&postal_code=101'
                    }).then(function successCallback(response) {
                        console.log(response);
                    }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });*/
          }



    }
]);