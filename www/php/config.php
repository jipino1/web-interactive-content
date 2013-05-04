<?php
$isHTTPS = (isset($_SERVER['SERVER_ROOT']) && $_SERVER['SERVER_PORT'] == 443);
$protocol = ($isHTTPS > 0) ? 'https://' : 'http://';
define('PROTOCOL', $protocol);

if(isset($_SERVER) && isset($_SERVER['SERVER_NAME'])){
	switch($_SERVER['SERVER_NAME']){
		case "local.jimmypino.com":
			$root = $protocol . 'local.jimmypino.com/';
			$isProd = false;
			break;	
		case "jimmypino.com":
		case "www.jimmypino.com":
			$root = $protocol . 'jimmypino.com/';
			$isProd = false;
			break;
	}
}

$isPreview= false;

if($isPreview){
	$root .= 'preview/';
}

define('PRODUCTION_ENV', $isProd);
define('DOMAIN_ROOT', $root);

?>