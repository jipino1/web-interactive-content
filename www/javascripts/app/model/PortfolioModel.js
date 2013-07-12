/**
 * @module model/ExampleModel
 */

define(function (require) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		App = require('global');

	return Backbone.Model.extend({

		'defaults': {
			dinnernotart: 'Today\'s digital and technological improvements allow us to do things we couldn\'t think of years ago. These improvements let to the creation of Dinner, Not Art, the first Mac & Cheese app for both the desktop and the iPad® that lets users create amazing pieces of art using digital instead of real pieces of macaroni.',
			perspectives: 'Behind the driver\'s seat of very successful companies, there are very successful women running the show; however, in most cases, we don\'t know about it. Katie Kempner is dedicating part of her time to make sure we all know about these women and how they handle the situations and, in some cases, challenges, they may encounter while running a business.',
			metlife: 'How would you know if your great, great grandfather left you an inheritance? You can always find out by visiting the MetLife Policy Finder. After a couple of easy steps, users will be able to find out if there are unclaimed funds on their names.',
			macandcheese: 'There is no need to add a lenghtly description, just smile and enjoy it.',
			jello: 'Known to all of us, Jell-O has become part of the household. During the holiday season, Jell-O decided to add a group of reduced sugar recipes to its long list of products, so everyone could enjoy them.',
			genesisbakery: 'While either driving from or to the Florida Keys, there is always time to stop on the way and relax a bit. Genesis Bakery Cafe provides the \'bocaditos\' and refreshments before embarking on a long drive or just when you are about to get home. Its variety of goodies will let you asking for more; and its prices are very afforable.',
			babycarrots: 'We all know that many people, young and old, will choose junk food over baby carrots any day. So how can we make a carrot exciting? Market it as junk food, give it a new package look and put them inside vending machines in schools and next to potato chips on the snacks aisle. ',
			aitanavargas: 'Journalism is usually referred to as the fourth estate. Spain-born journalist Aitana Vargas shows a selection of her written work through a carefully designed website, which reflects her personality and seamlessly integrates elegance, artistic elements and simplicity.',
			whoppersacrifice: 'Award-winning Facebook application Whopper Sacrifice turned heads when it was first introduce in 2008. Its mission was simple, to allow Facebook users to delete their friends in exchange of a whopper. After 10 friends were deleted, users received a coupon for a free whopper sandwich.',
			vws: 'What kind of car are you most related to? The VW Routan, the VW Passat, the VW Jetta? With the VW Analizer, you don\'t have to play the guess game anymore; let the app decide for you based on the information you have on your Facebook user profile.',
			cuervoserenate: 'In a very subtle but honest way, how can you tell your friends that the way they prepare their Margarita sucks? Well, you can tell them straight to their faces OR you can serenate them using Facebook app Cuervo Serenate. ',
			dominos: 'Domino\'s Pizza not only redesign its website, it also updated its pizzas, making them tastier than ever.',
			oldnavy: 'Oldnavy provides afforable clothes for all the family, and during Thanksgiving, it becomes a savings Gooble Palooza for everyone.',
			mdc: 'If you want to know more about some of the best advertising agencies around the world, there is only one place to look, MDC Partners.  There is something for everyone.'
		},

		'initialize': function () {}

	});

});