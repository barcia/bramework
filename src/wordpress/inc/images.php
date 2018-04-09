<?php

/**
 * Remove default image sizes
 */

// add_filter('intermediate_image_sizes_advanced', 'bramework_remove_default_image_sizes');
//
//
// if ( ! function_exists( 'bramework_remove_default_image_sizes' )) {
//
// 	function bramework_remove_default_image_sizes( $sizes) {
// 		unset( $sizes['thumbnail']); // 150px
// 		unset( $sizes['medium']); // 300px
// 		unset( $sizes['medium_large']); //768px
// 		unset( $sizes['large']); //1024px
//
// 		return $sizes;
// 	}
//
// }



/**
 * Add custom image sizes
 *
 * @link http://developer.wordpress.org/reference/functions/add_image_size/
 */

// add_image_size( 'medium-width', 480 );
// add_image_size( 'medium-height', 9999, 480 );
// add_image_size( 'medium-something', 480, 480 );



/**
 * Register the custom image sizes for use in Add Media modal
 *
 * @link https://codex.wordpress.org/Plugin_API/Filter_Reference/image_size_names_choose
 */

// add_filter( 'image_size_names_choose', 'bramework_custom_sizes' );
//
//
// if ( ! function_exists( 'bramework_custom_sizes' )) {
//
// 	function bramework_custom_sizes( $sizes ) {
//
// 		return array_merge( $sizes, array(
// 			'medium-width' => __('Medium Width'),
// 			'medium-height' => __( 'Medium Height' ),
// 			'medium-something' => __( 'Medium Something' ),
// 		) );
//
// 	}
//
// }
