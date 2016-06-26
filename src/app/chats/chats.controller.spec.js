describe('Chats Controller', function () {
	'use strict';

	var scope;
	var Chats;
	var chatsCtrl;

	beforeEach(module('starter'));

	beforeEach(
		inject(function ($rootScope, $controller, _Chats_) {
			scope = $rootScope.$new();
			Chats = _Chats_;

			spyOn(Chats, 'all').and.callThrough();
			spyOn(Chats, 'remove').and.callThrough();

			chatsCtrl = $controller('ChatsCtrl', {
				$scope: scope,
				Chats: Chats
			});
		})
	);

	it ('should read all chats', function () {
		expect(Chats.all).toHaveBeenCalled()
	});

	it ('should call Chats.remove once', function () {
		chatsCtrl.remove();

		expect(Chats.remove).toHaveBeenCalledTimes(1);
	});
});