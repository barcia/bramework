<?php get_header(); ?>

<div class="wrapper">

	<main class="container">

		<?php
		while ( have_posts() ) : the_post();
 echo wp_get_attachment_image( get_the_ID(), 'large' );
			// The content
			get_template_part( 'partials/content', get_post_format() );

			echo "Proximo: " . next_post_link();
			// The comments
			if ( comments_open() || get_comments_number() ) {
				comments_template( '/partials/comments.php' );
			}

		endwhile;
		?>

	</main>

</div>

<?php get_footer(); ?>
