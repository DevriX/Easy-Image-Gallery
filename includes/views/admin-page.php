<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! current_user_can( 'manage_options' ) ) {
	wp_die( 'Unauthorized user' );
}

if ( ! empty( $_POST ) && check_admin_referer( 'eig_admin_page_save', 'eig_admin_page' ) ) {
	$_POST = filter_input_array( INPUT_POST, FILTER_SANITIZE_STRING );
	update_option( 'easy-image-gallery', $_POST['easy-image-gallery'] );
}

$arr_grid_views = array(
	'easy-image-gallery' => 'Default',
);

// Default option when settings have not been saved.
$defaults['lightbox'] = 'prettyphoto';
// Post and page defaults.
$defaults['post_types']['post'] = 'on';
$defaults['post_types']['page'] = 'on';

$defaults['grid_view'] = 'easy-image-gallery';

$settings = (array) get_option( 'easy-image-gallery', $defaults );
$lightbox = esc_attr( $settings['lightbox'] );
?>
<div class="wrap">
	<form action='' method='post'>
		<h1><?php echo __( 'Easy Image Gallery Settings', 'easy-image-gallery' ); ?></h1>
		<table class="form-table" role="presentation">
			<tbody>
				<tr>
					<th scope="row"><?php echo __( 'Lightbox', 'easy-image-gallery' ); ?></th>
					<td>
						<select name="easy-image-gallery[lightbox]">
							<?php foreach ( easy_image_gallery_lightbox() as $key => $label ) : ?>
								<option value="<?php echo $key; ?>" <?php selected( $lightbox, $key ); ?>><?php echo $label; ?></option>
							<?php endforeach; ?>
						</select>
					</td>
				</tr>
				<tr>
					<th scope="row"><?php echo __( 'Post Types', 'easy-image-gallery' ); ?></th>
					<td>
						<?php
						foreach ( easy_image_gallery_get_post_types() as $key => $label ) :

								$post_types = isset( $settings['post_types'][ $key ] ) ? esc_attr( $settings['post_types'][ $key ] ) : '';
							?>
							<p>
								<input type="checkbox" id="<?php echo $key; ?>" name="easy-image-gallery[post_types][<?php echo $key; ?>]" <?php checked( $post_types, 'on' ); ?>/><label for="<?php echo $key; ?>"> <?php echo $label; ?></label>
							</p>
						<?php endforeach; ?>
					</td>
				</tr>
			</tbody>
		</table>
		<?php
		$arr_grids_filter = apply_filters( 'add_more_grids_support', $arr_grid_views );
		?>
		<h2><?php echo __( 'Easy Image Gallery Grid Views', 'easy-image-gallery' ); ?></h2>
		<table class="form-table" role="presentation">
			<tbody>
				<tr>
					<th scope="row"><?php echo __( 'Grid View', 'easy-image-gallery' ); ?></th>
					<td>
						<select name="easy-image-gallery[grid_view]">
							<?php foreach ( $arr_grids_filter as $key => $label ) : ?>
								<option value="<?php echo $key; ?>" <?php selected( $settings['grid_view'], $key ); ?>><?php echo $label; ?></option>
							<?php endforeach; ?>
						</select>
					</td>
				</tr>
			</tbody>
		</table>
		<?php wp_nonce_field( 'eig_admin_page_save', 'eig_admin_page' ); ?>
		<?php submit_button(); ?>
	</form>
</div>
