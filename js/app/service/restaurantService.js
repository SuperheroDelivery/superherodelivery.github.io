superheroApp.service('restaurantService', ['$http', function($http) {

	this.getRestaurants = function(zipcode)
	{
		
            var url = "http://188.166.116.179/restaurants";
            var promise = $http({
                method: 'GET',
                url: url,
                params: {
                    country:'IS',
                    postal_code: zipcode
                }
            });
            return promise;
        
	}
    

}]);