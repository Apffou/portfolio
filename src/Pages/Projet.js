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
                    <p>Projet terminé  {project.date} </p>
                    <p> {project.description} </p>
                    <div>tags avec lien vers le projet (button)</div>
                    <div>techno utilisé titre + img du logo </div>
                </div>
            </section>
        </div>
    )

}
export default Projet;