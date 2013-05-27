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
		Easing = require('easing'),
		Utilities = require('helpers/utilities');
		
	var _$document = $(document),
		_$window = window,
		_$contact = $('#contact'),
		_$contactWrapper = $('#contact-wrapper'),
		_$overlay = $('#overlay');
		
	var _arrayOfHeights = new Array(555, 430, 465, 508, 485, 515, 530, 555, 470), // whopper sacrifice, perspectives, metlife, genesis bakery, dna, baby carrots, vw, cuervo serenade, abc sparks
		_defaultContainerHeight = 450,
		_workRowNumber,
		_workColumnNumber;

	return Backbone.View.extend({	
		'events': {
			'click .client-work' : 'retrieveClientWork',
			'click .read-more' : 'expandSection',
			'click #work dl a' : 'linkToExternal'
		},

		'initialize': function (options) {
			var view = this;

			_.bindAll(this);

			Events.bind('display-client-info', view.displayClientInfo);
			Events.bind('return-to-stage', view.displayMainContent);
			view.render();

			log('Backbone : Global : SubView : Initialized');
		},

		'render': function () {
			var view = this;
				
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
		},
		
		'retrieveClientWork' : function(e){
			e.preventDefault();
			
			var view = this,
				$currentTarget = $(e.currentTarget);
				
			view.clientWorkTemplate = swig.compile(App.templates.ClientWorkTemplate);
			view.$el.find('#app-client-info').append(view.clientWorkTemplate());
			
			Events.trigger('retrieve-client-data', $currentTarget.attr('href'));
		},
		
		'displayMainContent' : function(){
			var view = this;
			
			view.$el.find('#work').animate({
				marginLeft: 0
			}, 750, 'linear', function(){
				view.$el.find('#app-client-info').empty();
			});			
		},
		
		'displayClientInfo' : function(){
			if(!Utilities.isMobile()){
				this.$el.delay(750).find('#work').animate({
					marginLeft: -960
				}, 750, 'linear', function(){
					$('html, body').animate({scrollTop: '0px'}, 800);
				});
			}
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
			
			this.$el.find('#work').find('.column:nth-child('+ _workColumnNumber +')').find('li:nth-child('+ _workRowNumber +')').animate({
				height: containerHeight+'px'
			}, 700, 'easeOutBack', function(){
				$(this).find('.more-content').fadeTo(1000, 1);
			});
		},

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
				case "sparks":
					containerHeight = _arrayOfHeights[8];
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
			
			Events.trigger('display-selected', $currentTarget);
		},
		
		'displayContactInfo' : function(e){
			e.preventDefault();
			
			var view = this,
				$currentTarget = $(e.currentTarget);
				
			$currentTarget.animate({
				opacity: 1
			}, 1000, 'linear');		
		},
		
		'linkToExternal' : function(e){
			e.preventDefault();
			
			var $currentTarget = $(e.currentTarget);
			
			_$window.open($currentTarget.attr('href'), '_blank');
		},
		
		'displayAboutInfo' : function(e){
			e.preventDefault();
			
		}
	});

});