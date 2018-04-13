<?php
/**
 * Sets up theme default settings and WordPress features
 */

add_action( 'after_setup_theme', '_bramework_setup' );


if ( ! function_exists( '_bramework_setup' )) {

	// Function
  function _bramework_setup() {

		// Set the content width in px
		if ( is_active_sidebar( 'primary' ) ) {
			$content_width = 1150;
		} else {
			$content_width = 800;
		}

    // Make theme avaiable for translations.
    load_theme_textdomain( '_bramework_text', get_template_directory() . '/languages' );

    // Let WordPress manage the document title.
    add_theme_support( 'title-tag' );

    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    // Enable support for Post Thumbnails.
    // @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
    add_theme_support( 'post-thumbnails', array( 'post' ) );

    // Enable the specific formats
    // add_theme_support( 'post-formats', array( 'video', 'gallery' ) );

		// Custom logo
    add_theme_support( 'custom-logo', array(
      'height'      => 100,
      'width'       => 130,
      'flex-height' => true,
      'header-text' => array( 'Navbar-title', 'site-description' )
    ) );

    // Allows the use of HTML5 markup for the search forms, comment forms, comment lists, gallery, and caption.
    add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );

    // Enables selective refresh for widgets being managed within the Customizer
    add_theme_support( 'customize-selective-refresh-widgets' );
  }
}
