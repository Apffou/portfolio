import SimpleCard from "../Components/SimpleCard/SimpleCard";


function ParcoursPro() {
    return (
        <body>
            <section className="presentation-contain">
                <div className="presentation">
                    <h1>Curriculum Vitae</h1>
                    <p>Passage obligatoire lors d'un Portfolio de fin d'étude vous y trouverez des informations typiques telles que mes formations ou mes compétences.</p>
                    <p> Mes qualités sont aussi mes défauts : je suis curieuse et déterminée. Comme dans la vie le trop est l'ennemi du bien, à être curieuse je me perds dans mes
                        recherches et a être determiné je m'obstine sur des détails qui me font perdre du temps.
                    </p>
                    <p> En guise de conclusion, je rappellerai l'une de mes citations préférées, un véritable leitmotiv dans ma vie :
                        'Tout ce que nous avons à décider, c'est ce que nous devons faire du temps qui nous est imparti'." </p>
                    <a href="https://www.linkedin.com/in/anais-zafiriou-lejeune/"><div className="button-linkedin"> Vous êtes sur Linkedin ? Suivons nous ! </div></a>
                </div>
                <div className="personne">
                    <div className="photo-button">
                        <img src="/portfolio/assets/images/portrait.webp" alt="Portrait dessiné par hunbloom" />
                    </div>
                    <div className="contact">
                        <h2>Contact </h2>
                        <div>
                            <p>Périgueux, France</p>
                            <p>azedelle.web@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Parcours">
                <h2 className="title">Parcours professionnel</h2>
                <section className="formations">
                    <h2>Cursus</h2>
                    <div className="formations-container">
                        <div className="formation-content">
                            <img src="/portfolio/assets/images/infographiste.png" alt="" />
                            <h3>Infographiste mise en page </h3>
                            <span>2016/2017</span>
                        </div>
                        <div className="formation-content">
                            <img src="/portfolio/assets/images/web-design.png" alt="" />
                            <h3>Web Design </h3>
                            <span>2021/2022</span>
                        </div>

                        <div className="formation-content">
                            <img src="/portfolio/assets/images/integratrice.png" alt="" />
                            <h3>Intégratrice Web </h3>
                            <span>2023/2024</span>
                        </div>
                    </div>

                </section>
                <section className="skills-soft">
                    <h2>Compétences</h2>
                    <div className="skills-soft-container">
                        <SimpleCard src="html.png" alt="Logo du langage Html" title="HTML" />
                        <SimpleCard src="css-3.png" alt="Logo du langage CSS" title="CSS" />
                        <SimpleCard src="sass.png" alt="Logo du langage SASS" title="Sass" />
                        <SimpleCard src="javascript.png" alt="Logo du langage JavaScript" title="JavaScript" />
                        <SimpleCard src="react.png" alt="Logo du langage React" title="React" />
                    </div>
                </section>
                <section className="skills-soft">
                    <h2>Mes outils</h2>
                    <div className="skills-soft-container">
                        <SimpleCard src="figma.png" alt="Logo du logiciel Figma" title="Figma" />
                        <SimpleCard src="photoshop.png" alt="Logo du logiciel Photoshop" title="Photoshop" />
                        <SimpleCard src="illustrator.png" alt="Logo du logiciel Illustrator" title="Illustrator" />
                        <SimpleCard src="vs-code.png" alt="Logo du logiciel VS Code" title="VS-code" />
                    </div>
                </section>
            </section>

        </body >
    )
}
export default ParcoursPro;