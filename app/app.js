//Define an angular module for our app
var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('autocompleteController', function($scope, $http, $filter) {

$scope.myData = $http.get("ajax/myData.json").success(function(data){
        $scope.myData = data;
});

$scope.myFunc = function () {
        $scope.myData1 = $scope.myData;
    }
	
$scope.IsVisible = false;

        $scope.ShowHide = function(){
            $scope.IsVisible = $scope.IsVisible = true;
        }  
	  
 }); 




