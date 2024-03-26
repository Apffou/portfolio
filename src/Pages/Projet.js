
import Tags from '../Components/Tags/Tags';
import projet from '../Projets.json';
import { useParams } from "react-router-dom";


function Projet() {

    const params = useParams();
    //Constante qui contient le tableau strictement égal à l'id dans l'url
    const project = projet.find((element) => element.id === params.idprojet)

    return (
        <div className='project'>

            <section className='section-description'>
                <div className='mission'>
                    <h1> {project.title} </h1>
                    <h2>Description</h2>
                    <p>{project.date} </p>
                    <p> {project.description} </p>
                    <h2>Compétences utilisées</h2>
                    <div className='tags-container'>
                        {project.tags.map((tags) => <Tags key={tags} nom={tags} />)}
                    </div>
                    <h2>En savoir plus </h2>
                    <div className='link-projets'>
                        <a href={project.linkGithub} className='icon-projet'>
                            <img src="../../assets/images/github-link.png" alt="icon github" className='icon' />
                            <span>Source du projet</span>
                        </a>
                        <a href={project.linkPage} className='icon-projet'>
                            <img src="../../assets/images/page-web.png" alt="icon site web" className='icon' />
                            <span>Accès au site</span>
                        </a>
                    </div>
                </div>
                <div className='cover-container'>
                    <img src={project.cover} alt={project.alt} className='cover' />
                </div>

            </section>
        </div>
    )

}
export default Projet;