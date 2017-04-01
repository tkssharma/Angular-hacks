
import angular from 'angular';
import appProfile from './profile';
import appWeather from './weather';

const components = angular
  .module('weather', [
      appWeather
  ])
  .name;

export default components;
