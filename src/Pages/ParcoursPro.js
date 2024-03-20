

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
                    <a href="https://www.linkedin.com/in/anais-zafiriou-lejeune/"><div className="button-linkedin"> N'hésitez pas à me suivre sur Linkedin, c'est par ici !</div></a>
                </div>
                <div className="personne">
                    <div className="photo-button">
                        <img src="/assets/images/portrait.jpg" alt="Portrait dessiné par hunbloom" />
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
                    <h2>Cursus</h2>
                    <div className="formations-container">
                        <div className="formation-content">
                            <img src="/assets/images/integratrice.png" alt="" />
                            <h3>Intégratrice Web </h3>
                            <span>2023/2024</span>
                        </div>
                        <div className="formation-content">
                            <img src="/assets/images/web-design.png" alt="" />
                            <h3>Web Design </h3>
                            <span>2021/2022</span>
                        </div>
                        <div className="formation-content">
                            <img src="/assets/images/infographiste.png" alt="" />
                            <h3>Infographiste Mise en Page </h3>
                            <span>2016/2017</span>
                        </div>
                    </div>

                </section>
                <section className="skills">
                    <h2>Mes compétences</h2>
                    <div className="skills-container">
                        <div className="skills-content ">
                            <div className="skills-logo html">
                                <img src="/assets/images/html.png" alt="" />
                            </div>
                            <h3>
                                HTML
                            </h3>
                        </div>
                        <div className="skills-content">
                            <div className="skills-logo css">
                                <img src="/assets/images/css-3.png" alt="" />
                            </div>
                            <h3>
                                CSS
                            </h3>
                        </div>
                        <div className="skills-content">
                            <div className="skills-logo sass">
                                <img src="/assets/images/sass.png" alt="" />
                            </div>
                            <h3>
                                Sass
                            </h3>
                        </div>
                        <div className="skills-content">
                            <div className="skills-logo javascript">
                                <img src="/assets/images/javascript.png" alt="" />
                            </div>
                            <h3>
                                Javascript
                            </h3>
                        </div>
                        <div className="skills-content">
                            <div className="skills-logo react">
                                <img src="/assets/images/react.png" alt="" />
                            </div>
                            <h3>
                                React
                            </h3>
                        </div>
                    </div>
                </section>
                <section className="software">
                    <h2>Mes outils</h2>
                    <div className="software-container">
                        <div className="software-content">
                            <div className="software-logo figma">
                                <img src="/assets/images/figma.png" alt="" />
                            </div>
                            <h3>
                                Figma
                            </h3>
                        </div>
                        <div className="software-content">
                            <div className="software-logo photoshop">
                                <img src="/assets/images/photoshop.png" alt="" />
                            </div>
                            <h3>
                                Photoshop
                            </h3>
                        </div>
                        <div className="software-content">
                            <div className="software-logo illustrator">
                                <img src="/assets/images/illustrator.png" alt="" />
                            </div>
                            <h3>
                                Illustrator
                            </h3>
                        </div>
                        <div className="software-content">
                            <div className="software-logo vs-code">
                                <img src="/assets/images/vs-code.png" alt="" />
                            </div>
                            <h3>
                                VS Code
                            </h3>
                        </div>
                    </div>
                </section>
            </section>

        </body >
    )
}
export default ParcoursPro;