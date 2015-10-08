angular.module("Clock", []).
	config(["$routeProvider", function($routeProvider) {
		$routeProvider.otherwise({ templateUrl: "setAlarm.html", controller: AlarmC });
	}]);
