angular.module('myApp', [])
.controller('DisplayCtrl', function($scope) {
    $scope.$on('displayData', function(event, data) {
      $scope.content = data;
    });
 })
.controller('MultiplicationCtrl', function($scope, $attrs, $rootScope) {

	$scope.setActiveNumber = function(number) {
		$rootScope.$broadcast('displayData', number);
	};
	function populateNumbers(x) {
		var numbers = [];
		for(var i=0; i<x; i++) {
	  		numbers[i] = i + 1; 
		}
		return numbers;
	}
	$scope.compute = function(a,b) {
		//console.log("compute", a, b);
		return a * b;
	}
	$scope.$watch('numberLimit', function(limit) {
		$scope.numbers = populateNumbers(limit);
	});
	$scope.numberLimit = $attrs.initialNumberLimit || 10;

	var activeFactorA, activeFactorB;
	$scope.setActiveFactors = function(a, b) {
		activeFactorA = a;
		activeFactorB = b;
		console.log("set active factor a, b", activeFactorA , activeFactorB);
	};

	$scope.matchesFactor = function (a, b) {
		console.log("matches factor", a === activeFactorA || b === activeFactorB);
		return a === activeFactorA || b === activeFactorB;
	};
	$scope.clearActiveFactors = function() {
		activeFactorA = activeFactorB = null; 
	};
});
