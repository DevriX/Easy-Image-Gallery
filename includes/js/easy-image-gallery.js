jQuery(function() {
    var site_title = (script_vars.site_title);
    jQuery('.attachment-thumbnail').watermark({
        text: site_title,
        textWidth: 100,
        gravity: 'se',
        opacity: 0.4,
        margin: 12
    });
});