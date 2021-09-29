<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Admin_Menu
 *
 * This is the class that adds the plugin dashboard menus
 *
 * @package DX\EIG
 */
class Admin_Menu {
	public $plugin_ext = array(
		'easy-image-gallery-mosaic-master'  => array(
			'slug' => 'easy-image-gallery-mosaic-master',
			'args' => array(
				'name'              => 'Mosaic Gallery View',
				'short_description' => 'Mosaic Gallery View Description',
				'slug'              => 'easy-image-gallery-mosaic-master',
				'author'            => 'DevriX',
				'icons'             => array(
					'1x' => 'https://ps.w.org/easy-image-gallery/assets/icon-128x128.png?rev=2235126',
				),
				'download_link'     => 'https://github.com/vabrashev/easy-image-gallery-mosaic/archive/master.zip',
			),
		),
		'easy-image-gallery-masonry-master' => array(
			'slug' => 'easy-image-gallery-masonry-master',
			'args' => array(
				'name'              => 'Masonry Gallery View',
				'short_description' => 'Masonry Gallery View Description',
				'slug'              => 'easy-image-gallery-masonry-master',
				'author'            => 'DevriX',
				'icons'             => array(
					'1x' => 'https://ps.w.org/easy-image-gallery/assets/icon-128x128.png?rev=2235126',
				),
				'download_link'     => 'https://github.com/vabrashev/easy-image-gallery-masonry/archive/master.zip',
			),
		),
		'easy-image-gallery-album-master' => array(
			'slug' => 'easy-image-gallery-album-master',
			'args' => array(
				'name'              => 'Album Gallery View',
				'short_description' => 'Album Gallery View Description',
				'slug'              => 'easy-image-gallery-album-master',
				'author'            => 'DevriX',
				'icons'             => array(
					'1x' => 'https://ps.w.org/easy-image-gallery/assets/icon-128x128.png?rev=2235126',
				),
				'download_link'     => 'https://github.com/ivanviyachki/easy-image-gallery-album/archive/master.zip',
			),
		),
	);
	/**
	 * Hooking on init
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'init' ), 20 );
	}

	/**
	 * Add EIG Plugin Options Pages
	 *
	 * @since 1.4.1
	 */
	public function init() {
		add_menu_page(
			__( 'Easy Image Gallery', 'easy-image-gallery' ),
			__( 'Easy Image Gallery', 'easy-image-gallery' ),
			'manage_options',
			'eig-settings',
			array( $this, 'eig_settings_page' )
		);

		add_submenu_page(
			'eig-settings',
			__( 'Easy Image Gallery Extensions', 'textdomain' ),
			__( 'Extensions', 'textdomain' ),
			'manage_options',
			'eig-extensions',
			array( $this, 'eig_extensions_page' )
		);
	}
	/**
	 * Registering settings page (Admin)
	 *
	 * @return void
	 */
	public function eig_settings_page() {
		include_once( EASY_IMAGE_GALLERY_DIR . 'includes/views/admin-page.php' );
	}
	/**
	 * Registering extensions page (Admin)
	 *
	 * @return void
	 */
	public function eig_extensions_page() {
		include_once( EASY_IMAGE_GALLERY_DIR . 'includes/views/extensions-page.php' );
	}

}

new Admin_Menu();
