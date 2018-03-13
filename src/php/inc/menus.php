<?php
// Register the menus

if ( ! function_exists( 'bramework_menus' )) {

  function bramework_menus() {

    register_nav_menus( array(
      'main' => esc_html__( 'Menú principal', 'bramework_text' ),
      'footer' => esc_html__( 'Pié de página', 'bramework_text' )
    ) );

  }

}

add_action( 'after_setup_theme', 'bramework_menus' );
?>
