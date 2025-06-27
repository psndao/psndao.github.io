// Mode sombre
const modeSwitch = document.querySelector('.mode-switch');
if (modeSwitch) {
    modeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = modeSwitch.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

// Filtrage des projets
function filterProjects(tech) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (tech === 'all' || project.dataset.tech.includes(tech)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Animation au scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });
});

// Appel initial pour afficher les sections déjà dans la vue
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });
});



// Bouton "Retour en haut"
window.onscroll = function() { 
    toggleScrollButton();
    revealSections();
};

function toggleScrollButton() {
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Animation de défilement pour révéler les sections
function revealSections() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            section.classList.add("section-visible");
        }
    });
}

// Appel initial pour afficher les sections déjà dans la vue
revealSections();

document.addEventListener("DOMContentLoaded", function () {
    const charts = [
        {
            id: 'ligue1Chart',
            type: 'bar',
            labels: ['Occasionnels', 'Réguliers', 'Ultra fans'],
            data: [120, 300, 180],
            color: '#0073e6',
            title: 'Segmentation des abonnés Ligue 1'
        },
       {
    id: 'categorieChart',
    type: 'doughnut',
    labels: ['Électronique', 'Maison', 'Mode', 'Autres'],
    data: [80, 150, 100, 70],
    color: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
    title: 'Répartition des catégories de produits'
},
{
            id: 'attritionChart',
            type: 'line',
            labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai'],
            data: [200, 180, 160, 140, 130],
            color: '#28a745',
            title: 'Évolution de l’attrition clients'
        },
        {
            id: 'assuranceChart',
            type: 'bar',
            labels: ['Profil jeune', 'Famille', 'Senior'],
            data: [100, 200, 80],
            color: '#6f42c1',
            title: 'Profils d’assurés'
        }
    ];

    charts.forEach(cfg => {
        const ctx = document.getElementById(cfg.id);
        if (ctx) {
            new Chart(ctx, {
                type: cfg.type,
                data: {
                    labels: cfg.labels,
                    datasets: [{
                        label: cfg.title,
                        data: cfg.data,
                       backgroundColor: Array.isArray(cfg.color) ? cfg.color : [cfg.color]
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: false },
                        title: { display: true, text: cfg.title }
                    },
                    scales: cfg.type === 'bar' || cfg.type === 'line' ? {
                        y: { beginAtZero: true }
                    } : {}
                }
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    if (burger && navLinks) {
        burger.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const confirmation = document.getElementById("form-confirmation");

    if (form && confirmation) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    form.reset();
                    confirmation.style.display = "block";
                } else {
                    alert("Une erreur s'est produite. Veuillez réessayer.");
                }
            });
        });
    }
});