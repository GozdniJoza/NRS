const nav = document.getElementById("nav-bar");

window.onscroll = function() {navbar()};
//window.onscroll = function() {opacity()};

function navbar()
{
    const nav = document.getElementById("nav-bar");
    nav.style.backgroundColor = "background-color: rgb(29, 26, 26)";
    if (document.documentElement.scrollTop > 50) {
        nav.style.backgroundColor =  "rgb(29, 26, 26) ";
        nav.style.transition = "500ms";
        nav.style.marginTop = "0px";
      }
    if (document.documentElement.scrollTop < 50) {
        nav.style.backgroundColor =  "transparent";
        nav.style.transition = "500ms";
        nav.style.marginTop = "30px";
      }

}
function opacity()
{
    const box = document.getElementById("parent");
    if (document.documentElement.scrollTop > 80) {
        box.style.opacity = "0";
        box.style.transition = "1s";
      }
    if (document.documentElement.scrollTop < 80) {
      }
        box.style.opacity = "1";
        box.style.transition = "1s";
}