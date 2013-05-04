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
		
	var _$document = $(document),
		_$appMain = $('#app-main'),
		_$workList = $('#work'),
		_$contact = $('#contact'),
		_$contactWrapper = $('#contact-wrapper'),
		_$overlay = $('#overlay'),
		//_$about = $('#about'),
		//_$readMore = $('.read-more'),
		_$gallery = $('.gallery');
		
	var _arrayOfHeights = new Array(541, 453, 458, 500, 520, 593, 545, 520),
		_defaultContainerHeight = 450,
		_workRowNumber,
		_workColumnNumber;

	return Backbone.View.extend({		
		'events': {
			'click .read-more' : 'expandSection'
			//'click .gallery' : 'displayGalleryWork'
			//'click #contact' : 'displayContactInfo'
			//'click #about' : 'displayAboutInfo'
		},

		'initialize': function (options) {
			var view = this;

			_.bindAll(this);

			view.render();

			log('Backbone : Global : SubView : Initialized');
		},

		'render': function () {
			var view = this;

			/*view.homeTemplate = swig.compile(App.templates.HomeTemplate);
			view.$el.append(view.homeTemplate({
				'url': 'read'
			}));*/
			
			_$contact.on('click', function(e){
				e.preventDefault();
				var view = this;
				
				_$overlay.show().css({ 'height' : _$document.height() + 'px' });
				_$contactWrapper.show();
				_$contactWrapper.fadeTo(500, 1);
			});
			
			_$contactWrapper.find('.close-modal').on('click', function(e){
				e.preventDefault();
				
				_$contactWrapper.fadeTo(500, 0, function(){
					_$contactWrapper.hide();
					_$overlay.hide();
				});				
			});
			
			/*_$about.on('click', function(e){
				e.preventDefault();
				
				var view = this;
				
				view.$el.fadeTo(1000, 0);
			});*/
		},
		
		'expandSection' : function (e) {
			e.preventDefault();

			var view = this,
				$currentTarget = $(e.currentTarget),
				clientData = $currentTarget.attr('href'),
				containerHeight = view.calculateContainerHeight(clientData);
			
			view.setContainerLocation($currentTarget.attr('data-location'));
			
			$currentTarget.fadeTo(500, 0, function(){
				$(this).hide();	
			});
			
			_$workList.find('.column:nth-child('+ _workColumnNumber +')').find('li:nth-child('+ _workRowNumber +')').animate({
				height: containerHeight+'px'
			}, 700, 'easeOutBack', function(){
				$(this).find('.more-content').fadeTo(1000, 1);
			});
		},
		/*
		'contractPage' : function (e) {
			e.preventDefault();
			
			var view = this,
				$currentTarget = $(e.currentTarget);
				
			$currentTarget.hide();
			_$readMore = $('#read-more');
			
			_$initialIntro.animate({
				height: '330px'
			}, 700, 'easeOutBack');
			
			_$addViewInfo.fadeTo(700, 0);
			
			_$readMore.show();
		},
		*/
		'calculateContainerHeight' : function(dataClient){
			var containerHeight;
			
			switch(dataClient){
				case "whoppersacrifice":
					containerHeight = _arrayOfHeights[0];
					break;
				case "perspectives":
					containerHeight = _arrayOfHeights[1];
					break;
				case "policyfinder":
					containerHeight = _arrayOfHeights[2];
					break;
				case "genesisbakery":
					containerHeight = _arrayOfHeights[3];
					break;
				case "volkswagen":
					containerHeight = _arrayOfHeights[6];
					break;
				case "babycarrots":
					containerHeight = _arrayOfHeights[5];
					break;
				case "dinnernotart":
					containerHeight = _arrayOfHeights[4];
					break;
				case "cuervoserenate":
					containerHeight = _arrayOfHeights[7];
					break;
				default:
					containerHeight = _defaultContainerHeight;
			}
			
			return containerHeight;
		},
		
		'setContainerLocation' : function(dataLocation){
			_workRowNumber = parseInt(dataLocation.substr(8, 1));
			_workColumnNumber = parseInt(dataLocation.substr(3, 1));
		},
		
		'displayGalleryWork' : function(e){
			e.preventDefault();
			
			var view = this,
					   $currentTarget = $(e.currentTarget),
					   $currentTargetHref = $currentTarget.attr('href');
			
		//	if(_$body.hasClass('portfolio')){
		//		Events.trigger('display-subview', $currentTarget.attr('data-client'));
				//window.open($currentTargetHref, '_self');
		//	}else {
				Events.trigger('display-selected', $currentTarget);
		//	}
		},
		
		'displayContactInfo' : function(e){
			log('hola');
			e.preventDefault();
			
			var view = this,
				$currentTarget = $(e.currentTarget);
				
			$currentTarget.animate({
				opacity: 1
			}, 1000, 'linear');
			
				
		},
		
		'displayAboutInfo' : function(e){
			e.preventDefault();
			
			log('about');
		}
		/*
		'followMenuLinks' : function(e){
			var view = this,
				$currentTarget = $(e.currentTarget);
			//	log('over link');
			if($currentTarget.hasClass('active')){
				//log('active link');
			}
		}
		*/
	});

});