"use strict";

console.log("Hello, app.js");
const app = angular.module("Portfolio", ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider.
    when('/#about',{
		templateUrl: 'partials/about.html'
	})
	.when('/#projects', {
        templateUrl:'partials/projects.html'
	})
    .when('/#contact', {
        templateUrl:'partials/contact.html'
	})
	.when('/#tech', {
        templateUrl:'partials/tech.html'
	}).
    otherwise('/');
});