import './Footer.scss'

function Footer() {
    return (
        <section className="section-footer">
            {/* 
            <h3>Réseaux Sociaux</h3>
            <div className="section-reseau">
                <a href="https://www.linkedin.com/in/anais-zafiriou-lejeune" className="linkedin">
                    <img src="assets/images/logo-linkedin.png" alt="logo Linkedin" />
                </a>
                <a href="https://github.com/Apffou" className="github">
                    <img src="assets/images/github.png" alt="logo Github" />
                </a>

            </div>
            */}
            <div className='copyright'>
                <img src="/assets/images/logo.png" alt="" className='logo' />

            </div>

            <p>Copyright © Anaïs Zafiriou-Lejeune</p>
        </section>
    )
}
export default Footer;