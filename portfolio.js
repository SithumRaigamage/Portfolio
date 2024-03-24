document.addEventListener('DOMContentLoaded', function () {
  var typedElement = document.querySelector(".heading");
  if (typedElement) {
      var typed = new Typed(typedElement, {
          strings: ["Software Engineer Intern", "Software Engineering Undergraduate"],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true
      });
  } else {
      console.error("Typed.js element not found.");
  }
});



  