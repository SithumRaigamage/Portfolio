// Function to filter portfolio items by category
function filterPortfolio(category) {
  const items = document.querySelectorAll(".portfolio-item");

  if (category === "all") {
    items.forEach((item) => {
      item.style.display = "block"; // Show all items
    });
  } else {
    items.forEach((item) => {
      if (item.classList.contains(category)) {
        item.style.display = "block"; // Show the selected category items
      } else {
        item.style.display = "none"; // Hide the non-selected category items
      }
    });
  }
}

function scrollToContact() {
  document.getElementById("contactme").scrollIntoView({ behavior: "smooth" });
}
