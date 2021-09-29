

jQuery( document ).ready(function() {
	console.log('hello')
	if (document.querySelector('ul script')) {
		document.querySelector('ul script').style.display='none';
	}
    Array.from(document.querySelectorAll('div.easy-image-gallery img')).forEach(img => img.style = {})

	if (Array.from(document.querySelectorAll('.easy-image-gallery.linked.prettyphoto') ).length > 0) {
		let pretty = Array.from( document.querySelectorAll('.easy-image-gallery.linked.prettyphoto') );
		let galleriesOnPage = pretty.length;
		let firstPrettyId = pretty[0].children[0].rel;
		let count = 0;

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

});

