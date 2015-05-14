<?php

//
//	Bootstrap Child Theme Functions
//	@author	Andrew Carl
//	@date	April 2014
//

include(ABSPATH . '/wp-content/themes/portfolio/includes/theme-options.php');
include(ABSPATH . '/wp-content/themes/portfolio/includes/theme-shortcode.php');
include(ABSPATH . '/wp-content/themes/portfolio/includes/theme-sidebar.php');
include(ABSPATH . '/wp-content/themes/portfolio/includes/theme-widget.php');
include(ABSPATH . '/wp-content/themes/portfolio/includes/theme-menu.php');
include(ABSPATH . '/wp-content/themes/portfolio/includes/theme-hooks.php');

//  Theme Widgets
include(ABSPATH . '/wp-content/themes/portfolio/includes/widgets/content-block-widget.php');

//  Theme Extensions
include(ABSPATH . '/wp-content/themes/portfolio/includes/extensions/contentblock.php');
include(ABSPATH . '/wp-content/themes/portfolio/includes/extensions/music-player/init.php');

function childtheme_scripts() {

  //  Theme Assets
	wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/assets/js/javascript.js', array( 'jquery') );
  wp_enqueue_style('main-css', get_stylesheet_directory_uri() . '/assets/css/main.css' );

  //  Font Styles from Icomoon
  wp_enqueue_style('icomoon-font', get_stylesheet_directory_uri() . '/assets/fonts/icomoon/style.css');

  //  Twinkle UI support
  wp_enqueue_script('modernizr-js', get_stylesheet_directory_uri() . '/assets/js/libs/modernizr-2.6.2.min.js', array( 'jquery'));
  wp_enqueue_script('twinkle-js', get_stylesheet_directory_uri() . '/assets/js/twinkle.js', array( 'jquery'));

} add_action('wp_enqueue_scripts','childtheme_scripts'); 




//
//	HTML Additions
//

?>