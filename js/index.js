
window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",scrollY > 0);
})

const toggleMenu = function(){
    document.querySelector(".menuToggle").classList.toggle('active');
    document.querySelector("ul").classList.toggle('active');
}


$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });