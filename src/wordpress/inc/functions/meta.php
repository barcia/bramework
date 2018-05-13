<?php

/**
 * Prints the published date
 */
if ( ! function_exists( '_bramework_post_date' ) ) :
	function _bramework_post_date() {
		$time_string = '<time class="post-date-published" itemprop="datePublished" datetime="%1$s">%2$s</time>';

		$time_string = sprintf( $time_string,
			esc_attr( get_the_date( 'c' ) ),
			esc_html( get_the_date() )
		);

		echo $time_string;
	}
endif;



/**
 * Prints the updated date
 */
if ( ! function_exists( '_bramework_update_date' ) ) :
	function _bramework_update_date() {

		if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			$time_string = '<time class="post-date-updated" itemprop="dateModified" datetime="%1$s">%2$s</time>';
		}

		$time_string = sprintf( $time_string,
			esc_attr( get_the_modified_date( 'c' ) ),
			esc_html( get_the_modified_date() )
		);

		echo $time_string;
	}
endif;



/**
 * Prints the author
 * $attr - The type of output: 'default' or 'link'
 */
if ( ! function_exists( '_bramework_post_author' ) ) :
	function _bramework_post_author( $attr='default' ) {
		$author_name = '<span itemprop="name">' . esc_html( get_the_author() ) . '</span>';
		$author_link = '<a href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '" itemprop="url" rel="author">' . $author_name . '</a>';

		if ($attr == 'link') {
			$author_output = $author_link;
		}
		else {
			$author_output = $author_name;
		}

		$author_string = '<span itemprop="author" itemscope itemtype="https://schema.org/Person">' . $author_output . '</span>';

		echo $author_string;
	}
endif;



/**
 * Prints the categories
 */
if ( ! function_exists( '_bramework_post_category' ) ) :
	function _bramework_post_category( $args = ', ' ) {

		echo '<span>' , the_category( $args ) , '</span>';
	}
endif;



/**
 * Prints the tags
 */
if ( ! function_exists( '_bramework_post_tags' ) ) :
	function _bramework_post_tags( $args = '' ) {

		echo '<span>' , the_tags( $args ) , '</span>';
	}
endif;



/**
 * Prints the comments number
 */
if ( ! function_exists( '_bramework_commentsnumber' ) ) :
	function _bramework_commentsnumber() {

		if ( get_comments_number() ) {
			echo '<span itemprop="commentCount">' . get_comments_number() . '</span>';
		}

	}
endif;
