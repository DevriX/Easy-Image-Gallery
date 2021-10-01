<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class EIG_Main_Class
 *
 * This is the bootloader class that load and initialize the plugin's classes/traits.
 *
 * @package DX\EIG
 */
class EIG_Main_Class {

	public function __construct() {
		add_action( 'init', array( $this, 'include_classes' ), 10 );
	}

	/**
	 * This function includes all the classes/traits on the plugins_loaded with priority
	 * 10 in order to be easily overwritten.
	 */
	public function include_classes() {
		require EASY_IMAGE_GALLERY_DIR . 'includes/classes/class-admin-menu.php';
		require EASY_IMAGE_GALLERY_DIR . 'includes/classes/class-eig-extensions-installer.php';
	}

}

new EIG_Main_Class();
