let menu = document.getElementById("nav");
let open = document.getElementById("menu-btn");
let close = document.getElementById("close");

function openmenu() {
  menu.style.left = "0";
  open.style.display = "none";
  close.style.display = "block";
}
function closemenu() {
  menu.style.left = "-100%";
  open.style.display = "block";
  close.style.display = "none";
}

// nav bg color change

function change() {
  var nav = document.getElementById("navbar");
  var value = window.scrollY;
  if (value > 80) {
    nav.classList.add("nav-change");
  } else {
    nav.classList.remove("nav-change");
  }
}

window.addEventListener("scroll", change);

document.addEventListener('DOMContentLoaded', function () {
    var typedElement = document.querySelector(".tech");
    if (typedElement) {
        var typed = new Typed(typedElement, {
            strings: ["Python", "Java","HTML","CSS","JavaScript","Dart",
            "Flutter","Machine Learning","SpringBoot","Object Detection",
            "API","Figma","Arduino"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    } else {
        console.error("Typed.js element not found.");
    }
});



  

  