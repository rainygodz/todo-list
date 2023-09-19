export default function createSideBar() {
  const content = document.querySelector("#content");

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const inboxContainer = createInboxSection();

  const projectList = createProjectsSection();

  sidebar.appendChild(inboxContainer);
  sidebar.appendChild(projectList);

  content.appendChild(sidebar);
}


function createInboxSection() {
  const inboxContainer = document.createElement("div");
  inboxContainer.classList.add("container");

  const inbox = document.createElement("button");
  inbox.textContent += "Inbox";
  inboxContainer.appendChild(inbox);

  return inboxContainer;
}


function createProjectsSection() {
  const container = document.createElement("div");
  container.classList.add("container");

  const top = document.createElement("div");
  top.classList.add("top");

  const projectList = document.createElement("div");
  projectList.classList.add("project-list");
  projectList.textContent = "Projects";
  top.appendChild(projectList);

  const addProjectBtn = document.createElement("div");
  addProjectBtn.classList.add("addProjectBtn");
  const addProject = document.createElement("button");
  addProject.setAttribute("id", "addProject");
  const img = document.createElement("img");
  img["src"] = "./images/plus.png";
  addProject.appendChild(img);  
  addProjectBtn.appendChild(addProject);
  top.appendChild(addProjectBtn);
  container.appendChild(top);

  const projectUl = document.createElement("div");
  projectUl.classList.add("project-ul");

  const ul = document.createElement("ul");
  projectUl.appendChild(ul);
  container.appendChild(projectUl);

  return container;
  
}