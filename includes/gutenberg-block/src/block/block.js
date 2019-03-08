/**
 * BLOCK: easy-image-gallery-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { MediaUpload } = wp.editor; //Import MediaUpload from wp.editor
const { Button } = wp.components; //Import Button from wp.components
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
var ID = function () {
	// Math.random should be unique because of its seeding algorithm.
	// Convert it to base 36 (numbers + letters), and grab the first 9 characters
	// after the decimal.
	return '_' + Math.random().toString(36).substr(2, 9);
};
registerBlockType( 'devrix/easy-image-gallery-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Easy Image Gallery', // Block title.
	icon: 'format-gallery', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'easy-image-gallery-block' ),
		__( 'Easy Image Gallery' ),
	],
	attributes: { //Attributes
        images : { //Images array
            type: 'array',
		},
		id : {
			type: 'string',
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit({ attributes, className, setAttributes }) {

        //Destructuring the images array attribute
        const {images = []} = attributes;


        // This removes an image from the gallery
        const removeImage = (removeImage) => {
			//filter the images
			const newImages = images.filter( (image) => {
				//If the current image is equal to removeImage the image will be returnd
				if(image.id != removeImage.id) {
					return image;
				}
			});

			//Saves the new state
			setAttributes({
				images:newImages,
			})
        }


        //Displays the images
        const displayImages = (images) => {
            return (
                //Loops throug the images
                images.map( (image) => {
                    return (
                    <div className="gallery-item-container">
                            <img className='gallery-item' src={image.url} key={ images.id } />
                            <div className='remove-item' onClick={() => removeImage(image)}><span class="dashicons dashicons-trash"></span></div>
                            <div className='caption-text'>{image.caption[0]}</div>
                    </div>
                    )
                })

            )
		}
		console.log();
		if( attributes['id'] != undefined ) {
			var _id = attributes['id'];
		} else {
			var _id = ID();
		}
		setAttributes({id : _id,})

        //JSX to return
        return (
            <div>
                <ul className="image-gallery thumbnails-4 linked" data-total-slides={images.length}>{ displayImages(images) }</ul>
                <br/>
                <MediaUpload
                        onSelect={(media) => {setAttributes({images: [...images, ...media]});}}
                        type="image"
                        multiple={true}
                        value={images}
                        render={({open}) => (
                            <Button className="select-images-button is-button is-default is-large" onClick={open}>
                                Add images
                            </Button>
                        )}
                    />
            </div>

        );
    },

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save({attributes}) {
		//Destructuring the images array attribute
		const { images } = attributes;
		var rel = "prettyphoto[" + attributes['id'] + "]"
		// Displays the images
		const displayImages = (images) => {

			return (

				images.map( (image,index) => {
					return (
							<li>
								<a href={image.url} rel={rel} >
									<img
										className='gallery-item'
										key={images.id}
										src={image.url}
										data-slide-no={index}
										data-caption={image.caption[0]}
										alt={image.alt}
									/>
								</a>
							</li>
					)
				})
			)
		}
		//JSX to return
		return (
			<ul className="image-gallery-block thumbnails-4 linked" data-total-slides={images.length}>{ displayImages(images) }</ul>
		);
	},
} );
