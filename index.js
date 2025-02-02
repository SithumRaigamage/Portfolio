
function scrollToContact() {
  document.getElementById("contactme").scrollIntoView({ behavior: "smooth" });
}


// Array of project data (can be empty to test the "No projects found" message)
const projects = [
  {
    title: "Branding Project",
    description: "Logo Design",
    category: "branding",
    imageUrl: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_1.png",
  },
  {
    title: "Web Portal Dev",
    description: "Front-End Development",
    category: "code",
    imageUrl: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_2.png",
  },
  {
    title: "Full Stack Web App",
    description: "Full Stack Development",
    category: "development",
    imageUrl: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_3.png",
  },
  // Uncomment the following to test the "No projects found" case
  // []
];


// Function to filter portfolio items by category
function filterPortfolio(category) {
  const items = document.querySelectorAll(".portfolio-item");
  const buttons = document.querySelectorAll(".projects-btn-filter");

  // Remove 'active' class from all buttons and reset their styles
  buttons.forEach(button => {
    button.classList.remove('active');
    button.style.backgroundColor = ''; // Reset background color
    button.style.color = ''; // Reset text color
    button.style.borderColor = ''; // Reset border color
  });

  // Add styles to the clicked button (active state)
  const activeButton = document.querySelector(`button[onclick="filterPortfolio('${category}')"]`);
  activeButton.classList.add('active');
  activeButton.style.backgroundColor = 'rgb(13, 110, 253)';
  activeButton.style.color = '#fff';
  activeButton.style.borderColor = 'rgb(13, 110, 253)';

  // Filter portfolio items based on selected category
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

// Function to add hover effect via JavaScript
function addHoverEffect(button) {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'rgb(13, 110, 253)';
    button.style.color = '#fff';
    button.style.borderColor = 'rgb(13, 110, 253)';
  });

  button.addEventListener('mouseout', () => {
    // Reset styles if the button is not active
    if (!button.classList.contains('active')) {
      button.style.backgroundColor = '';
      button.style.color = '';
      button.style.borderColor = '';
    }
  });
}

// Function to render projects dynamically
function renderProjects() {
  const portfolioItemsContainer = document.getElementById('portfolioItems');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const noProjectsMessage = document.getElementById('noProjectsMessage');
  
  // Show the loading spinner
  loadingSpinner.style.display = 'block';
  noProjectsMessage.style.display = 'none'; // Hide "No projects found" message initially
  portfolioItemsContainer.innerHTML = ''; // Clear any existing content

  // Simulate a delay of 5 seconds (useful for testing purposes)
  setTimeout(() => {
    // If no projects in the array, show the "No projects found" message
    if (projects.length === 0) {
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
  }, 5000); // Simulate a 5-second delay
}

// Call the render function when the page loads
window.onload = function() {
  renderProjects();
  filterPortfolio('all'); // Set the "All" category as active initially

  // Add hover effects to all buttons
  const buttons = document.querySelectorAll(".projects-btn-filter");
  buttons.forEach(button => addHoverEffect(button));
};
