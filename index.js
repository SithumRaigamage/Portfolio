function scrollToContact() {
  document.getElementById("contactme").scrollIntoView({ behavior: "smooth" });
}

const techCategories = {
  web: [
    {
      name: "HTML5",
      img: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      desc: "Markup Language",
    },
    {
      name: "CSS3",
      img: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      desc: "Styling Language",
    },
    {
      name: "JavaScript",
      img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
      desc: "Programming Language",
    },
    {
      name: "Angular",
      img: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",
      desc: "Frontend Framework",
    },
    // ... other tech stack items
  ],
  mobile: [
    {
      name: "Flutter",
      img: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
      desc: "UI Framework",
    },
  ],
  cloud: [],
  ai: [
    {
      name: "TensorFlow",
      img: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg",
      desc: "ML Framework",
    },
    {
      name: "R Programming",
      img: "https://cdn.worldvectorlogo.com/logos/r-lang.svg",
      desc: "Programming Language",
    },
  ],
  tools: [
    {
      name: "Git",
      img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
      desc: "Version Control System",
    },
    {
      name: "Docker",
      img: "https://cdn.worldvectorlogo.com/logos/docker-4.svg",
      desc: "Containerization Tool",
    },
    // ... other tech stack items
  ],
};

// Function to display tech stack items
function displayTechStack() {
  Object.keys(techCategories).forEach((category) => {
    const categoryDiv = document.getElementById(`${category}-stack`);
    const techStack = techCategories[category];
    const noDataDiv = document.getElementById(`${category}-no-data`);

    // If tech stack data exists
    if (techStack.length > 0) {
      techStack.forEach((tech) => {
        const techItem = `
            <div class="col-sm-6 col-md-4 col-xl-3 mt-3 mt-sm-4">
              <div class="techstack-item p-3 p-lg-5">
                <img src="${tech.img}" alt="${tech.name}" class="techstack-img img-fluid" />
                <h4 class="mt-3">${tech.name}</h4>
                <p class="text-muted">${tech.desc}</p>
              </div>
            </div>
          `;
        categoryDiv.innerHTML += techItem;
      });
      noDataDiv.classList.add("d-none"); // Hide "No Data" message if data is found
    } else {
      noDataDiv.classList.remove("d-none"); // Show "No Data" message if no data is found
      categoryDiv.innerHTML = ""; // Clear the category stack if no data
    }
  });
}

const projects = [
  {
    title: "Branding Project",
    description: "Logo Design",
    category: "branding",
    imageUrl:
      "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_1.png",
  },
  {
    title: "Web Portal Dev",
    description: "Front-End Development",
    category: "code",
    imageUrl:
      "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_2.png",
  },
  // {
  //   title: "Full Stack Web App",
  //   description: "Full Stack Development",
  //   category: "development",
  //   imageUrl: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_3.png",
  // },
  // Uncomment the following to test the "No projects found" case
  // []
];

// Function to filter portfolio items by category
function filterPortfolio(category) {
  const portfolioItemsContainer = document.getElementById("portfolioItems");
  const loadingSpinner = document.getElementById("loadingSpinner");
  const noProjectsMessage = document.getElementById("noProjectsMessage");
  const buttons = document.querySelectorAll(".projects-btn-filter");

  // Remove 'active' class from all buttons and reset their styles
  buttons.forEach((button) => {
    button.classList.remove("active");
    button.style.backgroundColor = "";
    button.style.color = "";
    button.style.borderColor = "";
  });

  // Add styles to the clicked button (active state)
  const activeButton = document.querySelector(
    `button[onclick="filterPortfolio('${category}')"]`
  );
  activeButton.classList.add("active");
  activeButton.style.backgroundColor = "rgb(13, 110, 253)";
  activeButton.style.color = "#fff";
  activeButton.style.borderColor = "rgb(13, 110, 253)";

  // Show the loading spinner while filtering
  loadingSpinner.style.display = "block";
  noProjectsMessage.style.display = "none";
  portfolioItemsContainer.innerHTML = "";

  // Filter projects based on category
  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category);

  if (filteredProjects.length === 0) {
    // If no projects found, show the message after hiding the spinner
    loadingSpinner.style.display = "none";
    noProjectsMessage.style.display = "block";
  } else {
    // Render filtered projects
    filteredProjects.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.classList.add(
        "col-md-6",
        "col-lg-4",
        "portfolio-item",
        project.category
      );

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

    // Hide the spinner once the projects are loaded
    loadingSpinner.style.display = "none";
  }
}

// Function to add hover effect via JavaScript
function addHoverEffect(button) {
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "rgb(13, 110, 253)";
    button.style.color = "#fff";
    button.style.borderColor = "rgb(13, 110, 253)";
  });

  button.addEventListener("mouseout", () => {
    if (!button.classList.contains("active")) {
      button.style.backgroundColor = "";
      button.style.color = "";
      button.style.borderColor = "";
    }
  });
}

// Function to render projects on initial load
function renderProjects() {
  filterPortfolio("all"); // Set the "All" category as active initially
}

// Single window.onload to initialize both tech stack and projects
window.onload = function () {
  displayTechStack(); // Display tech stack
  renderProjects(); // Render projects

  // Add hover effects to all buttons
  const buttons = document.querySelectorAll(".projects-btn-filter");
  buttons.forEach((button) => addHoverEffect(button));
};
