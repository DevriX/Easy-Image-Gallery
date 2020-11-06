jQuery(function() {
    var site_title = (script_vars.site_title);
    jQuery('.attachment-thumbnail').watermark({
        text: site_title,
        textWidth: 125,
        gravity: 'se',
        opacity: 0.7,
        margin: 12,
        textSize: 16,
    });

    jQuery( ".eig-popup" ).click(function() {
        jQuery('.lum-img, .fancybox-image, #fullResImage').watermark({
            text: site_title,
            textWidth: 100,
            gravity: 'se',
            opacity: 0.7,
            margin: 20,
            textSize: 16,
        });
    });
});