<?php
/**
 * Template functions
 *
 * @since 1.0
 * @package DX\EIG
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Checking db version
 *
 * @return mixed
 */
function eig_db_version() {
	$old_meta_structure = get_post_meta( get_the_ID(), '_easy_image_gallery', true );
	$new_meta_structure = get_post_meta( get_the_ID(), '_easy_image_gallery_v2', true );

	if ( isset( $new_meta_structure ) && null !== $new_meta_structure ) {
		return 'new';
	} elseif ( isset( $old_meta_structure ) && null !== $old_meta_structure ) {
		return 'old';
	}

	return;
}

/**
 * Check the POST META
 */
function eig_get_post_meta() {
	$db_version = eig_db_version();
	if ( 'new' === $db_version ) {
		$gallery_ids = get_post_meta( get_the_ID(), '_easy_image_gallery_v2', true );
		return $gallery_ids;
	} elseif ( 'old' === $db_version ) {
		$get_gallery_attachments = get_post_meta( get_the_ID(), '_easy_image_gallery', true );
		$get_gallery_old_data    = explode( ',', $get_gallery_attachments );

		$get_open_images = get_post_meta( get_the_ID(), '_easy_image_gallery_link_images' );
		if ( isset( $get_open_images ) && ! empty( $get_open_images ) ) {
			$get_open_images = $get_open_images;
		} else {
			$get_open_images = null;
		}

		$gallery_ids = array(
			array(
				'SHORTCODE'   => wp_rand( 100, 999 ),
				'DATA'        => $get_gallery_old_data,
				'OPEN_IMAGES' => $get_open_images[0],
			),
		);

		return $gallery_ids;
	}

	return;
}
/**
 * Is gallery
 *
 * @since 1.0
 * @return boolean
 */
function eig_is_gallery() {
	$gallery_ids = eig_get_post_meta();
	// Checking if we have EIG (Easy Image Gallery) Gutenberg Blocks in the post content.
	$gutenberg_galleries = eig_if_gutenberg_block();

	if ( ! empty( $gallery_ids ) || ! empty( $gutenberg_galleries ) ) {
		return true;
	}

	return false;
}

/**
 * Get page images ids
 *
 * @since 1.3
 * @return array|void
 */
function eig_get_image_ids( $post_id = null, $all_galleries_images = true, $gallery_id = null ) {
	global $post;

	if ( null === $post_id ) {
		$post_id = $post->ID;
	}

	if ( ! isset( $post_id ) || null === $post_id ) {
		return;
	}

	$db_version = eig_db_version();
	if ( 'new' === $db_version ) {

		$new_db_structure = get_post_meta( get_the_ID(), '_easy_image_gallery_v2', true );
		if ( true === $all_galleries_images ) {

			$images_ids = array();
			if ( isset( $new_db_structure ) && ! empty( $new_db_structure ) ) {
				foreach ( $new_db_structure as $gallery ) {
					foreach ( $gallery['DATA'] as $image ) {
						$images_ids[] = $image;
					}
				}
			}

			return $images_ids;

		} elseif ( false === $all_galleries_images ) {

			if ( isset( $gallery_id ) && ! empty( $gallery_id ) ) {

				if ( isset( $new_db_structure ) && ! empty( $new_db_structure ) ) {
					foreach ( $new_db_structure as $gallery ) {
						if ( $gallery['SHORTCODE'] == $gallery_id ) {
							return $gallery['DATA'];
						}
					}
				}
			}
		}
	} elseif ( 'old' === $db_version ) {
		$old_db_structure = get_post_meta( get_the_ID(), '_easy_image_gallery', true );
		$attachment_ids   = explode( ',', $old_db_structure );

		return array_filter( $attachment_ids );
	}

	return;
}

/**
 * Check the current post for the existence of a short code
 *
 * @since 1.0
 * @return boolean
 */
