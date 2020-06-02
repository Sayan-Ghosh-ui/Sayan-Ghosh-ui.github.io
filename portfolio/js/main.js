$(document).ready(function(){
	$('#icon').click(function(){
		$('ul').toggleClass('show');
	});
});
$(document).ready(function(){
	var typed = new Typed('.type_about', {
				strings: ["Web Developer"],
				typeSpeed: 60,
				backSpeed:60,
				smartBackspace: true,
				backDelay: 1200,
				loop:true,
				cursorChar: '...',
});
});


$(document).ready(function(){
	let $btns=$('.button-group button');
	$btns.click(function(e){
		$('.button-group button').removeClass('active');
		e.target.classList.add('active');

		let selector=$(e.target).attr('data-filter');
		$('.gallery').isotope({
			filter:selector
		})
return false;
	})
})




// type

	