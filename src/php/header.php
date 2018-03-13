<!DOCTYPE html>
<html <?php language_attributes();?> >

	<head>
		<?php get_template_part( 'partials/head'); ?>
	</head>

	<body>
		<?php if ( is_front_page() ): ?>
			<div class="frontpage">
		<?php endif; ?>

		<header class="site-header">

			<?php get_template_part( 'partials/nav'); ?>

		</header>
