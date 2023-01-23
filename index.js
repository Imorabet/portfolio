if ("IntersectionObserver" in window) {
  console.log("browser supports IntersectionObserver");
} else {
  console.log("browser does not support IntersectionObserver");
}

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
    else{
      entry.target.classList.remove('visible')
    }
  });
}

const observer = new IntersectionObserver(callback,{
  threshold: 1,
});

const elementsAboutToBeVisible = [...document.querySelectorAll('.fading')];
elementsAboutToBeVisible.forEach((element) => observer.observe(element));

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});


function openSidebar() {
  document.querySelector(".sidebar").classList.toggle("new");
}