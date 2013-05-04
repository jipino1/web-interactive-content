/**
 * @module view/SubView
 */

define(function (require) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		App = require('global'),
		Swig = require('swig'),
		Easing = require('easing');
		
	var _$appContent = $('#app-content');

	return Backbone.View.extend({

		'events': {

		},

		'initialize': function (options) {
			var view = this;

			_.bindAll(this);

			view.render();

			log('Backbone : Global : AboutSubView : Initialized');
		},

		'render': function () {
			var view = this;

			/*view.aboutTemplate = swig.compile(App.templates.AboutTemplate);
			view.$el.append(view.aboutTemplate({
				
			}));*/
		}
	});

});