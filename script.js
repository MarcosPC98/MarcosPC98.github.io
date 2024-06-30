document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Software Project 1',
            description: 'Descripción del Proyecto 1',
            link: 'https://github.com/tuUsuario/proyecto1'
        },
        {
            title: 'Proyecto 2',
            description: 'Descripción del Proyecto 2',
            link: 'https://github.com/tuUsuario/proyecto2'
        }, 
		{
            title: 'Proyecto 3',
            description: 'Descripción del Proyecto 3',
            link: 'https://github.com/tuUsuario/proyecto2'
        }
    ];

    const articles = [
        {
            title: 'Artículo de Inversión 1',
            description: 'Descripción del Artículo de Inversión 1',
            link: 'https://tuBlog.com/articulo1'
        },
        {
            title: 'Artículo de Inversión 2',
            description: 'Descripción del Artículo de Inversión 2',
            link: 'https://tuBlog.com/articulo2'
        }
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Ver Proyecto</a>
        `;
        projectList.appendChild(projectElement);
    });

    const articleList = document.getElementById('article-list');
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.link}" target="_blank">Leer Artículo</a>
        `;
        articleList.appendChild(articleElement);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulario enviado');
        // Aquí puedes añadir la lógica para enviar el formulario a tu servidor
    });
});