function eig_has_shortcode( $shortcode = '' ) {
	global $post;

	// False because we have to search through the post content first.
	$found = false;

	// If no short code was provided, return false.
	if ( ! $shortcode ) {
		return $found;
	}

	if ( is_object( $post ) && stripos( $post->post_content, '[' . $shortcode ) !== false ) {
		// We have found the short code.
		$found = true;
	}

	// Return our final results.
	return $found;
}
/**
 * Check the current post for the existence of a gutenberg block.
 *
 * @since 1.0
 * @return boolean
 * @param string $block Gutenberg block.
 */
function eig_has_block( $block = '' ) {
	global $post;

	// False because we have to search through the post content first.
	$found = false;

	// If no short code was provided, return false.
	if ( ! $block ) {
		return $found;
	}
	if ( is_object( $post ) && stripos( $post->post_content, '<ul class="' . $block ) !== false ) {
		// We have found the short code.
		$found = true;
	}

	// Return our final results.
	return $found;
}


/**
 * Setup Lightbox array
 *
 * @since 1.0
 * @return array
 */
function eig_lightbox() {

	$lightboxes = array(
		'fancybox'     => __( 'fancyBox', 'easy-image-gallery' ),
		'prettyphoto'  => __( 'prettyPhoto', 'easy-image-gallery' ),
		'luminous'     => __( 'Luminous', 'easy-image-gallery' ),
		'lightgallery' => __( 'lightGallery', 'easy-image-gallery' ),
	);

	return apply_filters( 'eig_lightbox', $lightboxes );

}

/**
 * Get lightbox from settings
 *
 * @since 1.0
 * @return string
 */

if ( ! function_exists( 'eig_get_lightbox' ) ) :
	/**
	 * Getting the settings for lightbox
	 *
	 * @return void
	 */
	function eig_get_lightbox() {

		$settings = (array) get_option( 'easy-image-gallery' );

		// Set fancybox as default for when the settings page hasn't been saved.
		$lightbox = isset( $settings['lightbox'] ) ? esc_attr( $settings['lightbox'] ) : 'prettyphoto';

		return $lightbox;

	}
endif;


/**
 * Returns the correct rel attribute for the anchor links
 *
 * @param null $gallery_id Id of the created gallery.
 * @return void
 */
function eig_lightbox_rel( $gallery_id = null ) {

	$lightbox = eig_get_lightbox();

	switch ( $lightbox ) {

		case 'prettyphoto':
			$rel = 'rel="prettyPhoto' . '[group-' . $gallery_id . ']"';

			break;

		case 'fancybox':
			$rel = 'data-fancybox="gallery' . $gallery_id . '"';

			break;

		case 'luminous':
			$rel = 'rel="luminous' . '[group-' . $gallery_id . ']"';

			break;

		default:
			$rel = 'rel="prettyPhoto' . '[group-' . $gallery_id . ']"';
	}

	return $rel;
}

/**
 * Get list of post types for populating the checkboxes on the admin page
 *
 * @since 1.0
 * @return array
 */
function eig_get_post_types() {

	$args = array(
		'public' => true,
	);

	$post_types = array_map( 'ucfirst', get_post_types( $args ) );

	// Remove attachment.
	unset( $post_types['attachment'] );

	return apply_filters( 'eig_get_post_types', $post_types );

}

/**
 * Retrieve the allowed post types from the option row
 * Defaults to post and page when the settings have not been saved
 *
 * @return array
 * @since 1.0
 */
function eig_allowed_post_types() {

	$defaults['post_types']['post'] = 'on';
	$defaults['post_types']['page'] = 'on';

	// Get the allowed post type from the DB.
	$settings   = (array) get_option( 'easy-image-gallery', $defaults );
	$post_types = isset( $settings['post_types'] ) ? $settings['post_types'] : '';

	// Post types don't exist, bail.
	if ( ! $post_types ) {
		return;
	}

	return $post_types;

}


/**
 * Is the currently viewed post type allowed?
 * For use on the front-end when loading scripts etc
 *
 * @since 1.0
 * @return boolean|void
 */
