var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dots");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dotSelect", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dotSelect";
}

var maxOffset = document.querySelector('.mouse').offsetTop,
    maxOffsetStats = $('.entourBlock').offset().top,
    menu = document.querySelector('nav'),
    done= false;

function count($this){
    var current = parseInt($this.html(), 10);
    current = current + 50; /* Where 50 is increment */	
    $this.html(++current);
    if(current > $this.data('count')){
        $this.html($this.data('count'));
    } else {    
        setTimeout(function(){count($this)}, 50);
    }
    done = true;
}        	

window.addEventListener('scroll', function(e){
    if(window.pageYOffset > maxOffset) {
        menu.style.backgroundColor = '' ;
        menu.style.boxShadow = "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)";


    } else {
        menu.style.backgroundColor = 'transparent';
        menu.style.boxShadow = "none";

    }

    if(window.pageYOffset > maxOffsetStats && !done){
        $(".stat-count").each(function() {
            $(this).data('count', parseInt($(this).html(), 10));
            $(this).html('0');
            count($(this));
        });
    }
}); 