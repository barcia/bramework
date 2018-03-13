<div class="title-container">

	<?php if ( is_home() ): ?>
		<h1 class="home-title">Blog</h1>

	<?php elseif ( is_archive() ): ?>
		<h1 class="home-title">Blog</h1>
		<div class="home-archive">
			<h2 class="archive-title"><?php the_archive_title(); ?></h2>
		</div>

	<?php elseif ( is_singular() ): ?>
		<h1 class="singular-title"><?php the_title(); ?></h1>

	<?php endif; ?>

</div>
