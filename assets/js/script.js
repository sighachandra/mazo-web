function handBurgerShow() {
	console.log("hello");
  document.getElementById("myDropdown").classList.toggle("show_h");
}

window.onclick = function(event) {
  if (!event.target.parentNode.matches('.dropbtn_h') && !event.target.matches('.dropbtn_h')) {
    var dropdowns = document.getElementsByClassName("dropdown-content_h");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show_h')) {
        openDropdown.classList.remove('show_h');
      }
    }
  }
}
