var eig_ext_install = eig_ext_install || {};

jQuery(document).ready(function($) {
	
	"use strict"; 	
	
	var is_loading = false;
	
	/*
	*  Install the plugin
	*
	*  @param el       object Button element
	*  @param plugin   string Plugin slug
	*  @since 1.0
	*/
	eig_ext_install.install_plugin = function(el, plugin){
	
		// Confirm activation
		var r = confirm( eig_plugin_install_params.install_confirm );
			
		if (r) {
		 
			is_loading = true;
			el.addClass('installing');
			 
			$.ajax({
				type: 'POST',
				url: eig_plugin_install_params.ajax_url,
				data: {
					action: 'eig_ext_install',
					plugin: plugin,
					nonce: eig_plugin_install_params.admin_nonce,
					dataType: 'json'
				},
				success: function(data) { console.log(data);
					if(data){
						if(data.status === 'success'){
							el.attr('class', 'activate button button-primary');
							el.html(eig_plugin_install_params.activate_button);
						} else {
							el.removeClass('installing');
						}
					} else {
							el.removeClass('installing');
					}
					is_loading = false;
				},
				error: function(xhr, status, error) {
					console.log(status);
					el.removeClass('installing');
					is_loading = false;
				}
			});
		}
	}
	
	/*
	*  Activate the plugin
	*
	*  @param el       object Button element
	*  @param plugin   string Plugin slug
	*  @since 1.0
	*/
	eig_ext_install.activate_plugin = function(el, plugin){
	  
		$.ajax({
			type: 'POST',
			url: eig_plugin_install_params.ajax_url,
			data: {
				action: 'eig_ext_activation',
				plugin: plugin,
				nonce: eig_plugin_install_params.admin_nonce,
				dataType: 'json'
			},
			success: function(data) { console.log(data);
				if(data){
					if(data.status === 'success'){
						el.attr('class', 'installed button disabled');
						el.html(eig_plugin_install_params.installed_button);
					}
				}	
				is_loading = false;		   		
			},
			error: function(xhr, status, error) {
				console.log(status);
				is_loading = false;
			}
		});
	
	};
	
	/*
	*  Install/Activate Button Click
	*
	*  @since 1.0
	*/ 
	$(document).on('click', '.eig-addons-extensions a.button', function(e){
		var el = $(this),
			plugin = el.data( 'slug' );
		
		e.preventDefault();
		
		if ( ! el.hasClass( 'disabled') ) {
			
			if( is_loading ) {
				return false;
			}
			
			// Installation
			if ( el.hasClass( 'install' ) ) {
				eig_ext_install.install_plugin( el, plugin );
			}
			
			// Activation
			if ( el.hasClass( 'activate' ) ) {
				eig_ext_install.activate_plugin( el, plugin );
			}
		}
	});

});