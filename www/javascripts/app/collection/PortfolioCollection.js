/**
 * @module collection/ExampleCollection
 */

define(function (require) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		App = require('global');

	return Backbone.Collection.extend({

		'initialize': function () {

			//this.model = App.models.PortfolioModel;
			var view = this;
			
			view.portfolioModel = new App.models.PortfolioModel;
				
			log('Backbone : PortfolioCollection : Initialized');

		},
		
		'getSelectedText' : function(clientName){
			var view = this,
					   campaignName;
			
			return view.portfolioModel.get(clientName);
			/*switch(Number(indexValue)){
				case 1:
					campaignName = 'dna';
					break;
				case 2:
					campaignName = 'perspectives';
					break;
				case 3:
					campaignName = 'metlife';
					break;
				case 4:
					campaignName = 'kraft';
					break;
				case 5:
					campaignName = 'jello';
					break;
				case 6:
					campaignName = 'gbc';
					break;
				case 7:
					campaignName = 'babycarrots';
					break;
				case 8:
					campaignName = 'av';
					break;
				case 9:
					campaignName = 'whoppersacrifice';
					break;
				case 10:
					campaignName = 'meetthevws';
					break;
				case 11:
					campaignName = 'cuervoserenate';
					break;
				case 12:
					campaignName = 'dominos';
					break;
			}*/
			
			//return view.portfolioModel.get(campaignName);
		}

	});

});