function eig_allowed_post_type() {

	// Post and page defaults.
	$defaults['post_types']['post'] = 'on';
	$defaults['post_types']['page'] = 'on';

	// Get currently viewed post type.
	$post_type = (string) get_post_type();

	// Echo $post_type; exit; // download.

	// Get the allowed post type from the DB.
	$settings   = (array) get_option( 'easy-image-gallery', $defaults );
	$post_types = isset( $settings['post_types'] ) ? $settings['post_types'] : '';

	// Post types don't exist, bail.
	if ( ! $post_types ) {
		return;
	}

	// Check the two against each other.
	if ( array_key_exists( $post_type, $post_types ) ) {
		return true;
	}
}

/**
 * Is the currently viewed post type allowed?
 * For use on the front-end when loading scripts etc
 *
 * @since 1.0
 * @return boolean|void
 */
function eig_grid_view() {

	// Get the allowed post type from the DB.
	$settings  = (array) get_option( 'easy-image-gallery' );
	$grid_view = isset( $settings['grid_view'] ) ? $settings['grid_view'] : '';

	if ( ! $grid_view ) {
		return;
	}

	// if ( array_key_exists( $post_type, $post_types ) ).
	return $grid_view;
}

/**
 * Retrieve attachment IDs
 *
 * @since 1.0
 * @return string|void
 */
function eig_get_galleries() {
	global $post;

	if ( ! isset( $post->ID ) ) {
		return;
	}

	$gallery_ids = eig_get_post_meta();

	return $gallery_ids;
}


/**
 * Shortocde
 *
 * @param array $atts Shortode attributes.
 * @return void
 * @since 1.0
 */
function eig_shortcode( $atts ) {

	// Return early if the post type is not allowed to have a gallery.
	if ( ! eig_allowed_post_type() ) {
		return;
	} else {
		if ( isset( $atts['gallery'] ) && ! empty( $atts['gallery'] ) ) {
			return easy_image_gallery( $atts['gallery'] );
		} else {
			return easy_image_gallery( 'old_db' );
		}
	}
}
add_shortcode( 'easy_image_gallery', 'eig_shortcode' );


/**
 * Count number of images in array
 *
 * @since 1.0
 * @param array $gallery_shortcode Array containting all images.
 * @return void|integer
 */
function eig_count_images( $gallery_shortcode ) {

	$galleries = eig_get_post_meta();

	if ( isset( $galleries ) && ! empty( $galleries ) ) {
		foreach ( $galleries as $gallery ) {
			if ( $gallery['SHORTCODE'] === $gallery_shortcode ) {
				$number = count( $gallery['DATA'] );
				return $number;
			}
		}
	}

	return;
}


/**
 * Output gallery
 *
 * @since 1.0
 * @param string $gallery_id Id of current gallery.
 * @return void
 */
