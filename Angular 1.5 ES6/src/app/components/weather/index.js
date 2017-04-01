
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import WeatherComponent from './weather.component';
import WeatherService from './weather.service';

const appWeather = angular
	.module('appWeather', [
		uiRouter
	])
	.service('WeatherService', WeatherService)
	.component('weatherComp', WeatherComponent)
	.config( ($stateProvider, $urlRouterProvider) => {

		'use strict';

		$stateProvider
			.state('weather', {
				url: '/weather',
				component: 'weatherComp',
				 resolve: {
					 //console.log('')
				 list: WeatherService => WeatherService.getWeather()
				 }
			});

		$urlRouterProvider.otherwise('/');

	} )
	.name;

export default appWeather;
