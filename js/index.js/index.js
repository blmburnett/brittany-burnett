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

// Select the form by name attribute
const messageForm = document.getElementsByName("leave_message")[0];

// Add submit event listener
messageForm.addEventListener("submit", function (event) {

  // Prevent page refresh
  event.preventDefault();

  // Get values from form fields
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  // Log values to the console
  console.log("Name:", userName);
  console.log("Email:", userEmail);
  console.log("Message:", userMessage);

  // Select the Messages section
const messageSection = document.querySelector("#messages");

// Select the ul inside the Messages section
const messageList = messageSection.querySelector("ul");

// Create a new list item
const newMessage = document.createElement("li");

// Add the message content
newMessage.innerHTML = `
  <a href="mailto:${userEmail}">${userName}</a>
  <span> ${userMessage} </span>
`;

// Create remove button
const removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.type = "button";

// Remove message when button is clicked
removeButton.addEventListener("click", function () {
  const entry = removeButton.parentNode;
  entry.remove();
});

// Add button to list item
newMessage.appendChild(removeButton);

// Add list item to messages list
messageList.appendChild(newMessage);

  event.target.reset();

});

