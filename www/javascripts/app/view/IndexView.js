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

			view.subview = new App.views.SubView({
				'el': '#app-wrapper'
			});
			
			view.trendView = new App.views.TrendView({
				'el': '#app-trending'
			});
			
			view.thumbGalleryView = new App.views.ThumbGalleryView({
				'el': '#app-thumb-gallery'
			});
			
			/*view.artistThumbGalleryView = new App.views.ArtGalleryThumbsView({
				'el': '#app-artist-gallery'
			});*/
			
			view.imageGalleryView = new App.views.ImageGalleryView({
				'el': '#app-wrapper'
			});
			
			view.portfolioView = new App.views.PortfolioView({
				'el': '#app-main'
			});
		}

	});

});