<?php

include_once('config.php');
	$root = DOMAIN_ROOT;
	
	$thumbArray = array(
					"thumbs"=>array(
						array("src"=>$root."images/thumbs/portfolio/portfolio.dominos.jpg", "fs_height"=>"350", "fs_width"=>"700", "client" => "dominos", "url" => "/portfolio/dominos.html"),
						array("src"=>$root."images/thumbs/portfolio/portfolio.dna.jpg", "fs_height"=>"350", "fs_width"=>"700", "client" => "dinnernotart", "url" => "/portfolio/dinnernotart.html"),
						array("src"=>$root."images/thumbs/portfolio/portfolio.jell-o.jpg", "fs_height"=>"350", "fs_width"=>"700", "client" => "jello", "url" => "/portfolio/jello.html"),
						array("src"=>$root."images/thumbs/portfolio/portfolio.gebaca.jpg", "fs_height"=>"350", "fs_width"=>"700", "client" => "genesisbakery", "url" => "/portfolio/genesisbakery.html"),
						array("src"=>$root."images/thumbs/portfolio/portfolio.oldnavy.jpg", "fs_height"=>"350", "fs_width"=>"700", "client" => "oldnavy", "url" => "/portfolio/oldnavy.html"),
						array("src"=>$root."images/thumbs/portfolio/portfolio.perspectives.jpg", "fs_height"=>"350", "fs_width"=>"700", "client" => "perspectives", "url" => "/portfolio/perspectives.html"),
						array("src"=>$root."images/thumbs/portfolio/portfolio.ykyli.jpg", "fs_height"=>"350", "fs_width"=>"700", "client" => "macandcheese", "url" => "/portfolio/macandcheese.html"),
						array("src"=>$root."images/thumbs/portfolio/portfolio.metlife.jpg", "fs_height"=>"350", "fs_width"=>"700", "client" => "metlife", "url" => "/portfolio/metlife.html"),
						array("src"=>$root."images/thumbs/portfolio/portfolio.whopper.jpg", "fs_height"=>"350", "fs_width"=>"700", "client" => "whoppersacrifice", "url" => "/portfolio/whoppersacrifice.html"),
						array("src"=>$root."images/thumbs/portfolio/portfolio.carrots.jpg", "fs_height"=>"350", "fs_width"=>"700", "client" => "babycarrots", "url" => "/portfolio/babycarrots.html"),
						array("src"=>$root."images/thumbs/portfolio/portfolio.aitana.jpg", "fs_height"=>"350", "fs_width"=>"700", "client" => "aitanavargas", "url" => "/portfolio/aitanavargas.html"),
						array("src"=>$root."images/thumbs/portfolio/portfolio.serenate.jpg", "fs_height"=>"350", "fs_width"=>"700", "client" => "cuervoserenate", "url" => "/portfolio/cuervoserenate.html"),
						array("src"=>$root."images/thumbs/portfolio/portfolio.vw.jpg", "fs_height"=>"350", "fs_width"=>"700", "client" => "vws", "url" => "/portfolio/meetthevolkswagens.html")
					)
				);
				
	echo json_encode($thumbArray);
?>