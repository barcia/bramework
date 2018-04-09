<?php /* Template Name: Landing Page */ ?>
<?php get_header(); ?>

<div class="wrapper">

	<main class="container">

		<?php
		while ( have_posts() ) : the_post();

			get_template_part( 'partials/post' );

			if ( comments_open() || get_comments_number() ) :
				comments_template( '/partials/comments.php' );
			endif;

		endwhile;
		?>


	</main>

</div>

<?php get_footer(); ?>
