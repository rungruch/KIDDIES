
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
 let mediaQuery = window.matchMedia('(max-width: 800px)')
 function handleTabletChange(e) {
    if (e.matches) {
        let search = document.getElementsByClassName("search");
        search[0].style.display = "none";
        let menu = document.getElementById("menu");
        menu.style.display = "block"; 

      }else{
        let menu = document.getElementById("menu");
        menu.style.display = "flex"; 
        let ico_search = document.getElementById("ico-search");
        ico_search.style.display = "block";
      }
 }
 mediaQuery.addListener(handleTabletChange)
 handleTabletChange(mediaQuery)