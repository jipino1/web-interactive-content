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
		_$imageHolder,
		_$closeModal,
		_$overlay = $('#overlay');
	
	var _userArray = new Array(),
		_imagePathArray = new Array(),
		_tweetArray = new Array(),
		_idArray = new Array();
		
	var _$thumbCarouselMask,
		_$thumbGalleryCarousel,
		_$appThumbGallery,
		_$thumbGalleryLeftArrow,
		_$thumbGalleryRightArrow;
	
	var _initialCarouselPosition = -20,
		_carouselPosition = 1,
		_defaultTransition = 125,
		_offsetTransition = 15,
		_carouselCounter = 0,
		_dataLength,
		_animationInProgress = false;
		
	return Backbone.View.extend({

		'events': {
			'click #thumb-gallery-carousel a' : 'displaySelectedImage',
			//'mouseover #app-thumb-gallery' : 'displayThumbGalleryArrows',
			//'mouseover #thumb-gallery-carousel a' : 'showSelectedImage',
			'click #image-holder a' : 'hideSelectedImage',
			'click .left-arrow' : 'cloneAndMoveThumbGalleryLeft',
			'click .right-arrow' : 'cloneAndMoveThumbGalleryRight'
		},

		'initialize': function (options) {
			var view = this;

			_.bindAll(this);

			view.render();

			log('Backbone : Global : ThumbGalleryView : Initialized');
		},

		'render': function () {
			var view = this;

			view.thumbGalleryTemplate = swig.compile(App.templates.ThumbGalleryTemplate);
			view.$el.append(view.thumbGalleryTemplate({
				
			}));
			
			view.initThumbGalleryCarousel();
		},
		
		'initThumbGalleryCarousel' : function(){
			var view = this,
				urlString;
				
			_$appThumbGallery = $('#app-thumb-gallery');
			//_$appThumbGallery.on('mouseover', view.displayThumbGalleryArrows);
			//_$appThumbGallery.on('mouseout', view.hideThumbGalleryArrows);
			
			_$thumbGalleryLeftArrow = $('#app-thumb-gallery .left-arrow');
			_$thumbGalleryRightArrow = $('#app-thumb-gallery .right-arrow');
			
			if(_$body.hasClass('home') || _$body.hasClass('portfolio')){
				urlString = '/php/portfoliogallery.php';	
			} else if(_$body.hasClass('about')){
				urlString = '/php/aboutgallery.php';	
			} else {
				urlString = '/php/artistgallery.php';	
			}

			$.ajax({
				'url': urlString,
				//'url': 'http://search.twitter.com/search.json?q=projectglass',
				'type': 'get',
				'dataType': 'json',
				success: function(data){
				//	log('success on thumb gallery');
					view.parseRetrievedData(data);
				},
				error: function(){
				//	log('error on thumb gallery');
				}
			});
		},
		
		'parseRetrievedData' : function(data){
			var view = this;
				
			//_$thumbCarouselMask = $('#thumb-carousel-mask');
			_$thumbGalleryCarousel = $('#thumb-gallery-carousel ul');
			_dataLength = data['thumbs'].length;
			
			for (var i = 0; i < _dataLength; i++){
				var thumbString = '<li>'
								+ '<a href="'+ data['thumbs'][i]['url'] +'" data-client="' + data['thumbs'][i]['client'] + '"><img src="' + data['thumbs'][i]['src'] +'" data-fs-height="' + data['thumbs'][i]['fs_height'] + '" data-fs-width="' + data['thumbs'][i]['fs_width'] + '" data-position="' + i + '" data-client="' + data['thumbs'][i]['client'] + '" /></a>'
								+ '</li>';

				//_$thumbCarouselMask.find('ul').append(thumbString);
				_$thumbGalleryCarousel.append(thumbString);
				
				_imagePathArray.push([data['thumbs'][i]['src'], data['thumbs'][i]['fs_height'], data['thumbs'][i]['fs_width'], data['thumbs'][i]['client']]);
			}
			
			Events.trigger('image-array-set', _imagePathArray);
		},
		
		'stringReplace' : function(stringToAdjust){
			return stringToAdjust.replace(/\\/g, '');	
		},
		
		'displaySelectedImage' : function(e){
			e.preventDefault();
			
			var view = this,
					   $currentTarget = $(e.currentTarget),
					   $currentTargetHref = $currentTarget.attr('href');
			
			$currentTarget.addClass('active-image');
			
			if(_$body.hasClass('portfolio')){
				Events.trigger('display-subview', $currentTarget.attr('data-client'));
				//window.open($currentTargetHref, '_self');
			}else {
				Events.trigger('display-selected', $currentTarget);
			}
			
			$('html, body').animate({scrollTop: '0px'}, 800);

			/*
			var view = this,
				$currentTarget = $(e.currentTarget),
				imgSrcFullSizePath = view.getFullSizePath($currentTarget.find('img').attr('src')),
				imgSrcString = '<div id="image-container">'
							 + '<a class="arrow left">Left</a>'
							 + '<a href="#" id="close-modal" title="close">Close</a>'
							 + '<img src="' + imgSrcFullSizePath + '" height="'+ $currentTarget.find('img').attr('data-fs-height') +'" width="'+ $currentTarget.find('img').attr('data-fs-width') +'"/>'
							 + '<a class="arrow right">Right</a>'
							 + '</div>';
							 
			_$body.append(imgSrcString);
			
			_$imageHolder = $('#image-holder');
			_$closeModal = $('#close-modal');
			
			if($currentTarget.find('img').attr('data-fs-height') == '600'){
				_$imageHolder.addClass('image-landscape-view');
			}else{
				_$imageHolder.addClass('image-portrait-view');
			}
			
			_$imageHolder.animate({
				opacity: 1
			}, 300, 'linear', function(){
				_$overlay.show();
			});
			
			_$closeModal.on('click', function(e){
				e.preventDefault();
				
				view.hideSelectedImage(e);
			});
			*/
		},
		
		'displayThumbGalleryArrows' : function(e){
			_$thumbGalleryLeftArrow.addClass('display');//();//css({'display' : 'block'});
			_$thumbGalleryRightArrow.show();
		},
		
		'hideThumbGalleryArrows' : function(e){
			_$thumbGalleryLeftArrow.removeClass('display');
			_$thumbGalleryRightArrow.hide();
		},
		
		'getSelectedImagePath' : function(index){
			return _imagePathArray[index];
		},
		
		'showSelectedImage' : function(e){
			
			
		},
		
		'hideSelectedImage' : function(e){
			e.preventDefault();
			
			_$imageHolder.animate({
				opacity: 0
			}, 300, 'linear', function(){
				_$imageHolder.remove();
				_$overlay.hide();
			});
		},
		
		/*'moveCarouselLeft' : function(e){
			e.preventDefault();
			
			if((_carouselPosition + 2) < _dataLength){
				//move carousel to the left
				if(_carouselCounter == 1){
					_offsetTransition-= _defaultTransition;	
				}else{
					_offsetTransition-= _defaultTransition;
					_carouselCounter++;
				}
				
				
				_$carouselMask.find('ul').animate({
					marginLeft: _offsetTransition
				}, 500, 'easeOutBack', function(e){
					_carouselPosition++;
				});
			}
		},
		
		'moveCarouselRight' : function(e){
			e.preventDefault();

			if(_carouselPosition > 1){
				//move carousel to the right	
				if(_carouselCounter == 1){
					_offsetTransition+= _defaultTransition;
					_carouselCounter--;
				}else{
					_offsetTransition+= _defaultTransition;
				}
				
				_$carouselMask.find('ul').animate({
					marginLeft: _offsetTransition
				}, 500, 'easeOutBack', function(e){
						_carouselPosition--;
				});				
			}
		},*/
		
		'cloneAndMoveThumbGalleryLeft' : function(e){
			e.preventDefault();
			
			if(!_animationInProgress){				
				var view = this,
					$firstCloneItem = _$thumbGalleryCarousel.find('li').first().clone();
				
				_animationInProgress = true;
				
				$firstCloneItem.appendTo(_$thumbGalleryCarousel);
				
				_offsetTransition-= _defaultTransition;
				
				_$thumbGalleryCarousel.animate({
					marginLeft: _offsetTransition
				}, 500, 'easeOutBack', function(){
					view.resetCarouselItems('firstCloneItem');
					_animationInProgress = false;
				});
			}
		},
		
		'cloneAndMoveThumbGalleryRight' : function(e){
			e.preventDefault();
			
			if(!_animationInProgress){				
				var view = this,
					$lastCloneItem = _$thumbGalleryCarousel.find('li').last().clone();
						   
				_animationInProgress = true;
				
				$lastCloneItem.prependTo(_$thumbGalleryCarousel).addClass('thumbCloneItem');
				
				_offsetTransition+= _defaultTransition;
				
				_$thumbGalleryCarousel.animate({
					marginLeft: _offsetTransition
				}, 500, 'easeOutBack', function(){
					view.resetCarouselItems('lastCloneItem');
					_animationInProgress = false;
				});
			}
		},
		
		'resetCarouselItems' : function(itemToRemove){
			_$thumbGalleryCarousel.removeAttr('style');
			_offsetTransition = 15;
			
			if(itemToRemove == 'firstCloneItem'){
				_$thumbGalleryCarousel.find('li').first().remove();
			}else{
				_$thumbGalleryCarousel.find('li').removeClass('thumbCloneItem');
				_$thumbGalleryCarousel.find('li').last().remove();
			}
		}
	});

});