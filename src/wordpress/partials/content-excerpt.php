<article id="post-<?php the_ID(); ?>" <?php post_class( 'loop' ); ?> itemscope itemtype="https://schema.org/CreativeWork">

	<header class="loop-header">
			<!-- <?php if ( has_post_thumbnail() ): ?>
				<figure class="loop-thumbnail" itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
					<?php	the_post_thumbnail(); ?>
				</figure>
			<?php endif; ?> -->
			<h3 class="loop-title" itemprop="headline">
				<a href="<?php echo esc_url( get_permalink() ) ?>"><?php the_title(); ?></a>
			</h3>
	</header>

	<div class="loop-content" itemprop="text">
		<?php the_excerpt(); ?>
	</div>

	<div class="loop-readmore">
		<a href="<?php echo esc_url( get_permalink() ) ?>"><?php _e('Read more', ('bramework_text')) ?></a>
	</div>

	<footer class="loop-footer">
		<div class="loop-meta">
			<div class="loop-meta-date"> <?php bramework_post_date() ?> </div>
			<div class="loop-meta-author"> <?php bramework_post_author(); ?> </div>
			<div class="loop-meta-category"> <?php bramework_post_category(); ?> </div>
			<div class="loop-meta-tags"> <?php bramework_post_tags(); ?> </div>
			<div class="loop-meta-commentsnumber"> <?php bramework_commentsnumber(); ?> </div>
		</div>
	</footer>

</article>
