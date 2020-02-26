<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$settings = (array) get_option( 'easy-image-gallery' );
?>
<div class="wrap">
<?php
	if ( class_exists( 'EIG_Extensions_Installer' ) ) {
		EIG_Extensions_Installer::init_local( $this->plugin_ext );
	}
	?>
</div>

