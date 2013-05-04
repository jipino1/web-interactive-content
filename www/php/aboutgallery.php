<?php

include_once('config.php');
	$root = DOMAIN_ROOT;
	
	$thumbArray = array(
					"thumbs"=>array(
						array("src"=>$root."images/thumbs/about/img_1.jpg", "fs_height"=>"350", "fs_width"=>"700", "client"=>"personal", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/about/img_2.jpg", "fs_height"=>"350", "fs_width"=>"700", "client"=>"personal", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/about/img_3.jpg", "fs_height"=>"350", "fs_width"=>"700", "client"=>"personal", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/about/img_4.jpg", "fs_height"=>"350", "fs_width"=>"700", "client"=>"personal", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/about/img_5.jpg", "fs_height"=>"350", "fs_width"=>"700", "client"=>"personal", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/about/img_6.jpg", "fs_height"=>"350", "fs_width"=>"700", "client"=>"personal", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/about/img_7.jpg", "fs_height"=>"350", "fs_width"=>"700", "client"=>"personal", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/about/img_8.jpg", "fs_height"=>"350", "fs_width"=>"700", "client"=>"personal", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/about/img_9.jpg", "fs_height"=>"350", "fs_width"=>"700", "client"=>"personal", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/about/img_10.jpg", "fs_height"=>"350", "fs_width"=>"700", "client"=>"personal", "url"=>"/artist/")/*,
						array("src"=>$root."images/thumbs/art/SheDetails1.jpg", "fs_height"=>"438", "fs_width"=>"650", "client"=>"unknown", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/tension1.jpg", "fs_height"=>"645", "fs_width"=>"650", "client"=>"unknown", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/tension3.jpg", "fs_height"=>"361", "fs_width"=>"650", "client"=>"unknown", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/trumpetMan2.jpg", "fs_height"=>"359", "fs_width"=>"483", "client"=>"unknown", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/trumpletMan.jpg", "fs_height"=>"356", "fs_width"=>"483", "client"=>"unknown", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/watercolors_5.jpg", "fs_height"=>"494", "fs_width"=>"650", "client"=>"unknown", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/watercolors_6.jpg", "fs_height"=>"486", "fs_width"=>"650", "client"=>"unknown", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/WWIIsoldiers_in_the_kitchen.jpg", "fs_height"=>"309", "fs_width"=>"650", "client"=>"unknown", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/fireworks_print.jpg", "fs_height"=>"483", "fs_width"=>"353", "client"=>"unknown", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/printMan.jpg", "fs_height"=>"420", "fs_width"=>"650", "client"=>"unknown", "url"=>"/artist/")*/
					)
				);
				
	echo json_encode($thumbArray);
?>