
import SimpleCard from '../Components/SimpleCard/SimpleCard';
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
                    <p className='date'>{project.date} </p>
                    <p> {project.description} </p>
                    <h2>Compétences et outils utilisés</h2>
                    <div className='tags-container'>
                        {project.tags.map((tag, index) => <SimpleCard key={index} src={tag.img_src} alt={tag.img_alt} title={tag.title} />)}
                    </div>

                    <h2>En savoir plus </h2>

                    <div className='link-projets'>
                        <a href={project.linkGithub} className='icon-projet'>
                            <img src="../../portfolio/assets/images/github-link.png" alt="icon github" className='icon' />
                            <span>Source</span>
                        </a>
                        {project.linkPage && ( // Condition pour vérifier si project.linkpage est défini 
                            <a href={project.linkPage} className='icon-projet'>
                                <img src="../../portfolio/assets/images/page-web.png" alt="icon site web" className='icon' />
                                <span>Site</span>
                            </a>)}
                    </div>
                </div>
                <div className='cover-container'>
                    <img src={project.cover} alt={project.altCover} className='cover' />
                </div>

            </section>
        </div>
    )

}
export default Projet;