<?php get_header(); ?>

<div <?php bramework_wrapper_class() ?>>

	<main class="container">

		<?php
		while ( have_posts() ) : the_post();

			// The content
			get_template_part( 'partials/content', 'page' );

			// The comments
			if ( comments_open() || get_comments_number() ) {
				comments_template( '/partials/comments.php' );
			}

		endwhile;
		?>

	</main>

</div>

<?php get_footer(); ?>
