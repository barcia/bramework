<?php
/**
 * Register all menus
 */

add_action( 'after_setup_theme', '_bramework_menus' );


if ( ! function_exists( '_bramework_menus' )) {

  function _bramework_menus() {

    register_nav_menus( array(
      'main' => esc_html__( 'Main', '_bramework_text' ),
      'footer' => esc_html__( 'Footer', '_bramework_text' )
    ) );

  }

}
