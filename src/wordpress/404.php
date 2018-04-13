<?php get_header(); ?>

<div <?php _bramework_wrapper_class() ?>>

	<main class="container">

		<div>
			<h1><?php _e('Error 404. Not Found', '_bramework_text') ?></h1>
			<p><?php _e('Oh, f***! 😯 The page that you search not exist.', '_bramework_text') ?></p>
			<?php get_search_form() ?>
		</div>

	</main>

</div>

<?php get_footer(); ?>
