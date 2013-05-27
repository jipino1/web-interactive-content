/**
 * @module view/PortfolioView
 */

define(function (require) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		App = require('global'),
		Swig = require('swig'),
		Easing = require('easing');
		
	var _$appClients = $('#app-clients'),
		//_$appClientInfo = $('#app-client-info'),
		_$appThumbGallery = $('#app-thumb-gallery'),
		_$carouselItems;

	var _currentSection = 'portfolio',
		_jsonData,
		_doOnce = false;
	
	return Backbone.View.extend({
		'el' : '#app-client-info',
		
		'events': {
		},

		'initialize': function (options) {
			var view = this;

			_.bindAll(this);
			
			Events.bind('retrieve-client-data', view.retrievedClientData);
			
			view.render();

			log('Backbone : Global : PortfolioView : Initialized');
		},

		'render': function () {
			var view = this;
			
		//	view.appClientInfo = this.$el.find('#app-client-info');
		//	view.appMain = this.$el;
			
		//	this.$el.find('.client-work').on('click', function(e){
		//		e.preventDefault();
				
				//var currentDataClient = $(e.currentTarget).attr('href');
				//view.obtainClientInfo(currentDataClient);
		//	});
		},
		
		'retrievedClientData' : function(data){
			var view = this,
				$backButton = view.$el.find('#back');
				
			$backButton.on('click', function(e){
				e.preventDefault();
				
				Events.trigger('return-to-stage');
			});
			
			view.obtainClientInfo(data);
		},
		
		'displayContent' : function(e){
			e.preventDefault();

		//	log('client work');
		//	var view = this,
		//				$currentTargetData = $(e.currentTarget).attr('data-client');

		//	view.obtainClientInfo($currentTargetData);
		},
		
		'obtainClientInfo' : function(targetData){
			var view = this;
			
			if(!_doOnce){
				_doOnce = true;
			
			$.ajax({
				url: '/php/clientinfo.php',
				type: 'post',
				dataType: 'json',
				data: {
					'clientName': targetData
				},
				success: function(dataInfo){
					//log('success on call, process info');
				//	_jsonData = dataInfo; //view.processClientData(dataInfo);
					view.processClientData(dataInfo)
				//	view.hideCurrentView();
				//	if(_currentSection == 'portfolio'){
				//		view.hidePortfolioView();	
				//	}else{
				//		view.hidePortfolioSubView();
				//	}					
				}, error: function(){
					log('error on call');
				}					
			});
			}
		},
		
		'displaySubViewContent' : function(targetData){
			var view = this;
			view.obtainClientInfo(targetData);
		},
		
		'hideCurrentView' : function(){
			var view = this;
			
			this.$el.animate({
				opacity: 0
			}, 500, 'linear', function(){
				view.appMain.hide();
				view.processClientData(_jsonData);
			});
		},
		
		'hidePortfolioView' : function(){
			var view = this;
			
			_$appClients.animate({
				opacity: 0
			}, 500, 'linear', function(){
				_$appClients.hide();
				_$appClientInfo.show();
				view.processClientData(_jsonData);
			});
		},
		
		'hidePortfolioSubView' : function(){
			var view = this;
			
			_$appClientInfo.animate({
				opacity: 0
			}, 500, 'linear', function(){
				_$appClientInfo.find('.column-left img').remove();
				_$appClientInfo.find('.column-right img').remove();
				view.processClientData(_jsonData);
			});
		},
		
		'processClientData' : function(clientData){
			var view = this;
			
			this.$el.find('.client').text(clientData['clientInfo'][0]['client']);
			this.$el.find('.type').text(clientData['clientInfo'][0]['type']);
			
			if(clientData['clientInfo'][0]['url'] != 'N/A'){
				this.$el.find('.url').attr('href', clientData['clientInfo'][0]['url']);
			}
			
			this.$el.find('.url').text(clientData['clientInfo'][0]['url']);
			
			this.$el.find('.column-left').append('<img src="'+ clientData['clientInfo'][0]['first-image-path'] +'" />');
			this.$el.find('.column-right').append('<img src="'+ clientData['clientInfo'][0]['second-image-path'] +'" />');
			
			_doOnce = false;
			
			Events.trigger('display-client-info');
		},
		
		'returnToMainStage' : function(){
			var view = this;
			
			view.$el.animate({
				marginLeft: 0
			}, 1000, 'easeOutBack');
		}
	});

});