/**
 * @module global
 */

define(function (require, exports, module) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Modernizr = require('modernizr'),
		Backbone = require('backbone'),
		Swig = require('swig'),
		Analytics = require('helpers/analytics'),
		Utilities = require('helpers/utilities'),
		App = require('app/index'),
		settings = require('settings');

	_.extend(App, {

		'config': new App.models.AppConfig(settings),

		'cache': {
			'routers': {},
			'models': {},
			'collections': {},
			'views': {}
		},

		/**
		 * Initialize Application. Responsible for instantiating Backbone router
		 * and starting Backbone history.
		 * @method App.initialize
		 */
		'initialize': function () {
			Utilities.initialize();
			Analytics.initialize({
				'gaAccountId': App.config.get('gaAccountId'),
				'trackingMap': App.trackingMap
			}).pageTrack('/index');

			App.bindCustomEvents();

			App.cache.routers.appRouter = new App.routers.AppRouter();
			Backbone.history.start();

			App.cache.views.indexView = new App.views.IndexView({
				'el': '#app-wrapper'
			});
			
			App.cache.views.aboutView = new App.views.AboutView({
				'el': '#app-wrapper'
			});
			
			App.cache.views.portfolioView = new App.views.PortfolioView({
				'el': '#app-content'
			});

			log('App : Initialized');
			return this;
		},

		/**
		 * Use this function to bind tracking against any custom event
		 * triggered against the global Event object.
		 * @method App.bindCustomEvents
		 */
		'bindCustomEvents': function () {
			window.Events = _.extend({}, Backbone.Events);

			Events.bind('trackPage', function (pageName) {
				Analytics.pageTrack(pageName);
			});

			log('App : Custom Events Binding Complete');
			return this;
		},
		'trackingMap': {
			'click': {
				'section-main': function (e) {
					Analytics.customEventTrack(['param1', 'param2', 'param3']);
				}
			}
		}
	});

	exports = _.extend(exports, App);

});