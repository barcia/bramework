<?php if ( have_posts() ) : ?>

	<?php while ( have_posts() ) : the_post(); ?>

			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

				<a class="loop-post-link" href="<?php echo esc_url( get_permalink() ) ?>">
						<header class="loop-post-header">
							<h1 class="loop-post-title"><?php the_title(); ?></h1>
						</header>

						<div class="loop-post-content">
							<?php the_excerpt(); ?>
						</div>
				</a>
				<footer class="loop-post-footer">
					<div class="loop-post-footer-date">
						<?php the_date(); ?>
					</div>

					<div class="loop-post-footer-category">
						<?php the_category( ', ' ); ?></div>
				</footer>

			</article>

<?php endwhile; else :
	_e( 'No se encontraron entradas.', 'textdomain' );
	?>

<?php endif; ?>
