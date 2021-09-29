

jQuery( document ).ready(function() {
	console.log('hello')
	if (document.querySelector('ul script')) {
		document.querySelector('ul script').style.display='none';
	}
    Array.from(document.querySelectorAll('div.easy-image-gallery img')).forEach(img => img.style = {})
	
});

