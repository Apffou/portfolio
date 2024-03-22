
import Tags from '../Components/Tags/Tags';
import projet from '../Projets.json';
import { useParams } from "react-router-dom";


function Projet() {

    const params = useParams();
    //Constante qui contient le tableau strictement égal à l'id dans l'url
    const project = projet.find((element) => element.id === params.idprojet)

    return (
        <div className='project'>
            <h1> {project.title} </h1>
            <section>
                <img src={project.cover} alt={project.alt} />
                <div className='mission'>
                    <h2>Description de la mission</h2>
                    <p>Projet terminé {project.date} </p>
                    <p> {project.description} </p>
                    <h3>Compétences utilisés</h3>
                    <div className='tags-container'>
                        {project.tags.map((tags) => <Tags key={tags} nom={tags} />)}
                    </div>
                    <h3>En savoir plus : </h3>
                    <div className='link-projets'>
                        <a href={project.linkGithub} className='icon-projet'>
                            <img src="../../assets/images/github-link.png" alt="icon github" className='icon' />
                            <span>Voir le projet</span>
                        </a>
                        <a href={project.linkPage} className='icon-projet'>
                            <img src="../../assets/images/page-web.png" alt="icon site web" className='icon' />
                            <span>Voir le site</span>
                        </a>

                    </div>

                </div>
            </section>
        </div>
    )

}
export default Projet;