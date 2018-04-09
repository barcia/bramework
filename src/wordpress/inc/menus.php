<?php
/**
 * Register all menus
 */

add_action( 'after_setup_theme', 'bramework_menus' );


if ( ! function_exists( 'bramework_menus' )) {

  function bramework_menus() {

    register_nav_menus( array(
      'main' => esc_html__( 'Main', 'bramework_text' ),
      'footer' => esc_html__( 'Footer', 'bramework_text' )
    ) );

  }

}
