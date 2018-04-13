<?php
/**
 * Template for displaying search forms
 */
?>

<?php $unique_id = esc_attr( uniqid( 'SearchForm-' ) ); ?>

<form class="SearchForm" role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label class="SearchForm-label h-screenReader" for="<?php echo $unique_id; ?>">
		<span><?php echo _x( 'Search:', 'search form label', '_bramework_text' ); ?></span>
	</label>

	<input id="<?php echo $unique_id; ?>" class="SearchForm-field" type="search"  placeholder="<?php echo esc_attr_x( 'Search&hellip;', 'placeholder', '_bramework_text' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />

	<button class="SearchForm-button" type="submit" name="button">
		<span><?php echo _x( 'Search', 'search form submit button', '_bramework_text' ); ?></span>
	</button>
</form>
