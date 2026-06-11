// Create footer element
const footer = document.createElement("footer");

// Add footer to the body
document.body.appendChild(footer);

// Create date object
const today = new Date();

// Get current year
const thisYear = today.getFullYear();

// Create paragraph element
const copyright = document.createElement("p");

// Add copyright text
copyright.innerHTML = `© Brittany Burnett ${thisYear}`;

// Append paragraph to footer
footer.appendChild(copyright);

// Array of skills
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "GitHub",
  "AWS",
  "Office 365"
];

// Select the Skills section
const skillsSection = document.querySelector("#skills");

// Select the ul inside the Skills section
const skillsList = skillsSection.querySelector("ul");

// Loop through skills array
for (let i = 0; i < skills.length; i++) {

  // Create new li element
  const skill = document.createElement("li");

  // Set text of li
  skill.innerText = skills[i];

  // Append li to ul
  skillsList.appendChild(skill);
}
// Select Projects section and list
const projectSection = document.querySelector("#projects");
const projectList = projectSection.querySelector("ul");

// Fetch GitHub repositories
fetch("https://api.github.com/users/blmburnett/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (repositories) {

    console.log(repositories);

    // Loop through repositories
    for (let i = 0; i < repositories.length; i++) {

      // Create list item
      const project = document.createElement("li");

      // Set repository name
      project.innerText = repositories[i].name;

      // Add to Projects list
      projectList.appendChild(project);
    }
  })
  .catch(function (error) {
    console.error("Error fetching repositories:", error);

    const errorMessage = document.createElement("li");
    errorMessage.innerText = "Unable to load GitHub repositories.";
    projectList.appendChild(errorMessage);
  });
