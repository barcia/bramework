<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> itemscope itemtype="https://schema.org/CreativeWork">

	<header class="post-header">
		<?php if ( has_post_thumbnail() ): ?>
			<figure class="post-thumbnail" itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
				<?php	the_post_thumbnail(); ?>
			</figure>
		<?php endif; ?>

		<h1 class="post-title" itemprop="headline"><?php single_post_title(); ?></h1>
	</header>

	<div class="post-content" itemprop="text">
		<?php the_content(); ?>
	</div>

	<div class="post-edit">
		<?php bramework_editpost(); ?>
	</div>

	<footer class="post-footer">
		<?php if ( is_single() ): ?>
			<div class="post-meta">
				<div class="post-meta-date"> <?php bramework_post_date() ?> </div>
				<div class="post-meta-author"> <?php bramework_post_author(); ?> </div>
				<div class="post-meta-category"> <?php bramework_post_category(); ?> </div>
				<div class="post-meta-tags"> <?php bramework_post_tags(); ?> </div>
			</div>
		<?php endif; ?>
	</footer>

</article>

<?php get_sidebar( 'afterpost' ); ?>
