/**
 * @module index
 */

define(function (require) {

	'use strict';

	return {

		'routers': {
			'AppRouter': require('router/AppRouter')
		},

		'models': {
			'AppConfig': require('model/AppConfig'),
			'PortfolioModel': require('model/PortfolioModel')
		},

		'collections': {
			'PortfolioCollection': require('collection/PortfolioCollection')
		},

		'views': {
			'IndexView': require('view/IndexView'),
			'SubView': require('view/SubView'),
			'TrendView': require('view/TrendView'),
			'ThumbGalleryView': require('view/ThumbGalleryView'),
			'ImageGalleryView': require('view/ImageGalleryView'),
			'AboutView': require('view/AboutView'),
			'AboutSubView': require('view/AboutSubView'),
			'PortfolioView': require('view/PortfolioView')
		},

		'templates': {
			//'HomeTemplate': require('plugins/text!template/HomeTemplate.html'),
			'TrendTemplate': require('plugins/text!template/TrendTemplate.html'),
			'ThumbGalleryTemplate': require('plugins/text!template/ThumbGalleryTemplate.html'),
			'ImageGalleryTemplate': require('plugins/text!template/ImageGalleryTemplate.html')
			//'AboutTemplate': require('plugins/text!template/AboutTemplate.html')
		}

	};

});