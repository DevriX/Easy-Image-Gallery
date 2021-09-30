

jQuery( document ).ready(function() {
	console.log('hello')
	if (document.querySelector('ul script')) {
		document.querySelector('ul script').style.display='none';
	}
    Array.from(document.querySelectorAll('div.easy-image-gallery img')).forEach(img => img.style = {})

	if (Array.from(document.querySelectorAll('.easy-image-gallery.linked.prettyphoto') ).length > 0) {
		let pretty = Array.from( document.querySelectorAll('.easy-image-gallery.linked.prettyphoto') );

		for (let i=0; i<pretty.length; i++) {
			let singleGallery = pretty[i];
			let groupNum;
			Array.from(singleGallery.children).forEach( galItem => {
				let [groupName, groupNum] = galItem.rel.split("-");
				let length = Number(groupNum.length) - 1;
				console.log(groupNum)
				console.log(length)
				groupNum= groupNum.substring(0,length);
				groupNum = Number(groupNum) + i
				// groupNum+=1
				galItem.rel = `${groupName}-${groupNum}]`;
				//console.log(currentRel)
			})
		}

	}
	if (Array.from(document.querySelectorAll('.easy-image-gallery.linked.fancybox') ).length > 0) {
		let fancy = Array.from(document.querySelectorAll('.easy-image-gallery.linked.fancybox') );
		for (let i=0; i<fancy.length; i++) {
			let singleGallery = fancy[i];
			let groupNum;
			Array.from(singleGallery.children).forEach( galItem => {
				 let [groupName, groupNum] = galItem.dataset.fancybox.split("gallery");
				 groupNum = Number(groupNum) + i
				 galItem.dataset.fancybox = `gallery-${groupNum}`;
				// //console.log(currentRel)
				console.log(groupNum)
				console.log(galItem.dataset.fancybox)
			})
		}
	}

});

