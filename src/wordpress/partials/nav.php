<?php
	if (get_theme_mod('bramework_option_navtype') == 'fixed') {
		$navbarTypeClass = "Navbar--fixed";
	}

	elseif (get_theme_mod('bramework_option_navtype') == 'scroll') {
		$navbarTypeClass = "Navbar--scrollSensitive";
	}

	else {
		$navbarTypeClass = "";
	}
 ?>

<div class="Navbar <?php _e($navbarTypeClass) ?>">
	<div class="Navbar-brand">
		<div class="Navbar-logo">
			<?php the_custom_logo(); ?>
		</div>
		<div class="Navbar-info">
			<h3 class="Navbar-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h3>
			<p class="Navbar-description"><?php bloginfo( 'description' ); ?></p>
		</div>
	</div>
	<nav class="Navbar-right" aria-label="Main navigation" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
		<?php wp_nav_menu( array(
			'theme_location' => 'main',
			'menu_class' => 'Navbar-items'
		) ); ?>
	</nav>
</div>
