describe('ChatDetailCtrl', function () {
	'use strict';

	var chatDetailCtrl;
	var Chats;
	var $stateParams;
	var scope;

	beforeEach(module('starter'));

	beforeEach(function () {
		module(function($provide){
			$provide.value('$stateParams', {
				chatId: 2
			});
		});
	});

	beforeEach(
		inject(function ($rootScope, $controller, _$stateParams_, _Chats_) {
			scope = $rootScope.$new();
			Chats = _Chats_;
			$stateParams = _$stateParams_;

			Chats.get = jasmine.createSpy('get').and.returnValue({
				chatId: _$stateParams_
			});

			chatDetailCtrl = $controller('ChatDetailCtrl', {
				$scope: scope,
				$stateParams: $stateParams,
				Chats: Chats
			});
		})
	);

	it ('should call Chats.get with route param chatId', function () {
		expect(Chats.get).toHaveBeenCalledWith($stateParams.chatId);
	});

	it ('should remember active chat', function () {
		expect(chatDetailCtrl.chat).toBeDefined();
	});
});