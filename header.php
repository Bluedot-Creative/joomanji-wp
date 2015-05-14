<?php

// Exit if accessed directly
if ( !defined('ABSPATH')) exit;

/**
 * Header Template
 *
 * @file           header.php
 * @package        Elegant Themes
 * @author         Andrew Carl
 * @copyright      2013
 */
?>
<!doctype html>
<!--[if !IE]>      <html class="no-js non-ie" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 9 ]>    <html class="no-js ie9" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 9]><!--> 
<html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
<head>

<meta charset="<?php bloginfo('charset'); ?>" />
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">

<title><?php wp_title('&#124;', true, 'right'); ?> | JOOMANJI MUSIC</title>

<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
<link href="<?php echo get_stylesheet_directory_uri(); ?>/style.css" rel="stylesheet" type="style/css"/>

<?php wp_head(); ?>

</head>
<!-- end head -->

<!-- body -->
<body <?php body_class(); ?> >

<?php $options = get_option( 'elegant_theme_options' ); ?> 

<!-- #header-wrapper -->

<div class="wrapper">
		
	<div class="header container">

		<!-- #header -->
		<header>
			<aside class="menu-toggle">
				<i class="icon-menu m-point" nav-toggle="nav.main"></i>
			</aside>
			<aside class="logo left">
					<a href="<?php echo home_url('/'); ?>">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo_transp_white.png">
					</a>
			</aside>
			<aside class="sharing js-sharing-toggle">
				<div class="sharing-container">
					<a href="https://soundcloud.com/joomanji" target="_blank"><i class="icon-soundcloud"></i></a>
					<a href="https://www.facebook.com/joomanjimusic" target="_blank"><i class="icon-facebook"></i></a>
					<a href="https://play.spotify.com/artist/1TGyEDXHDYwHNB012Otfhj?play=true&utm_source=open.spotify.com&utm_medium=open" target="_blank"><i class="icon-spotify"></i></a>
					<a href="https://twitter.com/AmirOosman" target="_blank"><i class="icon-twitter"></i></a>
				</div>
			</aside>

		</header>
		<!-- end header -->

		<?php if ( has_nav_menu( 'main' ) ) : ?>
			<nav class="main">
				<div class="menu">
					<ul>
						<?php wp_nav_menu( array( 'theme_location' => 'main', 'items_wrap' => '%3$s', 'container' => '' ) ); ?>
					</ul>
				</div>
			</nav>
		<?php endif; ?>

	</div>
	<!-- end .header -->

<?php ?>