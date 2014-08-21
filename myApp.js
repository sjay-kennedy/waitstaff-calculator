angular.module('myApp', [])

.controller('CalculatorCtrl', function($scope, $attrs, $rootScope) {

	
	$scope.tipArray = [];
	$scope.mealCount = null;
	$scope.submit = function(mealPrice,taxRate,tipPercentage) {
	
		var mealPrice = mealPrice;
		var taxRate = taxRate;
		var tipPercentage = tipPercentage;
		var tax = mealPrice * (taxRate / 100);
		$scope.subtotal = mealPrice + tax;
		$scope.tip = $scope.subtotal * (tipPercentage / 100);
		$scope.total = $scope.subtotal + $scope.tip;
		$scope.mealCount = $scope.mealCount +1;
		// figure average tip
		$scope.tipArray.push($scope.tip);
		$scope.tipTotal=0;
		for(var i in $scope.tipArray) { $scope.tipTotal += $scope.tipArray[i]; }
		$scope.averageTip = $scope.tipTotal / $scope.mealCount;
		// reset meal details
		$scope.mealPrice = null;
		$scope.taxRate = null;
		$scope.tipPercentage = null;
		
	};
	$scope.reset = function() {
		// reset all values
		$scope.subtotal = null;
		$scope.tip = null;
		$scope.total = null;
		$scope.mealCount = null;
		$scope.tipArray = [];
		$scope.tipTotal=null;
		$scope.averageTip = null;
		$scope.mealPrice = null;
		$scope.taxRate = null;
		$scope.tipPercentage = null;
	
		
	};
	$scope.cancelDetails = function() {
		// reset meal details
		$scope.mealPrice = null;
		$scope.taxRate = null;
		$scope.tipPercentage = null;
	
		
	};

});
