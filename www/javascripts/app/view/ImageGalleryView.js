/**
 * @module view/ThumbGalleryView
 */

define(function (require) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		App = require('global'),
		Swig = require('swig'),
		Easing = require('easing');

	var _$body = $(document.body),
		_$document = $(document),
		_$imageContainer,
		_$portfolioContainer = $('#app-portfolio-gallery'),
		_$portfolioGallery,
		_$galleryCarousel,
		_$galleryRightArrow,
		_$galleryLeftArrow,
		_$closeModal,
		_$overlay = $('#overlay');
	
	var _imageArrayProperties = new Array();
		
	var _$thumbCarouselMask;
	
	var _initialCarouselPosition = -20,
		_carouselPosition = 1,
		_defaultTransition = 272,
		_offsetTransition = -25,
		_carouselCounter = 0,
		_dataLength,
		_currentImageIndex = 0;
		
	return Backbone.View.extend({

		'events': {
			'click #portfolio-right': 'displayNextImage',
			'click #portfolio-left': 'displayPreviousImage',
			'click #work a' : 'getCurrentTarget'
			//'click #app-thumb-gallery .left-arrow': 'moveCarouselLeft'
		},

		'initialize': function (options) {
			var view = this;

			_.bindAll(this);

			view.render();
			
			Events.bind('display-selected', view.displaySelectedImage);
			Events.bind('image-array-set', view.setImagePathArray);
			
			view.portfolioCollection = new App.collections.PortfolioCollection();
			
			log('Backbone : Global : ImageGalleryView : Initialized');
		},

		'render': function () {
			var view = this;

			view.imageGalleryTemplate = swig.compile(App.templates.ImageGalleryTemplate);
			view.$el.find('#app-portfolio-gallery').append(view.imageGalleryTemplate({
				
			}));
		},
		
		'getCurrentTarget' : function(e){
			e.preventDefault();
			
			var view = this,
				$currentTarget = $(e.currentTarget);
				
			view.displaySelectedImage($currentTarget);
		},
		
		'displaySelectedImage' : function(target){
			var view = this,
				imgSrcFullSizePath = view.getFullSizeImagePath(target.find('img').attr('src')),
				imgHeight = parseInt(target.find('img').attr('data-fs-height')) + 40,
				imgWidth = parseInt(target.find('img').attr('data-fs-width')),
				imgContainerMarginLeft = view.calculateContainerLeftMargin(imgWidth),
				imgContainerMarginTop = view.calculateContainerTopMargin(imgHeight),
				imgSrcString = '<img src="' + imgSrcFullSizePath + '" height="'+ target.find('img').attr('data-fs-height') +'" width="'+ target.find('img').attr('data-fs-width') +'" />';
				
			if(_$body.hasClass('home')){
				imgSrcString += '<p>'+ view.portfolioCollection.getSelectedText(target.find('img').attr('data-client')) +'</p>';
			}
			
			_$galleryCarousel = $('#thumb-gallery-carousel');
			_$imageContainer = $('#image-container');
			_$portfolioGallery = $('#portfolio-gallery');
			_$closeModal = $('#close-modal');
			_$galleryRightArrow = $('#app-portfolio-gallery .right-arrow');
			_$galleryLeftArrow = $('#app-portfolio-gallery .left-arrow');
			
			if(_$body.hasClass('artist')){
				_$portfolioContainer.addClass('setLeftMargin');
				_$imageContainer.addClass('setContainerWidth');
				_$portfolioGallery.css({'height': (imgHeight - 17) + 'px'});
			}else{
				_$portfolioContainer.css({ 'margin-left' : imgContainerMarginLeft + 'px' });
				_$imageContainer.css({ 'height' : imgHeight + 'px', 'width' : imgWidth + 'px' });
			}
			
			
			
			_currentImageIndex = Number(target.find('img').attr('data-position'));
			_$imageContainer.append(imgSrcString);
			
			if(_$body.hasClass('artist')){
				_$imageContainer.find('img').css({'margin-left' : view.calculateImageLeftMargin(imgWidth) + 'px' });
			}
		
			if(_$body.hasClass('about')){
				_$overlay.show().addClass('aboutSectionHeight');
			}else{
				_$overlay.removeClass('aboutSectionHeight');
				_$overlay.show().css({ 'height' : _$document.height() + 'px' });
			}
			
			
			_$portfolioGallery.show();
			_$portfolioGallery.animate({
				opacity: 1
			}, 300, 'linear', function(){
				_$overlay.show();
				_$galleryLeftArrow.show();
				_$galleryRightArrow.show();
			});
			
			_$closeModal.on('click', function(e){
				e.preventDefault();
				
				view.hideSelectedImage(e);
			});			
			
			_$overlay.on('click', function(e){
				e.preventDefault();
				
				view.hideSelectedImage(e);
			});
		},
		
		'hideSelectedImage' : function(e){
			e.preventDefault();
			
			_$portfolioGallery.animate({
				opacity: 0
			}, 300, 'linear', function(){
				_$portfolioGallery.hide();
				_$imageContainer.find('img').remove();
				_$imageContainer.find('p').remove();
				_$galleryCarousel.find('a').removeClass('active-image');
				_$overlay.hide();
				_$galleryRightArrow.hide();
				_$galleryLeftArrow.hide();
			});
		},
		
		'getFullSizeImagePath' : function(path){
			return path.replace('thumbs', 'fullsize');
		},
		
		'displayNextImage' : function(e){
			e.preventDefault();
			var view = this;
			
			_currentImageIndex++;

			if(_currentImageIndex > (_imageArrayProperties.length - 1)){
				_currentImageIndex = 0;
			}
			
			view.removeCurrentPortfolioImage();
		},
		
		'displayPreviousImage' : function(e){
			e.preventDefault();
			
			var view = this;
			
			_currentImageIndex--;
			
			if(_currentImageIndex < 0){
				_currentImageIndex = _imageArrayProperties.length - 1;
			}
			
			view.removeCurrentPortfolioImage();
		},
		
		'setImagePathArray' : function(imageArray){
			_imageArrayProperties = imageArray;
		},		
		
		'removeCurrentPortfolioImage' : function(){
			var view = this;
			
			_$imageContainer.animate({
				opacity: 0
			},500, 'linear', function(){
				_$imageContainer.find('img').remove();
				_$imageContainer.find('p').remove();
				
				_$galleryCarousel.find('a').removeClass('active-image');
				
				view.addPortfolioImage();
			});
		},
		
		'addPortfolioImage' : function(){
			//console.log(_imageArrayProperties);
			//console.log(_imageArrayProperties[1][1]);
			var view = this,		
				imgContainerHeight = Number(_imageArrayProperties[_currentImageIndex][1]) + 40,
				imgContainerWidth = Number(_imageArrayProperties[_currentImageIndex][2]),
				imgContainerLeftMargin = view.calculateContainerLeftMargin(imgContainerWidth),
				imgSrcFullSizePath = view.getFullSizeImagePath(_imageArrayProperties[_currentImageIndex][0]),
				imgString = '<img src="' + imgSrcFullSizePath + '" />';
				
			if(_$body.hasClass('home')){
				imgString += '<p>' + view.portfolioCollection.getSelectedText(_imageArrayProperties[_currentImageIndex][3]) + '</p>';
						  //+ '<p>'+ view.portfolioCollection.getSelectedText(_currentImageIndex) +'</p>';
			}
			
			if(_$body.hasClass('artist')){
				_$portfolioContainer.addClass('setLeftMargin');
				_$imageContainer.addClass('setContainerWidth');
				_$portfolioGallery.css({'height': (imgContainerHeight - 17) + 'px'});
			}else{
				_$portfolioContainer.css({'margin-left' : imgContainerLeftMargin + 'px' });				
				_$imageContainer.css({'height' : imgContainerHeight + 'px', 'width' : imgContainerWidth + 'px' });
			}
			
			
			_$galleryCarousel.find('li:nth-child(' + (_currentImageIndex + 1) + ') a').addClass('active-image');
			_$imageContainer.append(imgString);
			
			if(_$body.hasClass('artist')){
				_$imageContainer.find('img').css({'margin-left' : view.calculateImageLeftMargin(imgContainerWidth) + 'px' });
			}

			_$imageContainer.animate({
				opacity: 1
			}, 500, 'linear');
		},
		
		'calculateContainerLeftMargin' : function(contWidth){
			return (960 - contWidth) / 2;
		},
		
		'calculateContainerTopMargin' : function(contHeight){
			return (contHeight - 160 ) / 4;
		},
		
		'calculateImageLeftMargin' : function(contWidth){
			return (700 - contWidth) / 2;
		},
		
		'getFullSizePath' : function(path){
			return path.replace('thumbs', 'fullsize');
		},
		
		'hideSelectedImageNow' : function(e){
			e.preventDefault();
			
			log('move left');
		}
	});

});