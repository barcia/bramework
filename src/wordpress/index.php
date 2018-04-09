<?php get_header(); ?>

	<div <?php bramework_wrapper_class() ?>>

		<main class="container">

			<header class="loop-header">

				<?php get_template_part( 'partials/header'); ?>

			</header>

			<?php if ( have_posts() ) : ?>

				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'partials/content', 'excerpt'); ?>

				<?php endwhile; ?>

					<?php bramework_pagination(); ?>

			<?php else : ?>

				<p><?php bramework_noposts() ?></p>

			<?php endif; ?>

		</main>

		<?php get_sidebar( 'primary' ); ?>

	</div>

<?php get_footer(); ?>