function easy_image_gallery( $gallery_id = 'old_db' ) {

	$galleries = eig_get_galleries();
	global $post;

	if ( isset( $galleries ) && ! empty( $galleries ) ) {
		ob_start();
		foreach ( $galleries as $gallery ) {

			if ( 'old_db' === $gallery_id ) {
				$gallery_id = $gallery['SHORTCODE'];
			}

			if ( $gallery_id === $gallery['SHORTCODE'] ) {
				$gallery_exist = true;

				$has_gallery_images = $gallery['DATA'];

				if ( ! $has_gallery_images ) {
					return;
				}

				// Clean the array (remove empty values).
				$has_gallery_images = array_filter( $has_gallery_images );

				// Css classes array.
				$classes = array();

				// Thumbnail count.
				$classes[] = $has_gallery_images ? 'thumbnails-' . eig_count_images( $gallery['SHORTCODE'], $gallery ) : '';

				// Linked images.
				if ( isset( $gallery['OPEN_IMAGES'] ) && $gallery['OPEN_IMAGES'] == 'on' ) {
					$classes[] = 'linked';
				}
				$classes = implode( ' ', $classes );

				if ( isset( $has_gallery_images ) && ! empty( $has_gallery_images ) ) {
					$lightbox  = eig_get_lightbox();
					$rel       = eig_lightbox_rel( $gallery_id );
					$grid_view = eig_grid_view();

					?>
					<div class="<?php echo $classes; ?> <?php echo $lightbox; ?> <?php echo $grid_view; ?>">
					<?php

					if ( 'easy-image-gallery-masonry-master' === $grid_view ) {
						$counter = 1;
					}

					foreach ( $has_gallery_images as $attachment_id ) {

						$classes = array( 'eig-popup', 'col-xs-6 col-sm-4 col-md-3' );

						// Get original image.
						$image_link = wp_get_attachment_image_src( $attachment_id, apply_filters( 'easy_image_gallery_linked_image_size', 'large' ) );
						$image_link = $image_link[0];

						if( ! empty( $counter ) ) {

							if ( $counter % 3  == 0 ) {
								$image = wp_get_attachment_image( $attachment_id, apply_filters( 'easy_image_gallery_thumbnail_image_size', 'thumbnail' ), '', array( 'alt' => trim( strip_tags( get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) ) ), 'class' => 'column-medium') );
							} elseif ( $counter % 4 == 0 ) {
								$image = wp_get_attachment_image( $attachment_id, apply_filters( 'easy_image_gallery_thumbnail_image_size', 'thumbnail' ), '', array( 'alt' => trim( strip_tags( get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) ) ), 'class' => 'column-large') );
							} else {
								$image = wp_get_attachment_image( $attachment_id, apply_filters( 'easy_image_gallery_thumbnail_image_size', 'thumbnail' ), '', array( 'alt' => trim( strip_tags( get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) ) ), 'class' => 'column-normal') );
							}

							$counter++;
						} else {
							$image = wp_get_attachment_image( $attachment_id, apply_filters( 'easy_image_gallery_thumbnail_image_size', 'thumbnail' ), '', array( 'alt' => trim( strip_tags( get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) ) ) ) );
						}

						$image_caption = get_post( $attachment_id )->post_excerpt ? esc_attr( get_post( $attachment_id )->post_excerpt ) : '';

						$image_class = esc_attr( implode( ' ', $classes ) );

						if ( isset( $gallery['OPEN_IMAGES'] ) && $gallery['OPEN_IMAGES'] == 'on' ) {
							$html = sprintf( '<a %s href="%s" class="%s" title="%s" data-caption="%s" target="_blank"><i class="icon-view"></i><span class="overlay"></span>%s</a>', $rel, $image_link, $image_class, $image_caption, $image_caption, $image );
						} else {
							$html = sprintf( '%s', $image );
						}

						echo apply_filters( 'easy_image_gallery_html', $html, $rel, $image_link, $image_class, $image_caption, $image, $attachment_id, $post->ID );
					}
					echo '</div>';

					echo '<script>jQuery(".easy-image-gallery-mosaic-master").Mosaic({maxRowHeight: 320});</script>';

					if ( 'luminous' === eig_get_lightbox() ) {
						echo '<script>new LuminousGallery(document.querySelectorAll("a[rel=\'luminous[group-' . $gallery_id . ']\']"));</script>';
					}
				}
			}
		}

		$eig_gallery = ob_get_clean();
		return apply_filters( 'easy_image_gallery', $eig_gallery );
	}
}

/**
 * Append gallery images to page automatically
 *
 * @param object $content Page content to append gallery to.
 * @since 1.0
 */
function eig_append_to_content( $content ) {
	// if it is single page and supported post_type and page not have shortcode.
	if ( is_singular() && is_main_query() && eig_allowed_post_type() && ! eig_has_shortcode( 'easy_image_gallery' ) && ! eig_has_block( 'wp-block-devrix-easy-image-gallery-block' ) ) {
		$new_content = easy_image_gallery( 'old_db' );
		$content    .= $new_content;
	}

	return $content;
}
add_filter( 'the_content', 'eig_append_to_content' );

/**
 * Remove the_content filter if shortcode is detected on page
 *
 * @since 1.0
 */
function eig_template_redirect() {
	if ( eig_has_shortcode( 'easy_image_gallery' ) || eig_has_block( 'wp-block-devrix-easy-image-gallery-block' ) ) {
		remove_filter( 'the_content', 'eig_append_to_content' );
	}
}
add_action( 'template_redirect', 'eig_template_redirect' );
