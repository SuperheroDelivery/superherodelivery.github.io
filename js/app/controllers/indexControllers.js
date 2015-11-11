superheroApp.controller('formCode', ['$scope',  '$http',
    function($scope, $http) {
          $scope.zipcode = '';

          $scope.name = "";
          $scope.email = "";
          $scope.phone = "";
          $scope.message = ""; 
          $scope.subject = "";

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

          $scope.validate = function()
          {
              if ($scope.name == "" ||  $scope.email == "" || $scope.phone == "" || $scope.message == "" || $scope.subject =="" ) 
              {
                 
                 return false; 
                  
              }else
              {
                return true;
              }
              
          }

          $scope.contactForm = function()
          {
            
            if ($scope.validate()) 
              {
                swal({   title: "We got your message!!!",   text: "Thanks for your message",   type: "success",   confirmButtonText: "Send another" });
                 $scope.name = "";
          $scope.email = "";
          $scope.phone = "";
          $scope.message = ""; 
          $scope.subject = "";
              }
            else
            {
              swal({   title: "Error!",   text: "Complete the information on the form before send a message",   type: "error",   confirmButtonText: "Try again" });
            }

          }



    }
]);