		<footer class="footer" itemscope itemtype="https://schema.org/WPFooter">

			<!-- Footer widget area -->
			<?php get_sidebar( 'footer' ); ?>

			<!-- Footer menu -->
			<?php wp_nav_menu( array(
				'theme_location'   => 'footer',
				'menu_class'   => 'footer-menu',
				'container_class'   => 'footer-links',
				'fallback_cb' => false
			)); ?>

			<!-- Footer text. Edit it in the customizer -->
			<?php if (get_theme_mod('bramework_option_footertext')): ?>
				<span class="footer-text"> <?php echo get_theme_mod('bramework_option_footertext') ?> </span>
			<?php endif; ?>

			<?php wp_footer(); ?>
		</footer>

	</body>

</html>
