<?php get_header(); ?>

<div <?php _bramework_wrapper_class() ?>>

	<main class="container">

		<?php
		while ( have_posts() ) : the_post();

			// The content
			get_template_part( 'views/content', 'page' );

			// The comments
			if ( comments_open() || get_comments_number() ) {
				comments_template( '/views/comments.php' );
			}

		endwhile;
		?>

	</main>

</div>

<?php get_footer(); ?>
