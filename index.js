
function scrollToContact() {
  document.getElementById("contactme").scrollIntoView({ behavior: "smooth" });
}


// Array of project data (can be empty to test the "No projects found" message)
const projects = [
  // {
  //   title: "Branding Project",
  //   description: "Logo Design",
  //   category: "branding",
  //   imageUrl: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_1.png",
  // },
  // {
  //   title: "Web Portal Dev",
  //   description: "Front-End Development",
  //   category: "code",
  //   imageUrl: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_2.png",
  // },
  // {
  //   title: "Full Stack Web App",
  //   description: "Full Stack Development",
  //   category: "development",
  //   imageUrl: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_3.png",
  // },
  // Uncomment the following to test the "No projects found" case
  // []
];

// Function to render projects dynamically
function renderProjects() {
  const portfolioItemsContainer = document.getElementById('portfolioItems');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const noProjectsMessage = document.getElementById('noProjectsMessage');
  
  // Show the loading spinner
  loadingSpinner.style.display = 'block';
  noProjectsMessage.style.display = 'none'; // Hide "No projects found" message initially
  portfolioItemsContainer.innerHTML = ''; // Clear any existing content

  // Simulate a delay of 10 seconds (useful for testing purposes)
  setTimeout(() => {
    // If no projects in the array, show the "No projects found" message
    if (projects.length == 0) {
      loadingSpinner.style.display = 'none'; // Hide loading spinner
      noProjectsMessage.style.display = 'block'; // Show "No projects found" message
    } else {
      // Loop through each project and generate HTML
      projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('col-md-6', 'col-lg-4', 'portfolio-item', project.category);

        projectItem.innerHTML = `
          <div class="projects-item position-relative mt-4">
            <img src="${project.imageUrl}" alt="${project.title}" class="img-fluid w-100" />
            <div class="projects-content text-center p-4">
              <h5>${project.title}</h5>
              <p class="mb-0">${project.description}</p>
            </div>
          </div>
        `;

        portfolioItemsContainer.appendChild(projectItem);
      });
      
      // Hide loading spinner after content is loaded
      loadingSpinner.style.display = 'none';
    }
  }, 5000); // Simulate a 10-second delay
}

// Call the render function when the page loads
window.onload = renderProjects;

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

