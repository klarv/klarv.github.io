function ClockCtrl($scope, $timeout) {

	$scope.resetTime = function() {
		$scope.time = new Date();
	};

	var update = function() {
		$scope.resetTime();
		$timeout(update, 1000);
	};

	update();
}

function AlarmCtrl($scope) {
	var newAlarm = $scope.newAlarm = {};
	var alarms = $scope.alarms = [
		{
			title: "Do Test and Make it work",
			time: new Date(2015, 1, 1, 11, 0, 1),
			repeat: 3
		},
		{
			title: "Hopefully get in",
			time: new Date(2015, 1, 1, 9, 0, 1),
			schedule: ["at some point"]
		},
		{
			title: "Celebrate",
			time: new Date(2015, 1, 1, 21, 0, 1),
			schedule: ["All night long"]
		}
	];

	$scope.remove = function(alarm) {
		alarms.splice(alarms.indexOf(alarm), 1);
	};
	$scope.create = function() {
		var parts = newAlarm.time.split(":");
		alarms.push({
			title: newAlarm.title,
			time: new Date(1970, 1, 1, parts[0], parts[1])
		});
		delete newAlarm.title;
		delete newAlarm.time;
	};
}

			