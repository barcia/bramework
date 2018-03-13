
	<?php if ( is_front_page() ): ?>
		<footer class="footer footer--frontpage">
	<?php else: ?>
		<footer class="footer">
	<?php endif; ?>

			<div class="footer-links">
				<?php wp_nav_menu( array( 'theme_location'   => 'footer' ) ); ?>
			</div>

			<?php wp_footer(); ?>
		</footer>

		<?php if ( is_front_page() ): ?>
			<!-- Frontpage-background started in header.php -->
			</div>
		<?php endif; ?>

	</body>

</html>
