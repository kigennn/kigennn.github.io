const profileComments = [
    {
        title: "I learn best by building",
        text: "Working on real projects helps me improve faster and understand how software is used in practice."
    },
    {
        title: "I enjoy both sides of development",
        text: "I like creating user interfaces on the frontend and handling logic, databases, and structure on the backend."
    },
    {
        title: "I care about steady growth",
        text: "With every project, I aim to write cleaner code, solve better problems, and keep improving my technical skills."
    }
];

const timelineItems = [
    {
        year: "2019 - 2022",
        title: "High School",
        text: "This is where I built the foundation for the academic and technical path I am following now."
    },
    {
        year: "2023 - Present",
        title: "BSc Computer Science",
        text: "I am currently studying Computer Science at the Catholic University of Eastern Africa."
    },
    {
        year: "Feb 2026 - Present",
        title: "ALX Data Science",
        text: "I joined ALX Data Science to strengthen my skills in data, analysis, and practical technical thinking."
    },
    {
        year: "Certificate",
        title: "Cisco Cybersecurity",
        text: "My cybersecurity training has helped me grow a stronger security-aware mindset as I build systems."
    }
];

const projects = [
    {
        year: "2026",
        title: "Lilac Beauty Bar",
        stack: "Flask / MySQL / Python",
        summary: "A salon management website that supports bookings, employee workflows, and admin control.",
        points: [
            "Built booking flows with role-based access",
            "Connected the project to a MySQL-backed setup",
            "Improved the structure of the business workflow"
        ]
    },
    {
        year: "2026",
        title: "Online Book Haven",
        stack: "HTML / CSS / JavaScript / PHP",
        summary: "An online bookstore platform focused on browsing, account flows, and a practical shopping experience.",
        points: [
            "Designed a clear storefront and category browsing flow",
            "Worked on login, profile, and shopping features",
            "Extended the project with admin and database functionality"
        ]
    },
    {
        year: "2024 - 2025",
        title: "Practice Websites",
        stack: "HTML / CSS / JavaScript",
        summary: "A set of earlier builds that helped me strengthen layout, styling, and interaction skills.",
        points: [
            "Practiced page structure and visual hierarchy",
            "Improved confidence through repeated builds",
            "Created a foundation for more advanced projects"
        ]
    }
];

const rotatingRoles = [
    "Frontend & Backend Developer",
    "Backend Developer",
    "Frontend Developer",
    "Computer Science Student",
    "Data Science Learner"
];

const commentList = document.getElementById("comment-list");
const timeline = document.getElementById("timeline");
const projectGrid = document.getElementById("project-grid");
const heroRole = document.getElementById("hero-role");
const yearElement = document.getElementById("year");

profileComments.forEach((comment) => {
    const card = document.createElement("article");
    card.className = "comment-card";
    card.innerHTML = `
        <h3>${comment.title}</h3>
        <p>${comment.text}</p>
    `;
    commentList.appendChild(card);
});

timelineItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "timeline-item reveal";
    card.innerHTML = `
        <div>
            <span class="timeline-year">${item.year}</span>
        </div>
        <div class="timeline-copy">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </div>
    `;
    timeline.appendChild(card);
});

projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.innerHTML = `
        <div class="project-top">
            <span class="project-year">${project.year}</span>
            <span class="project-stack">${project.stack}</span>
        </div>
        <div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
        </div>
        <ul class="project-points">
            ${project.points.map((point) => `<li>${point}</li>`).join("")}
        </ul>
    `;
    projectGrid.appendChild(card);
});

yearElement.textContent = new Date().getFullYear();

let roleIndex = 0;
setInterval(() => {
    roleIndex = (roleIndex + 1) % rotatingRoles.length;
    heroRole.textContent = rotatingRoles[roleIndex];
}, 2200);

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

document.querySelectorAll(".photo-image").forEach((image) => {
    image.addEventListener("error", () => {
        image.style.display = "none";
    });
});
