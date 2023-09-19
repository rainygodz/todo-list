export default function addProject(name) {
  const ul = document.querySelector("ul");
  const project = createProjectElement("FirstPr");
  ul.appendChild(project);
}


function createProjectElement(name) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.classList.add("projectBtn");
  button.textContent = name;
  li.appendChild(button);

  return li;
}