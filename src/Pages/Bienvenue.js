import projets from '../Projets.json';
import Thumb from '../Components/Thumb/Thumb';
function Bienvenue() {
    return (
        <div>
            <section className="section-presentation">

                <div className='titre'>
                    <h1>Portfolio d'Anaïs Zafiriou-Lejeune</h1>
                    <div className='presentation-paragr'>
                        <p>Présentation des projets d'apprentissages pendant ma formation d’intégratrice Web chez Open Classroom. </p>
                        <p> Mon parcours professionnel ainsi qu'une description personnelle seront aussi de la partie. </p>
                        <p> Bonne lecture !</p>
                    </div>
                </div>
                <img src="/portfolio/assets/images/bienvenue.webp" alt="" className="presentation-img" />

            </section>
            <section className='section-projets'>
                <h2>Mes projets</h2>
                <div className='section-thumbs'>
                    {projets.map((projet) => <Thumb key={projet.id} projet={projet} />)}
                </div>

            </section>
        </div>
    );
}

export default Bienvenue;