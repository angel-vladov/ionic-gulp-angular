(function () {
	'use strict';

	angular
		.module('starter')

		.controller('AccountCtrl', AccountCtrl);

	/** @ngInject */
	function AccountCtrl($scope) {
		$scope.settings = {
			enableFriends: false
		}
	}
})();
