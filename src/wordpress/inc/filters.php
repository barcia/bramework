<?php

/**
 * Filter the excerpt "read more" string.
 */

add_filter( 'excerpt_more', '_bramework_excerpt_more' );

function _bramework_excerpt_more( $more ) {
    return '&hellip;';
}



/**
 * Custom archive title
 */

// if ( ! function_exists( '_bramework_change_archive_title' ) ) {
//
// 	function _bramework_change_archive_title( $title ) {
// 		if ( is_category() ) {
// 			$title = single_cat_title( '', false );
// 		} elseif ( is_tag() ) {
// 			$title = single_tag_title( '#', false );
// 		} elseif ( is_author() ) {
// 			$title = '<span class="vcard">' . get_the_author() . '</span>';
// 		} elseif ( is_year() ) {
// 			$title = get_the_date( 'Y' );
// 		} elseif ( is_month() ) {
// 			$title = get_the_date( 'F Y' );
// 		} elseif ( is_day() ) {
// 			$title = get_the_date( get_option( 'date_format' ) );
// 		} elseif ( is_tax( 'post_format' ) ) {
// 			if ( is_tax( 'post_format', 'post-format-aside' ) ) {
// 				$title = _x( 'Asides', 'post format archive title', '_bramework_text' );
// 			} elseif ( is_tax( 'post_format', 'post-format-gallery' ) ) {
// 				$title = _x( 'Galleries', 'post format archive title', '_bramework_text' );
// 			} elseif ( is_tax( 'post_format', 'post-format-image' ) ) {
// 				$title = _x( 'Images', 'post format archive title', '_bramework_text' );
// 			} elseif ( is_tax( 'post_format', 'post-format-video' ) ) {
// 				$title = _x( 'Videos', 'post format archive title', '_bramework_text' );
// 			} elseif ( is_tax( 'post_format', 'post-format-quote' ) ) {
// 				$title = _x( 'Quotes', 'post format archive title', '_bramework_text' );
// 			} elseif ( is_tax( 'post_format', 'post-format-link' ) ) {
// 				$title = _x( 'Links', 'post format archive title', '_bramework_text' );
// 			} elseif ( is_tax( 'post_format', 'post-format-status' ) ) {
// 				$title = _x( 'Statuses', 'post format archive title', '_bramework_text' );
// 			} elseif ( is_tax( 'post_format', 'post-format-audio' ) ) {
// 				$title = _x( 'Audio', 'post format archive title', '_bramework_text' );
// 			} elseif ( is_tax( 'post_format', 'post-format-chat' ) ) {
// 				$title = _x( 'Chats', 'post format archive title', '_bramework_text' );
// 			}
// 		} elseif ( is_post_type_archive() ) {
// 			$title = post_type_archive_title( '', false );
// 		} elseif ( is_tax() ) {
// 			$title = single_term_title( '', false );
// 		} else {
// 			$title = __( 'Archives', '_bramework_text' );
// 		}
// 		return $title;
// 	}
// 	add_filter( 'get_the_archive_title', '_bramework_change_archive_title' );
// }
