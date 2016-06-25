(function () {
	'use strict';

	angular
		.module('starter')
		.controller('ChatDetailCtrl', ChatDetailCtrl);

	/** @ngInject */
	function ChatDetailCtrl($scope, $stateParams, Chats) {
		$scope.chat = Chats.get($stateParams.chatId);
	}
})();
