document.addEventListener('DOMContentLoaded', function () {
  var typedElement = document.querySelector(".heading");
  if (typedElement) {
      var typed = new Typed(typedElement, {
          strings: ["Software Engineer Intern", "Software Engineering Undergraduate at IIT"],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true
      });
  } else {
      console.error("Typed.js element not found.");
  }
});

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



  