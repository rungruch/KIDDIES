const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');


function index_scrollRight() {
  document.getElementById('newarrval-browse-scrolling-wrapper').scrollLeft += 250;
}
function index_scrollLeft() {
  document.getElementById('newarrval-browse-scrolling-wrapper').scrollLeft -= 250;
}

function serchenable() {
    let search = document.getElementsByClassName("search");
    search[0].style.display = "flex";

    let menu = document.getElementById("menu");
    menu.style.display = "none";

    let ico_search = document.getElementById("ico-search");
        ico_search.style.display = "none";
}
function serchdisable() {
    let search = document.getElementsByClassName("search");
    search[0].style.display = "none";
    
    let menu = document.getElementById("menu");
    let ico_search = document.getElementById("ico-search");

    menu.style.display = "flex"; 
    ico_search.style.display = "block";
  
}
