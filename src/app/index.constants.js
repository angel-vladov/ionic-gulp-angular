/* global urljoin, moment */
(function () {
	'use strict';

	angular
		.module('starter')

		// Application Constants
		//.constant('foo', 'bar')

		// Third party JS libraries
		.constant('urljoin', urljoin)
		.constant('moment', moment);
})();
