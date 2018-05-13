<?php get_header(); ?>

	<div <?php _bramework_wrapper_class() ?>>

		<main class="container">

			<header class="loop-header">

				<?php get_template_part( 'views/header'); ?>

			</header>

			<?php if ( have_posts() ) : ?>

				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'views/content', 'excerpt'); ?>

				<?php endwhile; ?>

					<?php _bramework_pagination(); ?>

			<?php else : ?>

				<p><?php _bramework_noposts() ?></p>

			<?php endif; ?>

		</main>

		<?php get_sidebar( 'primary' ); ?>

	</div>

<?php get_footer(); ?>
