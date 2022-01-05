const menuIcon = document.getElementById("menu-icon"),
  navbar = document.querySelector("#navbar nav");

menuIcon.addEventListener("mouseup", navDropBoxHandler);
function navDropBoxHandler() {
  if (navbar.classList.contains("deactive")) {
    navbar.classList.remove("deactive");
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
    navbar.classList.add("deactive");
  }
}
