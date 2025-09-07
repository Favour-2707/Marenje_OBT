/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// Toggle mobile menu
// Toggle navigation for mobile
function myFunction() {
  var nav = document.getElementById("myLinks");
  nav.classList.toggle("show");
}

// Auto-close after clicking a link (mobile only)
document.querySelectorAll("#myLinks a").forEach(link => {
  link.addEventListener("click", () => {
    var nav = document.getElementById("myLinks");
    nav.classList.remove("show");
  });
});
