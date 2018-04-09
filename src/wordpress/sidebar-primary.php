<?php if ( is_active_sidebar( 'sidebar' ) ) : ?>

	<aside id="widgetArea-sidebar" class="widgetArea sidebar" aria-label="Primary Sidebar" role="complementary" itemscope itemtype="https://schema.org/WPSideBar">

		<?php dynamic_sidebar( 'sidebar' ); ?>

	</aside>

<?php endif; ?>
