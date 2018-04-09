<?php
/**
 * Bramework functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 */

// show_admin_bar(false);


// Add menus and widget areas config files.
require get_template_directory() . '/inc/setup.php';
require get_template_directory() . '/inc/scripts.php';
require get_template_directory() . '/inc/menus.php';
require get_template_directory() . '/inc/widget-areas.php';
require get_template_directory() . '/inc/functions.php';
require get_template_directory() . '/inc/images.php';
require get_template_directory() . '/inc/filters.php';
require get_template_directory() . '/inc/customizer.php';

// Add shortcodes
// require get_template_directory() . '/shortcodes/socialicons.php';
?>
