<?php

include_once('config.php');
	$root = DOMAIN_ROOT;
	
	$thumbArray = array(
					"thumbs"=>array(
						array("src"=>$root."images/thumbs/art/cliff.jpg", "fs_height"=>"489", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/doodles.jpg", "fs_height"=>"483", "fs_width"=>"347", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/gray1.jpg", "fs_height"=>"383", "fs_width"=>"253", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/ink_figurestudies1.jpg", "fs_height"=>"496", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/oils1.jpg", "fs_height"=>"448", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/oils2.jpg", "fs_height"=>"474", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/oils3.jpg", "fs_height"=>"483", "fs_width"=>"242", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/oils4.jpg", "fs_height"=>"467", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/persistance.jpg", "fs_height"=>"439", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/She.jpg", "fs_height"=>"476", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/SheDetails1.jpg", "fs_height"=>"438", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/tension1.jpg", "fs_height"=>"645", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/tension3.jpg", "fs_height"=>"361", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/trumpetMan2.jpg", "fs_height"=>"359", "fs_width"=>"483", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/trumpletMan.jpg", "fs_height"=>"356", "fs_width"=>"483", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/watercolors_5.jpg", "fs_height"=>"494", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/watercolors_6.jpg", "fs_height"=>"486", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/WWIIsoldiers_in_the_kitchen.jpg", "fs_height"=>"309", "fs_width"=>"650", "artist"=>"unknown", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/fireworks_print.jpg", "fs_height"=>"483", "fs_width"=>"353", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/printMan.jpg", "fs_height"=>"420", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/")
					)
				);
				
	echo json_encode($thumbArray);
?>