superheroApp.controller('formCode', ['$scope',  '$http',
    function($scope, $http) {
          $scope.zipcode = '';

          $scope.goToRestaurants = function ()
          {
            //window.location.replace("http://superherodelivery/restaurants.html");
                 $http({
                    method: 'GET',
                    url: 'http://188.166.116.179/restaurants?country=IS&postal_code='+$scope.zipcode
                    }).then(function successCallback(response) {
                        console.log(response);
                        window.location.replace("http://superherodelivery.github.io/restaurants.html?country=IS&postal_code="+$scope.zipcode);
                    }, function errorCallback(response) {
                        console.log(response);
                        swal({   title: "Error!",   text: response.data,   type: "error",   confirmButtonText: "Try another" });
                });
          }



    }
]);