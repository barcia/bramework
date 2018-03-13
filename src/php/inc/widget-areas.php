<?php
if ( ! function_exists( 'bramework_widgetareas' )) {

	function bramework_widgetareas() {

		register_sidebar( array(
			'name'          => esc_html__( 'Sidebar', 'bramework_text' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add sidebar widgets here.', 'bramework_text' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		) );

	}

}

add_action( 'widgets_init', 'bramework_widgetareas' );
?>
