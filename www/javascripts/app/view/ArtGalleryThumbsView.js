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
		
	var _$thumbCarouselMask;
	
	var _initialCarouselPosition = -20,
		_carouselPosition = 1,
		_defaultTransition = 272,
		_offsetTransition = -25,
		_carouselCounter = 0,
		_dataLength;
		
	return Backbone.View.extend({

		'events': {
			'click #thumb-gallery-carousel a' : 'displaySelectedImage',
			'click #image-holder a' : 'hideSelectedImage'
		},

		'initialize': function (options) {
			var view = this;

			_.bindAll(this);

			view.render();

			log('Backbone : Global : ArtGalleryThumbsView : Initialized');
		},

		'render': function () {
			var view = this;

			view.thumbGalleryTemplate = swig.compile(App.templates.ThumbGalleryTemplate);
			view.$el.append(view.thumbGalleryTemplate({
				
			}));

			//view.initThumbGalleryCarousel();
		},
		
		'initThumbGalleryCarousel' : function(){
			var view = this;
			log('and now here');
			$.ajax({
				'url': '/php/thumbgallery.php',
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
				
			_$thumbCarouselMask = $('#thumb-carousel-mask');
			_dataLength = data['thumbs'].length;
			
			for (var i = 0; i < _dataLength; i++){
				var thumbString = '<li>'
								+ '<a href="#"><img src="' + data['thumbs'][i]['src'] +'" data-fs-height="' + data['thumbs'][i]['fs_height'] + '" data-fs-width="' + data['thumbs'][i]['fs_width'] + '" data-position="' + i + '" /></a>'
								+ '</li>';

				_$thumbCarouselMask.find('ul').append(thumbString);
				
				_imagePathArray.push(data['thumbs'][i]['src']);
			}
			
			Events.trigger('image-array-set', _imagePathArray);
		},
		
		'stringReplace' : function(stringToAdjust){
			return stringToAdjust.replace(/\\/g, '');	
		},
		
		'displaySelectedImage' : function(e){
			e.preventDefault();
			
			var view = this,
					   $currentTarget = $(e.currentTarget);
			
			$currentTarget.addClass('active-image');
			
			Events.trigger('display-selected', $currentTarget);
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
		
		'getSelectedImagePath' : function(index){
			return _imagePathArray[index];
		},
		
		'showSelectedImage' : function(e){
			
			
			//
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
		
		'moveCarouselLeft' : function(e){
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
		}
	});

});