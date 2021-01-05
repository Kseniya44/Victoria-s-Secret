// slider
$(".main__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true, 
    arrows: false
}); 
// menu
let btn = document.querySelector(".nav__btn");
let menu = document.querySelector(".nav__list");
btn.addEventListener("click", function(){
    menu.classList.toggle("open-menu");
});