<?php
/**
 * EIG_Extensions_Installer
 *
 * @author   DevriX
 * @version  1.0
 * @package DX\EIG
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'EIG_Extensions_Installer' ) ) {
	/**
	 * Installing extensions
	 */
	class EIG_Extensions_Installer {

		public function start() {
			//define( 'CNKT_INSTALLER_PATH', plugins_url( '/', __FILE__ ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'eig_enqueue_scripts' ) );
			add_action( 'wp_ajax_eig_ext_install', array( $this, 'eig_ext_install_local' ) );
			add_action( 'wp_ajax_eig_ext_activation', array( $this, 'eig_ext_activation_local' ) );
		}

		/**
		 * Init
		 * Initialize the display of the plugins.
		 *
		 * @param array $plugins Array - plugin data.
		 *
		 * @since 1.0
		 */
		public static function init( $plugins ) { ?>

		<div class="cnkt-plugin-installer">
			<?php
			require_once ABSPATH . 'wp-admin/includes/plugin-install.php';

			foreach ( $plugins as $plugin ) :

				$button_classes = 'install button';
				$button_text    = __( 'Install Now', 'eig_extension' );

				$api = plugins_api(
					'plugin_information',
					array(
						'slug'   => sanitize_file_name( $plugin['slug'] ),
						'fields' => array(
							'short_description' => true,
							'sections'          => false,
							'requires'          => false,
							'downloaded'        => true,
							'last_updated'      => false,
							'added'             => false,
							'tags'              => false,
							'compatibility'     => false,
							'homepage'          => false,
							'donate_link'       => false,
							'icons'             => true,
							'banners'           => true,
						),
					)
				);

				if ( ! is_wp_error( $api ) ) { // confirm error free.

					$main_plugin_file = self::get_plugin_file( $plugin['slug'] ); // Get main plugin file.
					if ( self::check_file_extension( $main_plugin_file ) ) {
						if ( is_plugin_active( $main_plugin_file ) ) {
							// Plugin activation confirmed.
							$button_classes = 'button disabled';
							$button_text    = __( 'Activated', 'eig_extension' );
						} else {
							// It's installed, let's activate it.
							$button_classes = 'activate button button-primary';
							$button_text    = __( 'Activate', 'eig_extension' );
						}
					}

					// Send plugin data to template.
					self::render_template( $plugin, $api, $button_text, $button_classes );

				}

			endforeach;
			?>
		</div>
			<?php
		}
		/**
		 * Render_template
		 * Render display template for each plugin.
		 *
		 * @param array  $plugin Array - Original data passed to init().
		 * @param object $api Array - Results from plugins_api.
		 * @param string $button_text String - text for the button.
		 * @param string $button_classes String - classnames for the button.
		 *
		 * @since 1.0
		 */
		public static function render_template( $plugin, $api, $button_text, $button_classes ) {
			?>
			<div class="plugin">
				<div class="plugin-wrap">
					<img src="<?php echo $api->icons['1x']; ?>" alt="">
					<h2><?php echo $api->name; ?></h2>
					<p><?php echo $api->short_description; ?></p>
					<p class="plugin-author"><?php _e( 'By', 'ajax-load-more' ); ?> <?php echo $api->author; ?></p>
				</div>
				<ul class="activation-row">
					<li>
						<a class="<?php echo $button_classes; ?>" data-slug="<?php echo $api->slug; ?>" data-name="<?php echo $api->name; ?>" href="<?php echo get_admin_url(); ?>/update.php?action=install-plugin&amp;plugin=<?php echo $api->slug; ?>&amp;_wpnonce=<?php echo wp_create_nonce( 'install-plugin_' . $api->slug ); ?>">
							<?php echo $button_text; ?>
						</a>
					</li>
					<li>
						<a href="https://wordpress.org/plugins/<?php echo $api->slug; ?>/" target="_blank">
							<?php _e( 'More Details', 'ajax-load-more' ); ?>
						</a>
					</li>
				</ul>
			</div>
			<?php
		}

		/**
		 * Eig_ext_install
		 * An Ajax method for installing plugin.
		 *
		 * @return mixed
		 *
		 * @since 1.0
		 */
		public function eig_ext_install() {

			if ( ! current_user_can( 'install_plugins' ) ) {
				wp_die( __( 'Sorry, you are not allowed to install plugins on this site.', 'eig_extension' ) );
			}

			$nonce  = $_POST['nonce'];
			$plugin = $_POST['plugin'];

			// Check our nonce, if they don't match then bounce!
			if ( ! wp_verify_nonce( $nonce, 'eig_install_nonce' ) ) {
				wp_die( __( 'Error - unable to verify nonce, please try again.', 'eig_extension' ) );
			}

			// Include required libs for installation.
			require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
			require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
			require_once ABSPATH . 'wp-admin/includes/class-wp-ajax-upgrader-skin.php';
			require_once ABSPATH . 'wp-admin/includes/class-plugin-upgrader.php';

			// Get Plugin Info.
			$api = plugins_api(
				'plugin_information',
				array(
					'slug'   => $plugin,
					'fields' => array(
						'short_description' => false,
						'sections'          => false,
						'requires'          => false,
						'rating'            => false,
						'ratings'           => false,
						'downloaded'        => false,
						'last_updated'      => false,
						'added'             => false,
						'tags'              => false,
						'compatibility'     => false,
						'homepage'          => false,
						'donate_link'       => false,
					),
				)
			);

			$skin     = new WP_Ajax_Upgrader_Skin();
			$upgrader = new Plugin_Upgrader( $skin );
			$upgrader->install( $api->download_link );

			if ( $api->name ) {
				$status = 'success';
				$msg    = $api->name . ' successfully installed.';
			} else {
				$status = 'failed';
				$msg    = 'There was an error installing ' . $api->name . '.';
			}

			$json = array(
				'status' => $status,
				'msg'    => $msg,
			);

			wp_send_json( $json );

		}

		/**
		 * Cnkt_plugin_activation
		 * Activate plugin via Ajax.
		 *
		 * @return mixed
		 *
		 * @since 1.0
		 */
		public function eig_ext_activation() {
			if ( ! current_user_can( 'install_plugins' ) ) {
				wp_die( __( 'Sorry, you are not allowed to activate plugins on this site.', 'eig_extension' ) );
			}

			$nonce  = $_POST['nonce'];
			$plugin = $_POST['plugin'];

			// Check our nonce, if they don't match then bounce!
			if ( ! wp_verify_nonce( $nonce, 'eig_install_nonce' ) ) {
				die( __( 'Error - unable to verify nonce, please try again.', 'eig_extension' ) );
			}

			// Include required libs for activation.
			require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
			require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
			require_once ABSPATH . 'wp-admin/includes/class-plugin-upgrader.php';

			// Get Plugin Info.
			$api = plugins_api(
				'plugin_information',
				array(
					'slug'   => $plugin,
					'fields' => array(
						'short_description' => false,
						'sections'          => false,
						'requires'          => false,
						'rating'            => false,
						'ratings'           => false,
						'downloaded'        => false,
						'last_updated'      => false,
						'added'             => false,
						'tags'              => false,
						'compatibility'     => false,
						'homepage'          => false,
						'donate_link'       => false,
					),
				)
			);

			if ( $api->name ) {
				$main_plugin_file = self::get_plugin_file( $plugin );
				$status           = 'success';
				if ( $main_plugin_file ) {
					activate_plugin( $main_plugin_file );
					$msg = $api->name . ' successfully activated.';
				}
			} else {
				$status = 'failed';
				$msg    = 'There was an error activating ' . $api->name . '.';
			}

			$json = array(
				'status' => $status,
				'msg'    => $msg,
			);

			wp_send_json( $json );

		}







		/**
		 * Initialize the display of the plugins.
		 *
		 * @param array $plugins Array - plugin data.
		 *
		 * @since 1.0
		 */
		public static function init_local( $plugins ) {
			?>
			<div class="eig-addons-extensions">
				<?php
				require_once ABSPATH . 'wp-admin/includes/plugin-install.php';

				foreach ( $plugins as $plugin ) :

					$button_classes = 'install button';
					$button_text    = __( 'Install Now', 'eig_extension' );

					/*$api = plugins_api(
						'plugin_information',
						array(
							'slug'   => sanitize_file_name( $plugin['slug'] ),
							'fields' => array(
								'short_description' => true,
								'sections'          => false,
								'requires'          => false,
								'downloaded'        => true,
								'last_updated'      => false,
								'added'             => false,
								'tags'              => false,
								'compatibility'     => false,
								'homepage'          => false,
								'donate_link'       => false,
								'icons'             => true,
								'banners'           => true,
							),
						)
					);*/
					$api = (object) $plugin['args'];

					if ( ! is_wp_error( $api ) ) {

						$main_plugin_file = self::get_plugin_file( $plugin['slug'] ); // Get main plugin file.
						// echo $main_plugin_file;.
						if ( self::check_file_extension( $main_plugin_file ) ) {
							if ( is_plugin_active( $main_plugin_file ) ) {
								// Plugin activation confirmed.
								$button_classes = 'button disabled';
								$button_text    = __( 'Activated', 'eig_extension' );
							} else {
								// It's installed, let's activate it.
								$button_classes = 'activate button button-primary';
								$button_text    = __( 'Activate', 'eig_extension' );
							}
						}

						// Send plugin data to template.
						self::extension_template_local( $plugin, $api, $button_text, $button_classes );
					}

					endforeach;
				?>
			</div>
			<?php
		}

		/**
		 * Render display template for each plugin.
		 *
		 * @param array  $plugin Array - Original data passed to init().
		 * @param object $api Array - Results from plugins_api.
		 * @param string $button_text String - text for the button.
		 * @param string $button_classes String - classnames for the button.
		 * @since 1.0
		 */
		public static function extension_template_local( $plugin, $api, $button_text, $button_classes ) {
			?>
			<div class="plugin">
				<div class="plugin-wrap">
					<img src="<?php echo $api->icons['1x']; ?>" alt="">
					<h2><?php echo $api->name; ?></h2>
					<p><?php echo $api->short_description; ?></p>

					<p class="plugin-author"><?php _e( 'By', 'ajax-load-more' ); ?> <?php echo $api->author; ?></p>
				</div>
				<ul class="activation-row">
					<li>
						<a class="<?php echo $button_classes; ?>" data-slug="<?php echo $api->slug; ?>" data-name="<?php echo $api->name; ?>" href="<?php echo get_admin_url(); ?>update.php?action=install-plugin&amp;plugin=<?php echo $api->slug; ?>&amp;_wpnonce=<?php echo wp_create_nonce( 'install-plugin_' . $api->slug ); ?>">
							<?php echo $button_text; ?>
						</a>
					</li>
					<li>
						<a href="https://wordpress.org/plugins/<?php echo $api->slug; ?>/" target="_blank">
							<?php _e( 'More Details', 'ajax-load-more' ); ?>
						</a>
					</li>
				</ul>
			</div>
			<?php
		}


		/**
		 * An Ajax method for installing plugin.
		 *
		 * @return mixed
		 *
		 * @since 1.0
		 */
		public function eig_ext_install_local() {

			if ( ! current_user_can( 'install_plugins' ) ) {
				wp_die( __( 'Sorry, you are not allowed to install plugins on this site.', 'eig_extension' ) );
			}

			// Check our nonce, if they don't match then bounce!
			if ( ! wp_verify_nonce( sanitize_text_field( $_POST['nonce'] ), 'eig_install_nonce' ) ) {
				wp_die( __( 'Error - unable to verify nonce, please try again.', 'eig_extension' ) );
			}

			$plugin = sanitize_text_field( $_POST['plugin'] );

			// Include required libs for installation.
			require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
			require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
			require_once ABSPATH . 'wp-admin/includes/class-wp-ajax-upgrader-skin.php';
			require_once ABSPATH . 'wp-admin/includes/class-plugin-upgrader.php';

			// Get Plugin Info
			/*$api = plugins_api(
				'plugin_information',
				array(
					'slug'   => $plugin,
					'fields' => array(
						'short_description' => false,
						'sections'          => false,
						'requires'          => false,
						'rating'            => false,
						'ratings'           => false,
						'downloaded'        => false,
						'last_updated'      => false,
						'added'             => false,
						'tags'              => false,
						'compatibility'     => false,
						'homepage'          => false,
						'donate_link'       => false,
					),
				)
			);*/
			$admin_class = new Admin_Menu();
			$api = (object) $admin_class->plugin_ext[ $plugin ]['args'];

			$skin     = new WP_Ajax_Upgrader_Skin();
			$upgrader = new Plugin_Upgrader( $skin );
			$upgrader->install( $api->download_link );

			if ( $api->name ) {
				$status = 'success';
				$msg    = $api->name . ' successfully installed.';
			} else {
				$status = 'failed';
				$msg    = 'There was an error installing ' . $api->name . '.';
			}

			$json = array(
				'status' => $status,
				'msg'    => $msg,
			);

			wp_send_json( $json );

		}

		/**
		 * Cnkt_plugin_activation
		 * Activate plugin via Ajax.
		 *
		 * @return mixed
		 *
		 * @since 1.0
		 */
		public function eig_ext_activation_local() {
			if ( ! current_user_can( 'install_plugins' ) ) {
				wp_die( __( 'Sorry, you are not allowed to activate plugins on this site.', 'eig_extension' ) );
			}

			// Check our nonce, if they don't match then bounce!
			if ( ! wp_verify_nonce( sanitize_text_field( $_POST['nonce'] ), 'eig_install_nonce' ) ) {
				die( __( 'Error - unable to verify nonce, please try again.', 'eig_extension' ) );
			}

			$plugin = sanitize_text_field( $_POST['plugin'] );

			// Include required libs for activation.
			require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
			require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
			require_once ABSPATH . 'wp-admin/includes/class-plugin-upgrader.php';

			// Get Plugin Info
			/*$api = plugins_api(
				'plugin_information',
				array(
					'slug'   => $plugin,
					'fields' => array(
						'short_description' => false,
						'sections'          => false,
						'requires'          => false,
						'rating'            => false,
						'ratings'           => false,
						'downloaded'        => false,
						'last_updated'      => false,
						'added'             => false,
						'tags'              => false,
						'compatibility'     => false,
						'homepage'          => false,
						'donate_link'       => false,
					),
				)
			);*/
			$admin_class = new Admin_Menu();
			$api = (object) $admin_class->plugin_ext[ $plugin ]['args'];

			if ( ! is_wp_error( $api ) ) {
				$main_plugin_file = self::get_plugin_file( $plugin );
				$status           = 'success';

				if ( $main_plugin_file ) {
					activate_plugin( $main_plugin_file );
					$msg = $api->name . ' successfully activated.';
				}
			} else {
				$status = 'failed';
				$msg    = 'There was an error activating ' . $api->name . '.';
			}

			$json = array(
				'status' => $status,
				'msg'    => $msg,
			);

			wp_send_json( $json );

		}

		/**
		 * A method to get the main plugin file.
		 *
		 * @param string $plugin_slug String - The slug of the plugin.
		 * @return $plugin_file
		 *
		 * @since 1.0
		 */
		public static function get_plugin_file( $plugin_slug ) {
			require_once ABSPATH . '/wp-admin/includes/plugin.php';
			$plugins = get_plugins();

			foreach ( $plugins as $plugin_file => $plugin_info ) {

				// Get the basename of the plugin e.g. [eig-extension]/eig-extension.php
				$slug = dirname( plugin_basename( $plugin_file ) );

				if ( $slug ) {
					if ( $slug == $plugin_slug ) {
						return $plugin_file; // If $slug = $plugin_name
					}
				}
			}
			return null;
		}

		/**
		 * A helper method to check file extension.
		 *
		 * @param string $filename String - The filename of the plugin.
		 * @return boolean
		 * @since 1.0
		 */
		public static function check_file_extension( $filename ) {
			if ( ! empty( $filename ) && 'php' === pathinfo( $filename )['extension'] ) {
				// has .php exension.
				return true;
			} else {
				// ./wp-content/plugins.
				return false;
			}
		}

		/**
		 * Enqueue admin scripts
		 *
		 * @since 1.0
		 */
		public function eig_enqueue_scripts() {
			wp_register_script( 'eig-plugin-install-js', EASY_IMAGE_GALLERY_URL . 'includes/js/installer.js', array( 'jquery' ), '', true );
			wp_localize_script(
				'eig-plugin-install-js',
				'eig_plugin_install_params',
				array(
					'ajax_url'         => admin_url( 'admin-ajax.php' ),
					'admin_nonce'      => wp_create_nonce( 'eig_install_nonce' ),
					'install_confirm'  => __( 'Are you sure you want to install this plugin?', 'eig_extension' ),
					'install_button'   => __( 'Install Now', 'eig_extension' ),
					'activate_button'  => __( 'Activate', 'eig_extension' ),
					'installed_button' => __( 'Activated', 'eig_extension' ),
				)
			);
			wp_enqueue_script( 'eig-plugin-install-js' );

			wp_enqueue_style( 'plugin-installer', EASY_IMAGE_GALLERY_URL . 'includes/css/installer.css' );
		}
	}

	// initialize.
	$connekt_plugin_installer = new EIG_Extensions_Installer();
	$connekt_plugin_installer->start();
}
