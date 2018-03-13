<?php
/**
 * Bramework functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 */

// Sets up theme default settings and WordPress features
if ( ! function_exists( 'bramework_setup' )) {
  function bramework_setup() {

    // show_admin_bar(false);

    // Make theme avaiable for translations.
    load_theme_textdomain( 'bramework_text', get_template_directory() . '/languages' );

    // Let WordPress manage the document title.
    add_theme_support( 'title-tag' );

    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    // Enable support for Post Thumbnails.
    // add_theme_support( 'post-thumbnails', array( 'post' ) );

    // Enable the specific formats
    // add_theme_support( 'post-formats', array( 'video', 'gallery' ) );


    // add_theme_support( 'custom-logo', array(
    //   'height'      => 100,
    //   'width'       => 100,
    //   'flex-height' => true,
    //   'flex-width'  => true,
    //   'header-text' => array( 'site-title', 'site-description' )
    // ) );

    // Allows the use of HTML5 markup for the search forms, comment forms, comment lists, gallery, and caption.
    add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );

    // Enables selective refresh for widgets being managed within the Customizer
    add_theme_support( 'customize-selective-refresh-widgets' );

  }
}

add_action( 'after_setup_theme', 'bramework_setup' );



// Custom archive title
add_filter( 'get_the_archive_title', function ( $title ) {
    $title = single_cat_title( '', false );
    return $title;
});


// Add menus and widget areas config files.
require get_template_directory() . '/inc/menus.php';
require get_template_directory() . '/inc/scripts.php';
require get_template_directory() . '/inc/widget-areas.php';

// Add shortcodes
// require get_template_directory() . '/shortcodes/socialicons.php';
?>
