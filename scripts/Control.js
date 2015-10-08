"use strict";

describe("Control", function() {
	var scope, control;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		control = $controller(Control, { $scope: scope });
	}));

	it("should create a 'time' model containing a Date", function() {
		expect(angular.isDate(scope.time)).toBe(true);
	});

});
