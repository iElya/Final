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