<?php
include_once('config.php');
	$root = DOMAIN_ROOT;
	
	class client_info{
		public function return_client_information($client){
			switch($client){
				case "mdc":
					$type = "Website";
					$url = "http://www.mdc-partners.com/";
					$client = "MDC Partners";
					$firstImgPath = "$root"."images/clients/mdc.1.jpg";
					$secondImgPath = $root."images/clients/mdc.2.jpg";
					break;
				case "dna":
					$type = "Website, iPad® App";
					$url = "http://www.dinnernotart.com";
					$client = "Dinner, Not Art - Kraft Macaroni &amp; Cheese";
					$firstImgPath = "$root"."images/clients/dinner.not.art.1.jpg";
					$secondImgPath = $root."images/clients/dinner.not.art.2.jpg";
					break;	
				case "metlife":
					$type = "Website";
					$url = "https://www.metlife.com/policyfinder/index.html";
					$client = "Metlife Policy Finder - Metlife Insurance";
					$firstImgPath = $root."images/clients/metlife.policy.1.jpg";
					$secondImgPath = $root."images/clients/metlife.policy.2.jpg";
					break;
				case "whopper":
					$type = "Facebook App";
					$url = "N/A";
					$client = "Whopper Sacrifice - Whopper King";
					$firstImgPath = $root."images/clients/whopper.sacrifice.1.jpg";
					$secondImgPath = $root."images/clients/whopper.sacrifice.2.jpg";
					break;
				case "perspectives":
					$type = "Website";
					$url = "http://www.katiekempner.com/";
					$client = "Perspectives - Katie Kempner";
					$firstImgPath = $root."images/clients/perspectives.1.jpg";
					$secondImgPath = $root."images/clients/perspectives.2.jpg";
					break;
				case "vw":
					$type = "Facebook App";
					$url = "N/A";
					$client = "Meet the Volkswagens - Volkswagen";
					$firstImgPath = $root."images/clients/meet.the.volkswagens.1.jpg";
					$secondImgPath = $root."images/clients/meet.the.volkswagens.2.jpg";
					break;
				case "ykyli":
					$type = "Website";
					$url = "http://www.youknowyouloveit.com/";
					$client = "Kraft Macaroni &amp; Cheese";
					$firstImgPath = $root."images/clients/ykyli.1.jpg";
					$secondImgPath = $root."images/clients/ykyli.2.jpg";
					break;
				case "gebaca":
					$type = "Website";
					$url = "http://genesisbakerycafe.com/";
					$client = "Genesis Bakery Cafe";
					$firstImgPath = $root."images/clients/genesis.bakery.1.jpg";
					$secondImgPath = $root."images/clients/genesis.bakery.2.jpg";
					break;
				case "cuervoserenate":
					$type = "Facebook App";
					$url = "N/A";
					$client = "Cuervo Serenade - Jose Cuervo";
					$firstImgPath = $root."images/clients/cuervo.serenade.1.jpg";
					$secondImgPath = $root."images/clients/cuervo.serenade.2.jpg";
					break;
				case "aitana":
					$type = "Website";
					$url = "http://www.aitanavargas.com";
					$client = "Aitana Vargas";
					$firstImgPath = $root."images/clients/aitana.vargas.1.jpg";
					$secondImgPath = $root."images/clients/aitana.vargas.2.jpg";
					break;
				case "babycarrots":
					$type = "Website";
					$url = "N/A";
					$client = "Baby Carrots";
					$firstImgPath = $root."images/clients/baby.carrots.1.jpg";
					$secondImgPath = $root."images/clients/baby.carrots.2.jpg";
					break;
				case "sparks":
					$type = "Facebook App";
					$url = "N/A";
					$client = "ABC Sparks (Canada)";
					$firstImgPath = $root."images/clients/abc.sparks.1.jpg";
					$secondImgPath = $root."images/clients/abc.sparks.2.jpg";
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
								array("type"=>$type, "client"=>$client, "status"=>$status, "url"=>$url, "copy"=>$copy, "first-image-path"=>$firstImgPath, "second-image-path"=>$secondImgPath)						
							)
						);
			return $clientArray;
		}
	}
	
	$clientName = $_POST['clientName'];
	$clientInfoClass = new client_info();
	
	echo json_encode($clientInfoClass->return_client_information($clientName));
?>