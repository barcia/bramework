<?php

/**
 * All customizer options
 */

add_action( 'customize_register', '_bramework_customizer' );


if ( ! function_exists( '_bramework_customizer' )) {

	function _bramework_customizer( $wp_customize ) {


		// Panel for  sections
		// You must add: 'panel' => '_bramework_options', in sections
	  // $wp_customize->add_panel( '_bramework_options', array(
	  //   'title' => __( 'Theme options', '_bramework_text' ),
	  //   'priority' => 220,
	  //   'capability' => 'edit_theme_options',
	  // ));



		// Theme Settings section
		$wp_customize->add_section( '_bramework_settings' , array(
		  'title' => __( 'Theme settings', '_bramework_text' ),
		  'description' => __( 'Change here all theme settings', '_bramework_text' ),
		  // 'priority' => 1,
		  'capability' => 'edit_theme_options',
		  'active_callback' => '',
		  'theme_supports' => '',
		));



		// Navbar type
	  $wp_customize->add_setting('_bramework_option_navtype', array(
	    'type' => 'theme_mod',
	    'capability' => 'edit_theme_options',
			'default' => 'default'
	  ));

	  $wp_customize->add_control('_bramework_option_navtype', array(
	    'label' => __( 'Navigation bar type', '_bramework_text' ),
	    'description' => __( 'Choose the navigation bar type:', '_bramework_text' ),
	    'section' => '_bramework_settings',
	    'priority' => 1,
	    'type' => 'select',
			'choices' => array(
				'default' => __( 'Default', '_bramework_text' ),
				'fixed' => __( 'Fixed', '_bramework_text' ),
				'scroll' => __( 'Scroll-sensitive', '_bramework_text' ),
			)
	  ));



		// Footer text
	  $wp_customize->add_setting('_bramework_option_footertext', array(
	    'type' => 'theme_mod',
	    'capability' => 'edit_theme_options',
			'default' => 'Made by Barcia'
	  ));

	  $wp_customize->add_control('_bramework_option_footertext', array(
	    'label' => __( 'Footer text', '_bramework_text' ),
			'description' => __( 'Type here the footer text. It allows HTML, SVG, Emojis, etc.', '_bramework_text' ),
	    'section' => '_bramework_settings',
	    'priority' => 2,
	    'type' => 'text'
	  ));



	}

}
