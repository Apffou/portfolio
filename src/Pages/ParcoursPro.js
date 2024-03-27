import SimpleCard from "../Components/SimpleCard/SimpleCard";


function ParcoursPro() {
    return (
        <body>
            <section className="presentation-contain">
                <div className="presentation">
                    <h1>Curriculum Vitae</h1>
                    <p>Mesdames et Messieurs bienvenue sur mon CV ! (tadaa!).</p>
                    <p>Passage obligé dans un Porfolio de fin d'étude, bien que ce soit une page généralement consultés par des
                        recruteurs ou des personnes en manque de lecture. Vous trouverez des informations typiques tel que mes formations ou mes compétences.
                    </p>
                    <p>Est ce que j'essaie de remplir ce paragraphe avec des banalités juste pour faire comme si j'avais beaucoup de contenu ? Peut-être ? </p>
                    <a href="https://www.linkedin.com/in/anais-zafiriou-lejeune/"><div className="button-linkedin"> Vous êtes sur Linkedin ? Suivons nous ! </div></a>
                </div>
                <div className="personne">
                    <div className="photo-button">
                        <img src="/assets/images/portrait.webp" alt="Portrait dessiné par hunbloom" />
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
                <h2 className="title">Parcours Professionnel</h2>
                <section className="formations">
                    <h2>Mon cursus</h2>
                    <div className="formations-container">
                        <div className="formation-content">
                            <img src="/assets/images/infographiste.png" alt="" />
                            <h3>Infographiste Mise en Page </h3>
                            <span>2016/2017</span>
                        </div>
                        <div className="formation-content">
                            <img src="/assets/images/web-design.png" alt="" />
                            <h3>Web Design </h3>
                            <span>2021/2022</span>
                        </div>

                        <div className="formation-content">
                            <img src="/assets/images/integratrice.png" alt="" />
                            <h3>Intégratrice Web </h3>
                            <span>2023/2024</span>
                        </div>
                    </div>

                </section>
                <section className="skills-soft">
                    <h2>Mes compétences</h2>
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