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

// Select the Projects section and unordered list from the HTML
const projectSection = document.querySelector("#projects");
const projectList = projectSection.querySelector("ul");

// Fetch repository data from the GitHub API
fetch("https://api.github.com/users/blmburnett/repos")

// Convert the API response into JSON format
  .then(response => response.json())

// Work with the repository data returned from GitHub
  .then(repositories => {

// Loop through each repository in the array
    repositories.forEach(function (repository) {

// Create a new list item (<li>) element
      const project = document.createElement("li");

// Add the repository name as a clickable link      
      project.innerHTML = `
        <a href="${repository.html_url}" target="_blank">
          ${repository.name}
        </a>
      `;
// Add the new list item to the Projects list
      projectList.appendChild(project);

    });

  })

 // Catch and display any errors if the fetch fails
  .catch(error => {
    console.error("Error fetching repositories:", error);
  });

// Array of skills
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "GitHub",
  "Git",
  "Linux",
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

// Select the form using its name attribute
const messageForm = document.querySelector(
  'form[name="leave_message"]'
);

// Add an event listener that runs when the form is submitted
messageForm.addEventListener("submit", function (event) {

// Prevent the page from refreshing when the form is submitted
  event.preventDefault();

// Get the values entered into the form fields
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

// Log the form values to the console
  console.log(usersName, usersEmail, usersMessage);

// Select the Messages section
  const messageSection =
    document.querySelector("#messages");

// Select the unordered list (<ul>) inside the Messages section
  const messageList =
    messageSection.querySelector("ul");

// Create a new list item (<li>) for the submitted message
  const newMessage =
    document.createElement("li");
  
// Add the user's name as an email link and display their message
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">
      ${usersName}
    </a>
    <span> wrote: ${usersMessage}</span>
  `;
 // Create a Remove button
  const removeButton =
    document.createElement("button");

  removeButton.innerText = "remove";
  removeButton.type = "button";

  // Add a click event listener to the Remove button
  removeButton.addEventListener("click", function () {

  // Find the parent list item that contains the message  
    const entry = removeButton.parentNode;
// Remove the message from the page
    entry.remove();

  });

  // Add the Remove button to the message
  newMessage.appendChild(removeButton);

  // Add the completed message to the Messages list
  messageList.appendChild(newMessage);

  // Clear the form fields after submission
  messageForm.reset();

});