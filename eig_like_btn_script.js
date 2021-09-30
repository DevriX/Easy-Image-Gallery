jQuery( document ).ready(function() {
	console.log('JS wants to know: do u like me?')
	let lgLikeBtn;
	if (document.querySelector('div.lightgallery')) {
		document.querySelector('div.lightgallery').addEventListener('click', (e)=> {
			lgLikeBtn = document.querySelector('button.lg-like-btn')
			tackleHoverLike(lgLikeBtn);
	
		})
	}

	if (window.location.href.includes('lg')) {
		setTimeout(function(){ 
			lgLikeBtn = document.querySelector('button.lg-like-btn')
			tackleHoverLike(lgLikeBtn);
		 }, 20);

	}

 })

 function tackleHoverLike(element) {
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


