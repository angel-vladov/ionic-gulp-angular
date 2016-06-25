// Mockup cordova implementation to use with ng-cordova
(function () {
	'use strict';

	if (window.cordova) {
		return;
	} else {
		window.cordova = {};
	}

	// $cordovaAppVersion
	cordova.getAppVersion = {
		getAppName: function (callback) {
			callback('APP_NAME');
		},
		getPackageName: function (callback) {
			callback('MOCK_N');
		},
		getVersionNumber: function (callback) {
			callback('MOCK_V');
		},
		getVersionCode: function (callback) {
			callback('MOCK_C');
		}
	};

	// Add custom cordova plugins mock code here. It will be used only when testing in the browser.
}) ();