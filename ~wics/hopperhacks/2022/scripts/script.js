//hamburger menu
var menu = document.getElementById("menu-btn")
var menu_items = document.getElementById("menu-items")

menu.addEventListener('click', () => {
  if(menu.classList.contains("is-active")){
    menu.classList.remove("is-active")
    menu_items.classList.remove("active")
  }
  else {
    menu.classList.add("is-active")
    menu_items.classList.add("active")
  }
})

var faq = document.getElementsByClassName("faq-page");
for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
		
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
			body.style.display = "block";
			

        }
    });
}

