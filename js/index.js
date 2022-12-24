// navbar scroll

window.onscroll = () => {
    let nav = document.querySelector('nav');
    if(window.pageYOffset > 0){
        nav.classList.add('sticky');
    }
    else{
        nav.classList.remove('sticky');

    }
}



// typing text
var typed = new Typed(".auto-type" , {
    strings: ["I'm Jonathon Doe" , "I'm Web Developer" , "Lives in UK"],
    typeSpeed: 50,
    backSpeed: 50,
    startDelay: 500,
    loop: true,

})

// carusel 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// preloader
$(window).on('load', function () {
    $('.loader').fadeOut();
    $('#preloader-area').delay(350).fadeOut('slow');
});

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// animation fade in 
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

// photo animation
$(document).ready(function(){
  var mixer = mixitup('.ph_workss')
});


// popup
