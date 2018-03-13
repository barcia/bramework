<?php
if ( ! function_exists( 'bramework_scripts' )) {

	function bramework_scripts() {
		wp_enqueue_style( 'styles', get_stylesheet_directory_uri() . '/assets/style.min.css', array(), '1.0.1' );
		wp_enqueue_style( 'fonts', 'https://fonts.googleapis.com/css?family=Open+Sans:400,700', array(), '1.0.0' );
		wp_enqueue_script( 'scripts', get_stylesheet_directory_uri() . '/assets/script.min.js', array(), '1.0.1' );

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}

}

add_action( 'wp_enqueue_scripts', 'bramework_scripts' );


// Add defer attribute
function add_defer_attribute($tag, $handle) {
   // agregar los handles de los scripts en el array
   $scripts_to_defer = array('scripts');

   foreach($scripts_to_defer as $defer_script) {
      if ($defer_script === $handle) {
         return str_replace(' src', ' defer src', $tag);
      }
   }
   return $tag;
}

add_filter('script_loader_tag', 'add_defer_attribute', 10, 2);
?>
