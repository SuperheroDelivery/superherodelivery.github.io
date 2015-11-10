superheroApp.service('restaurantService', ['$http', function($http) {

    this.getProducts;
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

    this.getProducts = function(id)
    {
        var url = "http://api.superherodelivery.com/restaurants/"+id+"/products";
            var promise = $http({
                method: 'GET',
                url: url
               
            });
            return promise;   
    }


    

}]);