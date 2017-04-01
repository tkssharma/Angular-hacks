
class WeatherService {
	constructor ( $http) {
		this.$http = $http;
	}
	getWeather () {
		debugger;
		return this.$http.get( 'http://localhost:3000/weather' ).then( response => response.weather );
    debugger;
	}
}

WeatherService.$inject = ['$http'];

export default WeatherService;
