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