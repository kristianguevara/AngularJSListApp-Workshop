var app = angular.module("myApp", []);

app.controller('myController', [ '$scope', function($scope){
	$scope.message = "Hello World!";

	$scope.items = ['Oranges', 'Apples', 'Grapes'];
	$scope.oitems = [{id:1, name:'Doe'}, 
	{id:2, name:'John'}];

	$scope.showContent = function()
	{
		return $scope.showMe;
	};

	$scope.hideContent = function()
	{
		return $scope.hideMe;
	};

	$scope.clickMe = function()
	{
		alert("Successfully triggered ng-click!");
	};

	$scope.itemLists = [
	{id:1, fname:"John", lname:"Carter", email:"johncarter@email.com", checked:false},
	{id:2, fname:"Doe", lname:"Jon", email:"doejon@email.com", checked:false}];

	$scope.addItems = function()
	{
		$scope.itemLists.push({id:$scope.addId, fname: $scope.addFname, lname: $scope.addFname, email:$scope.addEmail, checked:false });
	};

	$scope.removeItems = function()
	{
		$scope.itemLists = _.filter($scope.itemLists, function(todo)
		{
			return !todo.checked;
		});
	};
}]);
