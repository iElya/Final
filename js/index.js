// navbar scroll
var e_nav1 = document.querySelector(".e_nav1");
window.onscroll = () => {
    this.scrollY > 20 ? e_nav1.classList.add("sticky"):
    e_nav1.classList.remove("sticky")
}