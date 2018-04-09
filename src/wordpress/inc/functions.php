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
 * Prints the comments
 */
if ( ! function_exists( '_bramework_post_comments' ) ) :
	function _bramework_post_comments() {

		// If comments are open or we have at least one comment, load up the comment template.
		if ( comments_open() || get_comments_number() ) :
			return comments_template('/partials/comments.php');
		endif;

	}
endif;



/**
 * Prints the pagination
 */
if ( ! function_exists( '_bramework_pagination' ) ) :
	function _bramework_pagination() {

		$args = array(
			'prev_next'          => false,
			'prev_text'          => __('Previous', '_bramework_text'),
			'next_text'          => __('Next', '_bramework_text'),
		);

		echo paginate_links( $args );
	}
endif;



/**
 * Prints a message when no posts
 */
if ( ! function_exists( '_bramework_noposts' ) ) :
	function _bramework_noposts() {

		$message = __('Sorry, no posts matched your criteria.', '_bramework_text');

		echo '<span>' . $message . '</span>';
	}
endif;



/**
 * Edit post link
 */
if ( ! function_exists( '_bramework_editpost' ) ) :
	function _bramework_editpost() {

		return edit_post_link();

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



/**
 * The wrapper classes
 */
if ( ! function_exists( '_bramework_wrapper_class' ) ) :
	function _bramework_wrapper_class( $class='' ) {

		$default_classes = ['wrapper', 'xamon'];


		if ( ! empty( $class ) ) {
				if ( ! is_array( $class ) )
						$class = preg_split( '/[\s,]+/', $class );
		} else {
				// Ensure that we always coerce class to being an array.
				$class = array();
			}

			$classes = array_merge($default_classes, $class );


			// Add classes if the Navbar is fixed
			if (get_theme_mod('_bramework_option_navtype') == 'fixed') {
				$classes[] = "wrapper--NavbarFixed";
			}

			if (get_theme_mod('_bramework_option_navtype') == 'scroll') {
				$classes[] = "wrapper--NavbarScrollSensitive";
			}



			$classes = array_map( 'esc_attr', $classes );

		echo 'class="' . join( ' ', $classes ) . '"';

	}
endif;



/**
 * Return whether we're previewing the front page and it's a static page.
 */
function _bramework_is_static_front_page() {
	return ( is_front_page() && ! is_home() );
}
