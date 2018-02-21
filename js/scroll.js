$(document).ready(function(){
	$('.topnav li a,section h1').click(function(){
		$.scrollTo(this.hash||0,1000);
		clean.preventDefault();
	});
});