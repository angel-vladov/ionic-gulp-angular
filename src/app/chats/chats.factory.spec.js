describe('Chats', function () {
	'use strict';

	var _;
	var Chats;

	beforeEach(module('starter'));

	beforeEach(
		inject(function (_Chats_, $window) {
			_ = $window._;
			Chats = _Chats_;
		})
	);

	it ('should return an array with chats', function () {
		expect(Chats.all()).toEqual(jasmine.any(Array));
	});

	it ('has a valid id on all chat entries', function () {
		var allChats = Chats.all();

		_.forEach(allChats, function (chat) {
			expect(chat.id).toEqual(jasmine.any(Number));
		});
	});

	it ('removes exactly one chat entry', function () {
		var chatsBefore = Chats.all();
		var initialLength = chatsBefore.length;
		var toRemove = _.sample(chatsBefore);

		Chats.remove(toRemove);

		expect(initialLength - 1).toEqual(Chats.all().length);
	});

	it ('removes exactly one chat entry', function () {
		var toRemove = _.sample(Chats.all());

		Chats.remove(toRemove);

		expect(Chats.all()).not.toContain(toRemove);
	});

	it ('gets correct chat by id', function () {
		var randomChat = _.sample(Chats.all());
		var resultChat = Chats.get(randomChat.id);

		expect(resultChat.id).toEqual(randomChat.id);
	});
});