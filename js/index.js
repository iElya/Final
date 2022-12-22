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
    typeSpeed: 200,
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
