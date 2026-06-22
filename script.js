let hamburger = document.getElementById("ham");
let navmenu = document.getElementById("slide-menu");


hamburger.addEventListener("click", function(){
  if (navmenu.style.left === "0px"){
  navmenu.style.left = "-284px";
}else {
  navmenu.style.left = "0px";
}
});
