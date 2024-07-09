import "../styles/Projects.css";

function Projects( { projects } ) {
    console.log(projects);
    return (
        <div className="projects-container">
            <h1>PROYECTOS REALIZADOS</h1>
            <p>Conoce nuestra experiencia</p>
            <div className="projects">
                {projects.map((project, index) => {
                    return(
                        <div key={index} className="project-container">
                            <img clasName="project-img" src={project.img} alt={project.name} />
                            <span className="project-name">{project.name}</span>
                        </div>
                    )
                })}
            </div>
            <button className="projects-btn">CONOCE NUESTROS PROYECTOS &rsaquo;</button>
        </div>
    );
}

export default Projects;