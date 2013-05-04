<?php
include_once('config.php');
	$root = DOMAIN_ROOT;
	
	class client_info{
		public function return_client_information($client){
			switch($client){
				case "dna":
					$type = "Website, iPad® App";
					$status = "Active";
					$url = "http://www.dinnernotart.com";
					$title = "Dinner, Not Art";
					$copy = "Today's digital and technological improvements allow us to do things we couldn't think of years ago. These improvements let to the creation of Dinner, Not Art, the first Mac & Cheese app for both the desktop and the iPad® that lets users create amazing pieces of art using digital instead of real pieces of macaroni. All the saved macaroni is then donated to the Feeding America® charitable organization.";
					$firstImgPath = "$root"."images/portfolio/dinner.not.art.thumb.jpg";
					$secondImgPath = $root."images/portfolio/dinner.not.art.artwork.thumb.jpg";
					break;	
				case "metlife":
					$type = "Website";
					$status = "Active";
					$url = "https://www.metlife.com/policyfinder/index.html";
					$title = "Metlife Policy Finder";
					$copy = "How would you know if your great, great grandfather left you an inheritance? You can always find out by visiting the MetLife Policy Finder.  After a couple of easy steps, users will be able to find out if there are unclaimed funds on their names. There isn't a match on the first try? It's not the end of the road, the Policy Finder allows you to do a deeper search and/or talk to any of the available representative about possible allocations.";
					$firstImgPath = $root."images/portfolio/metlife.policy.finder.thumb.jpg";
					$secondImgPath = $root."images/portfolio/metlife.policy.finder.thumb.2.jpg";
					break;
				case "whopper":
					$type = "Facebook App";
					$status = "Inactive";
					$url = "Removed";
					$title = "Whopper Sacrifice";
					$copy = "Award-winning Facebook application Whopper Sacrifice turned heads when it was first introduce in 2008.  Its mission was simple, to allow Facebook users to delete their friends in exchange of a whopper.  After 10 friends were deleted, users received a coupon for a free whopper sandwich.  Of course, Facebook did not like it so much, so it had to 'sacrificed' the app (it got deleted), but not until more than 200.000+ users got the boot for a whopper.";
					$firstImgPath = $root."images/portfolio/whopper.sacrifice.thumb.jpg";
					$secondImgPath = $root."images/portfolio/whopper.sacrifice.thumb.2.jpg";
					break;
				case "perspectives":
					$type = "Website";
					$status = "Active";
					$url = "http://www.katiekempner.com/";
					$title = "Katie Kempner - Perspectives";
					$copy = "Behind the driver's seat of very successful companies, there are very successful women running the show; however, in most cases, we don't know about it.  Katie Kempner is dedicating part of her time to make sure we all know about these women and how they handle the situations and, in some cases, challenges, they may encounter while running a business.";
					$firstImgPath = $root."images/portfolio/katie.perspectives.thumb.jpg";
					$secondImgPath = $root."images/portfolio/katie.perspectives.thumb.2.jpg";
					break;
				case "vw":
					$type = "Facebook App";
					$status = "Inactive";
					$url = "Removed";
					$title = "Meet the Volkswagens";
					$copy = "What kind of car are you most related to? The VW Routan, the VW Passat, the VW Jetta?  With the VW Analizer, you don't have to play the guess game anymore; let the app decide for you based on the information you have on your Facebook user profile.  Who knows, maybe you think you are a VW Rabbit when in fact, you are more like the VW Touareg.";
					$firstImgPath = $root."images/portfolio/meet.the.volkswagens.thumb.jpg";
					$secondImgPath = $root."images/portfolio/meet.the.volkswagens.thumb.2.jpg";
					break;
				case "ykyli":
					$type = "Website";
					$status = "Active";
					$url = "http://www.youknowyouloveit.com/";
					$title = "Kraft Macaroni & Cheese";
					$copy = "There is no need to add a lenghtly description, just smile and enjoy it.";
					$firstImgPath = $root."images/portfolio/kraft.mac.and.cheese.thumb.jpg";
					$secondImgPath = $root."images/portfolio/kraft.mac.and.cheese.thumb.2.jpg";
					break;
				case "jello":
					$type = "Website";
					$status = "Active";
					$url = "http://www.kraftbrands.com/jello/";
					$title = "Jell-O";
					$copy = "Known to all of us, Jell-O has become part of the household.  During the holiday season, Jell-O decided to add a group of reduced sugar recipes to its long list of products, so everyone could enjoy them.  Using Javascript and CSS3, special ribbons were placed along those products that have a reduced sugar recipe as well, and allowing customers to compare side-by-side both recipes.";
					$firstImgPath = $root."images/portfolio/jell-o.thumb.jpg";
					$secondImgPath = $root."images/portfolio/jell-o.thumb.2.jpg";
					break;
				case "gebaca":
					$type = "Website";
					$status = "Active";
					$url = "http://genesisbakerycafe.com/";
					$title = "Genesis Bakery Cafe";
					$copy = "While either driving from or to the Florida Keys, there is always time to stop on the way and relax a bit. Genesis Bakery Cafe provides the 'bocaditos' and refreshments before embarking on a long drive or just when you are about to get home. Its variety of goodies will let you asking for more; and its prices are very afforable.";
					$firstImgPath = $root."images/portfolio/genesis.bakery.thumb.jpg";
					$secondImgPath = $root."images/portfolio/genesis.bakery.thumb.2.jpg";
					break;
				case "cuervoserenate":
					$type = "Facebook App";
					$status = "Inactive";
					$url = "Removed";
					$title = "Jose Cuervo - Cuervo Serenate";
					$copy = "In a very subtle but honest way, how can you tell your friends that the way they prepare their Margarita sucks?  Well, you can tell them straight to their faces OR you can serenate them using Facebook app Cuervo Serenate.  Once Facebook users allow the app to use their basic and some extended permissions, they could select a friend and send him/her a serenate, letting him/her know how much their Margarita making abilities suck. Fun game and very catchy song.";
					$firstImgPath = $root."images/portfolio/cuervo.serenate.thumb.jpg";
					$secondImgPath = $root."images/portfolio/cuervo.serenate.thumb.2.jpg";
					break;
				case "aitana":
					$type = "Website";
					$status = "Active";
					$url = "http://www.aitanavargas.com";
					$title = "Aitana Vargas";
					$copy = "Journalism is usually referred to as the fourth estate. Spain-born journalist Aitana Vargas shows a selection of her written work through a carefully designed website, which reflects her personality and seamlessly integrates elegance, artistic elements and simplicity.";
					$firstImgPath = $root."images/portfolio/aitana.vargas.thumb.jpg";
					$secondImgPath = $root."images/portfolio/aitana.vargas.thumb.2.jpg";
					break;
				case "babycarrots":
					$type = "Website";
					$status = "Active (Redesigned)";
					$url = "http://www.babycarrots.com/";
					$title = "Baby Carrots";
					$copy = "We all know that many people, young and old, will choose junk food over baby carrots any day. So how can we make a carrot exciting? Market it as junk food, give it a new package look and put them inside vending machines in schools and next to potato chips on the snacks aisle. Only available on selected markets, the campaign became an overnight sensation due to etchy commercials, new package and a state of the art website; it even had a mobile app, Xtreme Xrunch Kart, the world's first-ever baby carrot powered game.";
					$firstImgPath = $root."images/portfolio/baby.carrots.thumb.jpg";
					$secondImgPath = $root."images/portfolio/baby.carrots.thumb.jpg";
					break;
				case "":
					$type = "";
					$status = "";
					$url = "";
					$title = "";
					$copy = "";
					$firstImgPath = "";
					$secondImgPath = "";
					break;
				case "":
					$type = "";
					$status = "";
					$url = "";
					$title = "";
					$copy = "";
					$firstImgPath = "";
					$secondImgPath = "";
					break;
			}
			
			$clientArray = array(
							"clientInfo"=>array(
								array("type"=>$type, "status"=>$status, "url"=>$url, "copy"=>$copy, "first-image-path"=>$firstImgPath, "second-image-path"=>$secondImgPath)						
							)
						);
			return $clientArray;
		}
	}
	
	$clientName = $_POST['clientName'];
	$clientInfoClass = new client_info();
	
	echo json_encode($clientInfoClass->return_client_information($clientName));
	
	//echo $clientInfoClass;
	/**/
	/*
	//echo $clientName;
	switch($clientName){
		case "babycarrots":
			$type = "Website, iPad&reg; App";
			$status = "Active";
			$url = "http://www.dinnernotart.com";
			$copy = "Today\'s digital and technological improvements allow us to do things we couldn\'t think of years ago. These improvements let to the creation of Dinner, Not Art, the first Mac &amp; Cheese app for both the desktop and the iPad&reg; that lets users create amazing pieces of art using digital instead of real pieces of macaroni. All the saved macaroni is then donated to the Feeding America&reg; charitable organization.";
			$firstImgPath = $root."images/portfolio/dinner.not.art.thumb.jpg";
			$secondImgPath = $root."images/portfolio/dinner.not.art.artwork.thumb.jpg";
			break;
			
		
			
	}
	echo $type . '--- ' . $status;
	
	$dinnerNotArtInfo = array(
					"clientInfo"=>array(
						array("type"=>"Website, iPad&reg; App", "Status"=>"Active", "URL"=>"http://www.dinnernotart.com", "copy" => "Today\'s digital and technological improvements allow us to do things we couldn\'t think of years ago. These improvements let to the creation of Dinner, Not Art, the first Mac &amp; Cheese app for both the desktop and the iPad&reg; that lets users create amazing pieces of art using digital instead of real pieces of macaroni. All the saved macaroni is then donated to the Feeding America&reg; charitable organization.", "first-image-path" => $root."images/portfolio/dinner.not.art.thumb.jpg", "second-image-path" => $root."images/portfolio/dinner.not.art.artwork.thumb.jpg")						
					)
				);
				*/
	//echo json_encode($dinnerNotArtInfo);
?>