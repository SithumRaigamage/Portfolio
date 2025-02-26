function scrollToContact() {
  document.getElementById("contactme").scrollIntoView({ behavior: "smooth" });
}


const projects = [
  // Existing web development projects...
  {
    title: "CeraFlaw",
    description: "Cross-platform CeraFlaw Marketing Page",
    category: "web_development", 
    imageUrl: "Images/tile.jpeg",
    projectLink: "#",
    techStack: [
      { name: "HTML5", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
      { name: "CSS3", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
      { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    ],
  },
  {
    title: "Predictive Analytics",
    description: "Machine Learning Clustering and Neural Network",
    category: "AI_ML",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    projectLink: "#",
    techStack: [
      { name: "R", icon: "https://cdn.worldvectorlogo.com/logos/r-lang.svg" }
    ]
  },
  {
    title: "To Do App",
    description: "To Do App",
    category: "web_development",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop",
    projectLink: "",
    techStack: [
      { name: "HTML5", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
      { name: "CSS3", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
      { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    ],
  },
  {
    title : "QR Code Generator",
    description : "QR Code Generator", 
    category : "web_development",
    imageUrl : "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=800&auto=format&fit=crop",
    projectLink : "",
    techStack : [
      { name : "HTML5", icon : "https://cdn.worldvectorlogo.com/logos/html-1.svg"},
      { name : "CSS3", icon : "https://cdn.worldvectorlogo.com/logos/css-3.svg"},
      { name : "JavaScript", icon : "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"},
      {name : "python", icon : "https://cdn.worldvectorlogo.com/logos/python-5.svg"}
    ]
  },
  {
    title : "Weather App",
    description : "Weather App", 
    category : "web_development",
    imageUrl : "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop",
    projectLink : "",
    techStack : [
      { name : "HTML5", icon : "https://cdn.worldvectorlogo.com/logos/html-1.svg"},
      { name : "CSS3", icon : "https://cdn.worldvectorlogo.com/logos/css-3.svg"},
      { name : "JavaScript", icon : "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"},
      {name : "python", icon : "https://cdn.worldvectorlogo.com/logos/python-5.svg"}
    ]
  },
  {
    title : "Music Player",
    description : "Music Player",
    category : "web_development",
    imageUrl : "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop",
    projectLink : "",
    techStack : [
      { name : "HTML5", icon : "https://cdn.worldvectorlogo.com/logos/html-1.svg"},
      { name : "CSS3", icon : "https://cdn.worldvectorlogo.com/logos/css-3.svg"},
      { name : "JavaScript", icon : "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"},
      {name : "python", icon : "https://cdn.worldvectorlogo.com/logos/python-5.svg"}
    ]
  },
  {
    title : "Demon Slayer Website",
    description : "Demon Slayer Website",
    category : "web_development",
    imageUrl : "Images/1317168.jpeg",
    projectLink : "",
    techStack : [
      { name : "HTML5", icon : "https://cdn.worldvectorlogo.com/logos/html-1.svg"},
      { name : "CSS3", icon : "https://cdn.worldvectorlogo.com/logos/css-3.svg"},
      { name : "JavaScript", icon : "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"},
      {name : "BootStrap", icon : "https://cdn.worldvectorlogo.com/logos/bootstrap-1.svg"}
    ]
  },
  // {
  //   title : "Calculator",
  //   description : "Calculator",
  //   category : "web_development",
  //   imageUrl : "Images/charlesdeluvio-GlavtG-umzE-unsplash.jpg",
  //   projectLink : "",
  //   techStack : [
  //     { name : "HTML5", icon : "https://cdn.worldvectorlogo.com/logos/html-1.svg"},
  //     { name : "CSS3", icon : "https://cdn.worldvectorlogo.com/logos/css-3.svg"},
  //     { name : "JavaScript", icon : "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"},
  //     {name : "python", icon : "https://cdn.worldvectorlogo.com/logos/python-5.svg"}
  //   ]
  // },

  // {
  //   title: "Flutter Mobile App",
  //   description: "Cross-platform Mobile App",
  //   category: "mobile",
  //   imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
  //     { name: "Dart", icon: "https://cdn.worldvectorlogo.com/logos/dart.svg" }
  //   ]
  // },
  // {
  //   title: "iOS Fitness Tracker",
  //   description: "Native iOS Development",
  //   category: "mobile",
  //   imageUrl: "https://images.unsplash.com/photo-1539683255143-73a6b838b106?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  //     { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" }
  //   ]
  // },
  // {
  //   title: "Web Portal Dev",
  //   description: "Front-End Development",
  //   category: "web_development",
  //   imageUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "Angular", icon: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
  //     { name: "TypeScript", icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg" }
  //   ]
  // },
  // {
  //   title: "Full Stack Web App",
  //   description: "Full Stack Development",
  //   category: "web_development",
  //   imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  //     { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  //     { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" }
  //   ]
  // },
  // {
  //   title: "E-commerce Platform",
  //   description: "Full Stack Development",
  //   category: "web_development",
  //   imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "Angular", icon: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
  //     { name: "Spring Boot", icon: "https://cdn.worldvectorlogo.com/logos/spring-3.svg" },
  //     { name: "MySQL", icon: "https://cdn.worldvectorlogo.com/logos/mysql-2.svg" }
  //   ]
  // },
  // {
  //   title: "Mobile App UI",
  //   description: "UI/UX Design",
  //   category: "mobile",
  //   imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "Figma", icon: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg" }
  //   ]
  // },
  // {
  //   title: "Social Media Dashboard",
  //   description: "Frontend Development",
  //   category: "web_development",
  //   imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  //     { name: "Tailwind CSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" }
  //   ]
  // },
  // {
  //   title: "Restaurant Website",
  //   description: "Web Development",
  //   category: "web_development",
  //   imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "Angular", icon: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
  //     { name: "Bootstrap", icon: "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" }
  //   ]
  // },
  // {
  //   title: "Flutter Mobile App",
  //   description: "Cross-platform Mobile App",
  //   category: "mobile",
  //   imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
  //     { name: "Dart", icon: "https://cdn.worldvectorlogo.com/logos/dart.svg" }
  //   ]
  // },
  // {
  //   title: "iOS Fitness Tracker",
  //   description: "Native iOS Development",
  //   category: "mobile",
  //   imageUrl: "https://images.unsplash.com/photo-1539683255143-73a6b838b106?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "Swift", icon: "https://cdn.worldvectorlogo.com/logos/swift-15.svg" }
  //   ]
  // },
  // {
  //   title: "Image Recognition App",
  //   description: "AI/ML Development",
  //   category: "AI_ML",
  //   imageUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "TensorFlow", icon: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg" },
  //     { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" }
  //   ]
  // },
  // {
  //   title: "Smart Home System",
  //   description: "IoT Development",
  //   category: "IOT",
  //   imageUrl: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "Arduino", icon: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg" },
  //     { name: "C++", icon: "https://cdn.worldvectorlogo.com/logos/c.svg" }
  //   ]
  // },
  // {
  //   title: "Predictive Analytics",
  //   description: "Machine Learning",
  //   category: "AI_ML",
  //   imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  //     { name: "R", icon: "https://cdn.worldvectorlogo.com/logos/r-lang.svg" }
  //   ]
  // },
  // {
  //   title: "Weather Station",
  //   description: "Embedded Systems",
  //   category: "IOT",
  //   imageUrl: "https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "Arduino", icon: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg" },
  //     { name: "C", icon: "https://cdn.worldvectorlogo.com/logos/c-1.svg" }
  //   ]
  // },
  // {
  //   title: "smart Car",
  //   description: "Embedded Systems",
  //   category: "IOT",
  //   imageUrl: "https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?w=800&auto=format&fit=crop",
  //   projectLink: "#",
  //   techStack: [
  //     { name: "Arduino", icon: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg" },
  //     { name: "C", icon: "https://cdn.worldvectorlogo.com/logos/c-1.svg" }
  //   ]
  // }
];

const ITEMS_PER_PAGE = 6; // Number of items to show per page
let currentPage = 1;

// Function to filter portfolio items by category
function filterPortfolio(category, page = 1) {
  const portfolioItemsContainer = document.getElementById("portfolioItems");
  const loadingSpinner = document.getElementById("loadingSpinner");
  const noProjectsMessage = document.getElementById("noProjectsMessage");
  const paginationContainer = document.getElementById("paginationContainer");
  const buttons = document.querySelectorAll(".projects-btn-filter");

  currentPage = page;

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
  paginationContainer.innerHTML = "";
  paginationContainer.style.display = "none";

  // Filter projects based on category
  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category);

  if (filteredProjects.length === 0) {
    loadingSpinner.style.display = "none";
    noProjectsMessage.style.display = "block";
    paginationContainer.style.display = "none"; // Hide pagination when no projects
  } else {
    // Calculate pagination
    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProjects = filteredProjects.slice(startIndex, endIndex);

    // Render current page projects
    currentProjects.forEach((project) => {
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
        <div class="tech-stack mt-2">
          ${project.techStack ? project.techStack.map(tech => `
            <img src="${tech.icon}" alt="${tech.name}" title="${tech.name}" class="tech-icon mx-1" style="width: 20px; height: 20px;">
          `).join('') : ''}
        </div>
        <a href="${project.projectLink}" class="btn btn-primary mt-3">View Project</a>
          </div>
        </div>
      `;

      portfolioItemsContainer.appendChild(projectItem);
    });

    // Show pagination only if there are multiple pages
    if (totalPages > 1) {
      paginationContainer.style.display = "block";
      const pagination = document.createElement("div");
      pagination.classList.add("pagination", "justify-content-center", "mt-4");
      
      for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement("button");
        pageLink.classList.add("btn", "btn-outline-primary", "mx-1");
        if (i === currentPage) pageLink.classList.add("active");
        pageLink.textContent = i;
        pageLink.onclick = () => filterPortfolio(category, i);
        pagination.appendChild(pageLink);
      }
      
      paginationContainer.appendChild(pagination);
    }

    loadingSpinner.style.display = "none";
  }
}

// Function to render projects on initial load
function renderProjects() {
  filterPortfolio("all"); // Set the "All" category as active initially
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
    {
      name: "React",
      img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      desc: "Frontend Library",
    },
    {
      name: "TypeScript",
      img: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      desc: "Programming Language",
    },
    {
      name: "Node.js",
      img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      desc: "Runtime Environment",
    },
    {
      name: "Tailwind CSS",
      img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
      desc: "CSS Framework",
    },
    {
      name: "Bootstrap",
      img: "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg",
      desc: "CSS Framework",
    },
    {
      name: "Sass",
      img: "https://cdn.worldvectorlogo.com/logos/sass-1.svg",
      desc: "CSS Preprocessor",
    },
    {
      name: "jQuery",
      img: "https://cdn.worldvectorlogo.com/logos/jquery-1.svg",
      desc: "JavaScript Library",
    },
    {
      name: "mySQL",
      img: "https://cdn.worldvectorlogo.com/logos/mysql-2.svg",
      desc: "Database",
    },
    {
      name: "MongoDB",
      img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      desc: "Database",
    },
    {
      name: "Java",
      img: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
      desc: "Programming Language",
    },
    {
      name: "Spring Boot",
      img: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
      desc: "Backend Framework",
    },
    {
      name: "Python",
      img: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
      desc: "Programming Language",
    },
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
    {
      name: "Postman",
      img: "https://cdn.worldvectorlogo.com/logos/postman.svg",
      desc: "API Testing Tool",
    },
    {
      name: "Jira",
      img: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
      desc: "Project Management Tool",
    },
    {
      name: "IntelliJ IDEA",
      img: "https://cdn.worldvectorlogo.com/logos/intellij-idea-1.svg",
      desc: "IDE",
    },
    {
      name: "Visual Studio Code",
      img: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
      desc: "Code Editor",
    },
    {
      name: "PyCharm",
      img: "https://cdn.worldvectorlogo.com/logos/jetbrains-pycharm.svg",
      desc: "IDE",
    },
    {
      name: "gitHub",
      img: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
      desc: "Version Control System",
    },
    {
      name: "Bitbucket",
      img: "https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg",
      desc: "Version Control System",
    },
    {
      name: "Windsurf Ai",
      img: "https://exafunction.github.io/public/images/windsurf/windsurf-app-icon.svg",
      desc: "AI Tool",
    },
    {
      name: "figma",
      img: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
      desc: "Design Tool",
    },
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
                <p class="text-white">${tech.desc}</p>
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




// Single window.onload to initialize both tech stack and projects
window.onload = function () {
  displayTechStack(); // Display tech stack
  renderProjects(); // Render projects

  // Add hover effects to all buttons
  const buttons = document.querySelectorAll(".projects-btn-filter");
  buttons.forEach((button) => addHoverEffect(button));
};





//appending certificates
// Certificates data
const certificates = [

  {
    title: "Learning Angular",
    description: "Basic certification in Angular development, covering components, services, routing, and Angular CLI.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",
    platformLogo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    platformName: "LinkedIn"
  },
  {
    title: "BitBucket",
    description: "Certified in BitBucket version control system, covering repositories, branches, pull requests, and merging.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg",
    platformLogo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    platformName: "LinkedIn"
  },
  {
    title: "Introduction to Dart",
    description: "Basic certification in Dart programming, covering syntax, data types, functions, and object-oriented programming.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/dart.svg",
    platformLogo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    platformName: "LinkedIn"
  },
  {
    title: "Git Essential Training",
    description: "Certified in Git version control system, covering repositories, branches, pull requests, and merging.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    platformLogo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    platformName: "LinkedIn"
  },
  {
    title: "Java Object-Oriented Programming",
    description: "Certification in Java programming, covering classes, objects, inheritance, polymorphism, and interfaces.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
    platformLogo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    platformName: "LinkedIn"
  },
  {
    title: "Java Swing",
    description: "Certification in Java Swing, covering GUI components, event handling, and Java Swing applications.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
    platformLogo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    platformName: "LinkedIn"
  },
  {
    title: "MYSQL Essential Training",
    description: "Certified in MySQL database, covering tables, queries, joins, and database management.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/mysql-2.svg",
    platformLogo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    platformName: "LinkedIn"
  },
  {
    title: "Web Development Workshop",
    description: "Workshop in web development, covering HTML, CSS, JavaScript,React and responsive web design.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
    platformLogo: "Images/ieee_computer_society_student_chapter_of_iit_logo.jpeg",
    platformName: "WebSpire"
  },
  {
    title: "Professional Certificate in Java Programming",
    description: "Professional certification in Java programming, covering syntax, data structures, and object-oriented programming.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
    platformLogo: "Images/informatics_institute_of_technology_logo.jpeg",
    platformName: "IIT"
  }
];

const CERTS_PER_PAGE = 6;
let currentCertPage = 1;

function renderCertificates(page = 1) {
  const certificatesContainer = document.getElementById('certificatesList');
  const paginationContainer = document.getElementById('certificatesPagination');
  
  // Calculate pagination
  const totalPages = Math.ceil(certificates.length / CERTS_PER_PAGE);
  const startIndex = (page - 1) * CERTS_PER_PAGE;
  const endIndex = startIndex + CERTS_PER_PAGE;
  const currentCerts = certificates.slice(startIndex, endIndex);

  const row = document.createElement('div');
  row.className = 'row';

  currentCerts.forEach((cert, index) => {
    const certDiv = document.createElement('div');
    certDiv.className = 'col-md-6 col-lg-4';
    certDiv.innerHTML = `
      <div class="certificates-item ${index === 1 ? 'active' : ''} mt-4">
        <img src="${cert.imageUrl}" alt="${cert.title} Certificate" class="cert-img w-100" style="height: 50px; width: 50px; margin-top:30px; object-fit: contain;" />
        <div class="certificates-content p-4 p-lg-5">
          <div class="text-center mb-3">
            <img src="${cert.platformLogo}" alt="${cert.platformName} Logo" 
              style="width: 30px; height: 30px;" 
              class="mb-2" />
            <h4 class="certificates-heading mb-0">${cert.title}</h4>
          </div>
          <p class="certificates-sub-heading opacity-30 mb-0">${cert.description}</p>
        </div>
      </div>
    `;
    row.appendChild(certDiv);
  });

  certificatesContainer.innerHTML = '';
  certificatesContainer.appendChild(row);

  // Update pagination
  paginationContainer.innerHTML = `
    <li class="page-item ${page === 1 ? 'disabled' : ''}">
      <a class="page-link" href="#" onclick="renderCertificates(${page - 1}); return false;">Previous</a>
    </li>
    ${Array.from({length: totalPages}, (_, i) => i + 1).map(num => `
      <li class="page-item ${num === page ? 'active' : ''}">
        <a class="page-link" href="#" onclick="renderCertificates(${num}); return false;">${num}</a>
      </li>
    `).join('')}
    <li class="page-item ${page === totalPages ? 'disabled' : ''}">
      <a class="page-link" href="#" onclick="renderCertificates(${page + 1}); return false;">Next</a>
    </li>
  `;
}

// Add this line to window.onload to render certificates
window.onload = function () {
  displayTechStack();
  renderProjects();
  renderCertificates();
  
  const buttons = document.querySelectorAll(".projects-btn-filter");
  buttons.forEach((button) => addHoverEffect(button));
};