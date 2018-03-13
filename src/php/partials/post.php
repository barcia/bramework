<?php while ( have_posts() ) : the_post(); ?>

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		<header class="singular-header">
			<?php get_template_part( 'partials/title' ); ?>
		</header>

		<div class="singular-content">
			<?php the_content(); ?>
		</div>

		<footer class="singular-footer">

			<?php if ( is_single() ): ?>
				<div class="singular-footer-date">
					<?php the_date(); ?>
				</div>

				<div class="singular-footer-category">
					<?php the_category( ', ' ); ?>
				</div>
			<?php endif; ?>
		</footer>

	</article>

<?php endwhile; ?>
