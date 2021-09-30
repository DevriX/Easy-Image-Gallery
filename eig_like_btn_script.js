jQuery( document ).ready(function() {
	console.log('JS wants to know: do u like me?')
	let lgLikeBtn;
	if (document.querySelector('div.lightgallery')) {
		document.querySelector('div.lightgallery').addEventListener('click', (e)=> {
			lgLikeBtn = document.querySelector('button.lg-like-btn')
			tackleLgHoverLike(lgLikeBtn);
			likeLgPhoto(lgLikeBtn)
	
		})
	}

	if (window.location.href.includes('lg')) {
		setTimeout(function(){ 
			lgLikeBtn = document.querySelector('button.lg-like-btn')
			tackleLgHoverLike(lgLikeBtn);
			likeLgPhoto(lgLikeBtn)
		 }, 20);

	}

 })

 function tackleLgHoverLike(element) {
	if (element!==null) {
		console.log('ima goo')
		element.addEventListener('mouseover', ()=> {
			element.style.color = "white";
		})
		element.addEventListener('mouseleave', ()=> {
			element.style.color = "rgb(153, 153, 153)";
		})
	}
 }
 function likeLgPhoto(element) {
	 element.addEventListener('click', (e) => {
		 let lgPhotosGroup = e.target.parentNode;
		 let isActivePhoto = Array.from(lgPhotosGroup.children)[0].querySelector('div.active>img').src
		//  console.log(isActivePhoto)
		//  console.log(e.target)
		//  console.log(e.target.parentNode)
		//  console.log('liked')
		 let data = {
			action: 'eig_tackle_lg_likes',
			clickedPhoto:isActivePhoto
		}
		if ( data != null ) {
			jQuery.ajax({
				type: "post",
				dataType: "json",
				url: ajax_object.ajax_url,
				data: data,
				success: function (response) {
					console.log(response.data)
				},
				error: function (response) {
					console.log(response)
				}
			})
	
		}
	 })
 }


