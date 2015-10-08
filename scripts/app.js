angular.module("alarmClock", []).
	config(["$routeProvider", function($routeProvider) {
		$routeProvider.otherwise({ templateUrl: "setAlarm.html", controller: AlarmCtrl });
	}]);