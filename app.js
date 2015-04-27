/* Gabriel Velasquez
	 gvelasquez@gmail.com
	 thinkster.io/mean-stacktutorial

	 The purpose of this program is lean the MEAN stack in CRUD web development

	 app.js - angular app
*/

//name of the app
var app = angular.module('flapperNews', []);

//main controller of the app
app.controller('MainCtrl', [
'$scope',
function($scope){
	$scope.test = 'Hello world!';

	//new variable called posts that has a list of post titles
	$scope.posts = [
	{title: 'post 1', upvotes: 5},
	{title: 'post 2', upvotes: 2},
	{title: 'post 3', upvotes: 15},
	{title: 'post 4', upvotes: 9},
	{title: 'post 5', upvotes: 4}
];

}]);


