
window.addEventListener("scroll", opacity);
window.addEventListener("scroll", navbar)


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
    if (document.documentElement.scrollTop < 400) {
        box.style.opacity = "0";
        box.style.transform = "translate(0px, 50px)"; 
      }
    if (document.documentElement.scrollTop > 400) {
        box.style.opacity = "1";
        box.style.transform = "translate(0px, -50px)"; 
    }
        
}
