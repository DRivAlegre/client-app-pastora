angular.module('starter.controllers', [])
.service('GeoLocationService', function() {
	
	this.setSampleData = function() {
		return [
			{
      			center: {lat: 41.878, lng: -87.629},
        		population: 2714856
      		}
		];
	}
});