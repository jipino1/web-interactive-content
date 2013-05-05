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

	var _userArray = new Array(),
		_imageArray = new Array(),
		_tweetArray = new Array(),
		_idArray = new Array();
		
	var _$body = $(document.body),
		_$carouselMask,
		_$trendInterval;
	
	var _initialCarouselPosition = -20,
		_carouselPosition = 1,
		_defaultTransition = 272,
		_offsetTransition = -25,
		_carouselCounter = 0,
		_dataLength,
		_trendCounter = 0,
		_animationInProgress = false,
		//_trendTopicsArray = new Array('/php/olympics.php', '/php/json.php'),
		//_trendText = new Array('Olympics', 'test');
		_trendTopicsArray = new Array('javascript', 'html', 'html5', 'nodejs', 'backbonejs', 'technology', 'google', 'facebook', 'microsoft');
		
	return Backbone.View.extend({

		'events': {
			//'click .left-arrow' : 'moveCarouselLeft',
			//'click .right-arrow' : 'moveCarouselRight'
			'click .left-arrow' : 'cloneAndMoveLeft',
			'click .right-arrow' : 'cloneAndMoveRight'
		},

		'initialize': function (options) {
			var view = this;

			_.bindAll(this);

			view.render();

			log('Backbone : Global : TrendView : Initialized');
		},

		'render': function () {
			var view = this;

			view.trendTemplate = swig.compile(App.templates.TrendTemplate);
			view.$el.append(view.trendTemplate({
				//'url': 'awesome'
			}));
			
			//view.initTwitterCarousel();
			
			//_$trendInterval = setInterval(view.resetTrendCarousel, 7200000);
			//_$trendInterval = setInterval(view.resetTrendCarousel, 10000);
		},
		
		'initTwitterCarousel' : function(){
			var view = this,
				trendUrl;
			
			if(_$body.hasClass('olympian')){
				trendUrl = '/php/olympics.php';
			}else {
				
				trendUrl = _trendTopicsArray[_trendCounter];
				this.$el.find('h2 span').text(trendUrl);
				//this.$el.find('h2 span').text(_trendText[_trendCounter]);
				
				if(_trendCounter == parseInt(_trendTopicsArray.length - 1)){
					_trendCounter = 0;
				}else{
				
				_trendCounter++;
				
				}
				/*if(_testCounter == 0){
					trendUrl = '/php/json.php';
					_testCounter++;
				}else{
					trendUrl = '/php/olympics.php';
					_testCounter = 0;
				}*/
			}
			$.ajax({
				//'url': trendUrl,
				//'url': '/php/json.php',
				url: 'http://search.twitter.com/search.json?q='+ trendUrl + '&callback=?',
				type: 'get',
				dataType: 'jsonp',
				success: function(data){
					var mydata = JSON.parse(data);
					view.parseRetrievedData(mydata);
				},
				error: function(){
					log('error');
					$('#app-trending').animate({opacity:0}, 500, 'linear', function(){ $('#app-trending').hide(); });
				}//,
				//jsonp: 'jsonp'
			});
		},
		
		'parseRetrievedData' : function(data){
			var view = this;
				
			_$carouselMask = $('#carousel-mask');
			_dataLength = data['results'].length;
			
			for (var i = 0; i < _dataLength; i++){
				var imgString = view.stringReplace(data['results'][i]['profile_image_url']),
					liString = '<li>'
					+ '<img src="' + imgString +'" />'
					+ '<p>' + data['results'][i]['from_user'] +'</p>'
					+ '<p>' + data['results'][i]['text'] + '</p>'
					+ '</li>';

				_$carouselMask.find('ul').append(liString);
			}
		},
		
		'stringReplace' : function(stringToAdjust){
			return stringToAdjust.replace(/\\/g, '');	
		},
		
		'cloneAndMoveLeft' : function(e){
			e.preventDefault();

			if(!_animationInProgress){
				var view = this,
					$firstCloneItem = _$carouselMask.find('ul').find('li').first().clone();
						
				$firstCloneItem.appendTo(_$carouselMask.find('ul'));
			
				_offsetTransition-= _defaultTransition;
			
				_animationInProgress = true;
				
				_$carouselMask.find('ul').animate({
					marginLeft: _offsetTransition
				}, 500, 'easeOutBack', function(){
					view.resetCarouselItems('firstCloneItem');
					_animationInProgress = false;
				});
			}
		},
		
		'cloneAndMoveRight' : function(e){
			e.preventDefault();

			if(!_animationInProgress){
				var view = this,
					$lastCloneItem = _$carouselMask.find('ul').find('li').last().clone();
				
				_animationInProgress = true;
						
				$lastCloneItem.prependTo(_$carouselMask.find('ul')).addClass('trendCloneItem');
				
				_offsetTransition+= _defaultTransition;				
				
				_$carouselMask.find('ul').animate({
					marginLeft: _offsetTransition
				}, 500, 'easeOutBack', function(){
					view.resetCarouselItems('lastCloneItem');
					_animationInProgress = false;
				}); 
			}
		},
		
		'resetCarouselItems' : function(itemToRemove){
			_$carouselMask.find('ul').removeAttr('style');
			_offsetTransition = -25;
			
			if(itemToRemove == 'firstCloneItem'){
				_$carouselMask.find('ul').find('li').first().remove();
			}else{
				_$carouselMask.find('ul').find('li').removeClass('trendCloneItem');
				_$carouselMask.find('ul').find('li').last().remove();
				_$carouselMask.find('ul').find('li').removeAttr('class');
			}
		},
		
		'resetTrendCarousel' : function(){
			var view = this;

			_$carouselMask.find('ul').empty();
			
			view.initTwitterCarousel();
		}
		/*
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
			
			var view = this;
			
			view.cloneLastItem();

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
			} else {
				log('cloning last');
				view.cloneLastItem();
			}
		},
		
		'cloneLastItem' : function(){
			var $lastCloneItem = _$carouselMask.find('ul').find('li').last().clone();	
			
			$lastCloneItem.prependTo(_$carouselMask.find('ul')).css({'margin-left' : '-247px'});
		}
		*/
	});

});