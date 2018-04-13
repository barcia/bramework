<?php
/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<aside id="<?php _e('comments', '_bramework_text') ?>" class="post-comments">

	<?php if ( have_comments() ) : ?>

		<!-- Title -->
		<h3 class="post-comments-title"><?php _e('Comments', '_bramework_text') ?></h3>

		<!-- Comments -->
		<ol class="post-comments-list">
			<?php
				wp_list_comments(
					array(
						'style'    => 'ol',
						'type' => 'comment'
					)
				);
			?>
		</ol>


		<!-- Comments navigation -->
		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // are there comments to navigate through ?>
		<nav class="post-comments-nav" role="navigation">
			<span><?php paginate_comments_links() ?></span>
		</nav>
		<?php endif;?>

		<?php
		/* If there are no comments and comments are closed, let's leave a note.
		 * But we only want the note on posts and pages that had comments in the first place.
		 */
		if ( ! comments_open() && get_comments_number() ) : ?>

		<p class="post-comments-nocomments"><?php _e( 'Comments are closed.', '_bramework_text' ); ?></p>

		<?php endif; ?>

	<?php endif; // have_comments() ?>

	<!-- Comment form -->
	<?php comment_form(); ?>

</aside>
