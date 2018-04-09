<?php

/**
 * All customizer options
 */

add_action( 'customize_register', 'bramework_customizer' );


if ( ! function_exists( 'bramework_customizer' )) {

	function bramework_customizer( $wp_customize ) {


		// Panel for  sections
		// You must add: 'panel' => 'bramework_options', in sections
	  // $wp_customize->add_panel( 'bramework_options', array(
	  //   'title' => __( 'Theme options', 'bramework_text' ),
	  //   'priority' => 220,
	  //   'capability' => 'edit_theme_options',
	  // ));



		// Theme Settings section
		$wp_customize->add_section( 'bramework_settings' , array(
		  'title' => __( 'Theme settings', 'textdomain' ),
		  'description' => __( 'Change here all theme settings', 'textdomain' ),
		  // 'priority' => 1,
		  'capability' => 'edit_theme_options',
		  'active_callback' => '',
		  'theme_supports' => '',
		));



		// Navbar type
	  $wp_customize->add_setting('bramework_option_navtype', array(
	    'type' => 'theme_mod',
	    'capability' => 'edit_theme_options',
			'default' => 'default'
	  ));

	  $wp_customize->add_control('bramework_option_navtype', array(
	    'label' => __( 'Navigation bar type', 'textdomain' ),
	    'description' => __( 'Choose the navigation bar type:', 'textdomain' ),
	    'section' => 'bramework_settings',
	    'priority' => 1,
	    'type' => 'select',
			'choices' => array(
				'default' => __( 'Default', 'textdomain' ),
				'fixed' => __( 'Fixed', 'textdomain' ),
				'scroll' => __( 'Scroll-sensitive', 'textdomain' ),
			)
	  ));



		// Footer text
	  $wp_customize->add_setting('bramework_option_footertext', array(
	    'type' => 'theme_mod',
	    'capability' => 'edit_theme_options',
			'default' => 'Made by Barcia'
	  ));

	  $wp_customize->add_control('bramework_option_footertext', array(
	    'label' => __( 'Footer text', 'textdomain' ),
			'description' => __( 'Type here the footer text. It allows HTML, SVG, Emojis, etc.', 'textdomain' ),
	    'section' => 'bramework_settings',
	    'priority' => 2,
	    'type' => 'text'
	  ));



	}

}
