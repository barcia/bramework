<?php
/**
 * Set up all widget-areas
 */

add_action( 'widgets_init', 'bramework_widgetareas' );


if ( ! function_exists( 'bramework_widgetareas' )) {

	// Function
	function bramework_widgetareas() {

		$before_widget = '<section id="widget-%1$s" class="widget %2$s">';
		$after_widget = '</section>';

		register_sidebar( array(
			'id'            => 'sidebar',
			'name'          => esc_html__( 'Sidebar', 'bramework_text' ),
			'description'   => esc_html__( 'The main sidebar. Only visible in blog or archive pages.', 'bramework_text' ),
			'before_widget' => $before_widget,
			'after_widget'  => $after_widget,
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		) );

		register_sidebar( array(
			'id'            => 'after-post',
			'name'          => esc_html__( 'After post', 'bramework_text' ),
			'description'   => esc_html__( 'After every posts, and before comments', 'bramework_text' ),
			'before_widget' => $before_widget,
			'after_widget'  => $after_widget,
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		) );

		register_sidebar( array(
			'id'            => 'footer',
			'name'          => esc_html__( 'Footer', 'bramework_text' ),
			'description'   => esc_html__( 'In the site footer.', 'bramework_text' ),
			'before_widget' => $before_widget,
			'after_widget'  => $after_widget,
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		) );

	}

}
