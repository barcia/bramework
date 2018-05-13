<?php if ( is_home() ): ?>
<h1 class="loop-title">Blog</h1>
<?php elseif ( is_archive() ): ?>
	<div class="loop-archive">
		<h2 class="loop-archive-title"><?php the_archive_title(); ?></h2>
	</div>
<?php elseif ( is_search() ): ?>
	<h2><?php printf( esc_html__( 'Search Results for: %s', '_s' ), '<span>' . get_search_query() . '</span>' ); ?></h2>
<?php endif; ?>
