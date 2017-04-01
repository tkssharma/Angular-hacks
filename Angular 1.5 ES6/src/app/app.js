import angular from 'angular';
import uiRouter from 'angular-ui-router';
//import './app.css';
//import "css!./app.css";
import AppComponent from './app.component';
import Components from './components';
import Common from './common';
//import  './app.jpg';

const root = angular
	.module( 'app', [
		uiRouter,
		Components,
		Common
	])
	.component( 'weather', AppComponent )
	.name;

angular.bootstrap( document, [ 'app' ] );

export default root;
