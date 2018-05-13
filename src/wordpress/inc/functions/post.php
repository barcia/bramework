<?php





/**
 * Prints the comments
 */
if ( ! function_exists( '_bramework_post_comments' ) ) :
	function _bramework_post_comments() {

		// If comments are open or we have at least one comment, load up the comment template.
		if ( comments_open() || get_comments_number() ) :
			return comments_template('/views/comments.php');
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
