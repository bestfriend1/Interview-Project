//GET ACCESS HTML ELEMENTS
const hamburger = document.querySelector('.hamburger');
const slide = document.querySelector('.slide');
const crossBar = document.getElementById('cross');
const overlay = document.querySelector('.overlay');
const menuList = document.querySelectorAll('.list li a');

/**
 * SLIDE CONTROLL ALL METHOD
 * onActiveSlide();
 * onHideSlide();
 */


function onActiveSlide(){
       if(slide.classList.contains('slide-active') !== true){
             slide.classList.add('slide-active');
             overlay.classList.add('overlay-show');

       }
}
function onHideSlide(){
       if(slide.classList.contains('slide-active') == true){
            slide.classList.remove('slide-active');
             overlay.classList.remove('overlay-show');
       }
}
//CALL METHOD IN CLICK
hamburger.addEventListener('click',onActiveSlide);
crossBar.addEventListener('click',onHideSlide);
overlay.addEventListener('click',onHideSlide);

menuList.forEach((menuItem) => {
        menuItem.addEventListener('click',onHideSlide);
})
