<?php
/**
 * The head and header
 *
 * @package _bramework
 */
 ?>
<!DOCTYPE html>
<html <?php language_attributes();?> >

	<head itenmscope itemtype="https://schema.org/WebSite">
		<?php get_template_part( 'partials/head'); ?>

		<?php wp_head(); ?>
	</head>

	<body <?php body_class( 'body' ); ?> itemscope itemtype="https://schema.org/WebPage">

		<header class="header" itemscope itemtype="https://schema.org/WPHeader">

			<?php if ( ! is_page_template( 'templates/landing.php' )) {
				// The landing page template not shows the navbar
				get_template_part( 'partials/nav' );
			} ?>

		</header>
