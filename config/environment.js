/* jshint node: true */

module.exports = function(environment) {
	var ENV = {
		modulePrefix: 'automat',
		firebase: {
			apiKey: 'AIzaSyDYOMyC4izA-4hYMoO1lV5isgt7btBoE78',
			authDomain: 'automat-e0927.firebaseapp.com',
			databaseURL: 'https://automat-e0927.firebaseio.com',
			storageBucket: 'automat-e0927.appspot.com'
		},

		contentSecurityPolicy: {
			'connect-src': '\'self\' https://auth.firebase.com wss://*.firebaseio.com'
		},
		environment: environment,
		rootURL: '/',
		locationType: 'auto',
		EmberENV: {
			EXTEND_PROTOTYPES: {
				Date: false,
				Array: true,
				String: true
			},
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			}
		},
		moment: {
			allowEmpty: true // default: false
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		}
	};

	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.rootURL = '/';
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {
		ENV.locationType = 'hash';
		ENV.rootURL = '/';

	}

	return ENV;
};
