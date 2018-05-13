<?php

/**
 * The wrapper classes
 */
if ( ! function_exists( '_bramework_wrapper_class' ) ) :
	function _bramework_wrapper_class( $class='' ) {

		$default_classes = ['wrapper'];


		if ( ! empty( $class ) ) {
				if ( ! is_array( $class ) )
						$class = preg_split( '/[\s,]+/', $class );
		} else {
				// Ensure that we always coerce class to being an array.
				$class = array();
			}

			$classes = array_merge($default_classes, $class );


			// Add classes if the Navbar is fixed
			if (get_theme_mod('_bramework_option_navtype') == 'fixed') {
				$classes[] = "wrapper--NavbarFixed";
			}

			if (get_theme_mod('_bramework_option_navtype') == 'scroll') {
				$classes[] = "wrapper--NavbarScrollSensitive";
			}



			$classes = array_map( 'esc_attr', $classes );

		echo 'class="' . join( ' ', $classes ) . '"';

	}
endif;



/**
 * Return true whether we're previewing the front page and it's a static page.
 */
function _bramework_is_static_front_page() {
	return ( is_front_page() && ! is_home() );
}
