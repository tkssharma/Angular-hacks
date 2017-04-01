import WeatherService from './weather.service';


class WeatherController {

    constructor($http) {
        this.$http = $http;

    }

    $onInit() {
        console.log('team running ');
    }

}

WeatherController.$inject = ['$http'];

export default WeatherController;
