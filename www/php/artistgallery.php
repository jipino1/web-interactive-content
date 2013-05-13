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
						array("src"=>$root."images/thumbs/art/WWIIsoldiers_in_the_kitchen.jpg", "fs_height"=>"309", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/fireworks_print.jpg", "fs_height"=>"483", "fs_width"=>"353", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/printMan.jpg", "fs_height"=>"420", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/img_1.jpg", "fs_height"=>"557", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/img_2.jpg", "fs_height"=>"461", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/img_3.jpg", "fs_height"=>"488", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/img_4.jpg", "fs_height"=>"442", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/img_5.jpg", "fs_height"=>"570", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/img_6.jpg", "fs_height"=>"507", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/img_11.jpg", "fs_height"=>"933", "fs_width"=>"700", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/img_8.jpg", "fs_height"=>"1195", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/img_9.jpg", "fs_height"=>"917", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/img_10.jpg", "fs_height"=>"905", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/img_7.jpg", "fs_height"=>"674", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/img_12.jpg", "fs_height"=>"448", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/"),
						array("src"=>$root."images/thumbs/art/img_13.jpg", "fs_height"=>"449", "fs_width"=>"650", "client"=>"artist", "url"=>"/artist/")
					)
				);
				
	echo json_encode($thumbArray);
?>