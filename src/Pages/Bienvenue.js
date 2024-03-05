import projets from '../Projets.json';
import Thumb from '../Components/Thumb/Thumb';
import welcome from '../assets/img/welcome.jpg'
function Bienvenue() {
    return (
        <div>
            <section className="section-presentation">

                <div className='titre'>
                    <h1>Bienvenue sur mon Portfolio</h1>
                    <div className='presentation-paragr'>
                        <p>Vous trouverez sur ce site Web les projets crées pendant ma formation d’intégratrice Web chez Open Classroom. </p>
                        <p> Vous trouverez également mon parcours professionnel ainsi qu’une page pour en savoir un peu plus sur la personne derrière ce site ! </p>
                        <p> Bonne lecture !</p>
                    </div>
                </div>
                <img src={welcome} alt="" className="presentation-img" />

            </section>
            <section className='section-projets'>
                <h2>Mes projets . . .</h2>
                <div className='section-thumbs'>
                    {projets.map((projet) => <Thumb key={projet.id} projet={projet} />)}
                </div>

            </section>
        </div>
    );
}

export default Bienvenue;