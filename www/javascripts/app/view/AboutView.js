/**
 * @module view/ExampleView
 */

define(function (require) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		App = require('global');

	return Backbone.View.extend({

		'events': {},

		'initialize': function (options) {
			var view = this;

			_.bindAll(this);

			view.render();

			log('Backbone : Global : IndexView : Initialized');
		},

		'render': function () {
			var view = this;

			view.aboutSubView = new App.views.AboutSubView({
				'el': '#app-content-about'
			});
		}

	});

});