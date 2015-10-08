function Control($scope, $timeout) {

	$scope.resetTime = function() {
		$scope.time = new Date();
	};

	var update = function() {
		$scope.resetTime();
		$timeout(update, 1000);
	};

	update();
}

function AlarmC($scope) {
	var newAlarm = $scope.newAlarm = {};
	var alarm = $scope.alarm = [
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

	$scope.remove = function(alarms) {
		alarm.splice(alarm.indexOf(alarms), 1);
	};
	$scope.create = function() {
		var parts = newAlarm.time.split(":");
		alarm.push({
			title: newAlarm.title,
			time: new Date(2015, 1, 1, parts[0], parts[1])
		});
		delete newAlarm.title;
		delete newAlarm.time;
	};
}
