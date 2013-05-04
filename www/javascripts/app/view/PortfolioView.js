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
		_$appClientInfo = $('#app-client-info'),
		_$appThumbGallery = $('#app-thumb-gallery'),
		_$carouselItems;

	var _currentSection = 'portfolio',
		_jsonData;
	
	return Backbone.View.extend({

		'events': {
			//'click #app-clients a' : 'displayContent'
			//'click #app-main .client-work' : 'displayContent'
		},

		'initialize': function (options) {
			var view = this;

			_.bindAll(this);
			
			//Events.bind('display-subview', view.displaySubViewContent);

			view.render();

			log('Backbone : Global : PortfolioView : Initialized');
		},

		'render': function () {
			var view = this;
			
			view.appClientInfo = this.$el.find('#app-client-info');
			view.appMain = this.$el;
			
			this.$el.find('.client-work').on('click', function(e){
				e.preventDefault();
				
				//var currentDataClient = $(e.currentTarget).attr('href');
				//view.obtainClientInfo(currentDataClient);
			});
		},
		
		'displayContent' : function(e){
			e.preventDefault();

			log('client work');
		//	var view = this,
		//				$currentTargetData = $(e.currentTarget).attr('data-client');

		//	view.obtainClientInfo($currentTargetData);
		},
		
		'obtainClientInfo' : function(targetData){
			var view = this;
			
			$.ajax({
				url: '/php/clientinfo.php',
				type: 'post',
				dataType: 'json',
				data: {
					'clientName': targetData
				},
				success: function(dataInfo){
					//log('success on call, process info');
					_jsonData = dataInfo; //view.processClientData(dataInfo);
					view.hideCurrentView();
				//	if(_currentSection == 'portfolio'){
				//		view.hidePortfolioView();	
				//	}else{
				//		view.hidePortfolioSubView();
				//	}					
				}, error: function(){
					log('error on call');
				}					
			});
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
			
			view.appClientInfo = $('#app-client-info');
			view.appClientInfo.find('.type').text(clientData['clientInfo'][0]['type']);
			view.appClientInfo.find('.status').text(clientData['clientInfo'][0]['status']);
			view.appClientInfo.find('.url').text(clientData['clientInfo'][0]['url']);

			view.appClientInfo.find('p').text(clientData['clientInfo'][0]['copy']);
			
			view.appClientInfo.find('.column-left').append('<img src="'+ clientData['clientInfo'][0]['first-image-path'] +'" />');
			view.appClientInfo.find('.column-right').append('<img src="'+ clientData['clientInfo'][0]['second-image-path'] +'" />');
			
			view.appClientInfo.show();
			view.appClientInfo.animate({
				opacity: 1
			}, 500, 'linear', function(){
				_currentSection = 'portfolio-subview';
			});	
			/*
			_$appClientInfo.find('.type').text(clientData['clientInfo'][0]['type']);
			_$appClientInfo.find('.status').text(clientData['clientInfo'][0]['status']);
			_$appClientInfo.find('.url').text(clientData['clientInfo'][0]['url']);

			_$appClientInfo.find('p').text(clientData['clientInfo'][0]['copy']);
			
			_$appClientInfo.find('.column-left').append('<img src="'+ clientData['clientInfo'][0]['first-image-path'] +'" />');
			_$appClientInfo.find('.column-right').append('<img src="'+ clientData['clientInfo'][0]['second-image-path'] +'" />');
			
			_$appClientInfo.animate({
				opacity: 1
			}, 500, 'linear', function(){
				_currentSection = 'portfolio-subview';
			});			
			*/
		}
	});

});