// Load Project Count on Home Page
document.addEventListener("DOMContentLoaded", () => {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    document.getElementById("projectCount").innerText = projects.length;
    displayProjects();
});

// Add New Project
function addProject() {
    let title = document.getElementById("projectTitle").value;
    let description = document.getElementById("projectDescription").value;

    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects.push({ title, description });

    localStorage.setItem("projects", JSON.stringify(projects));
    alert("Project Added!");
}

// Display Projects
function displayProjects() {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    let projectList = document.getElementById("projectList");
    projectList.innerHTML = "";
    projects.forEach((project) => {
        let li = document.createElement("li");
        li.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectList.appendChild(li);
    });
}

// List of Members (Can be Updated Later)
const members = [
    { name: "John Doe", role: "Founder & CEO" },
    { name: "Jane Smith", role: "Project Manager" },
    { name: "Michael Brown", role: "Lead Developer" },
    { name: "Sarah Johnson", role: "Marketing Head" },
];

// Display Members on Members Page
document.addEventListener("DOMContentLoaded", () => {
    let membersList = document.getElementById("membersList");
    if (membersList) {
        members.forEach((member) => {
            let li = document.createElement("li");
            li.innerHTML = `<h3>${member.name}</h3><p>${member.role}</p>`;
            membersList.appendChild(li);
        });
    }
});

