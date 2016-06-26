(function () {
	'use strict';

	angular
		.module('starter')
		.controller('ChatDetailCtrl', ChatDetailCtrl);

	/** @ngInject */
	function ChatDetailCtrl($stateParams, Chats) {
		var vm = this;
		
		vm.chat = Chats.get($stateParams.chatId);
	}
})();
