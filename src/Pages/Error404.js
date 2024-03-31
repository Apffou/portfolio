import { Link } from 'react-router-dom'

function Error404() {
    return (
        <div className="section-erreur">

            <div className="oups">
                <h1>OUPS !</h1>
                <p>Souhaitez vous revenir à la page <Link to="/"> d'accueil</Link> ? </p>
            </div>
            <img src="assets/images/oups_erreur_404.webp" alt="Petite fille rousse les deux mains sur la bouche par le photographe Jelleke Vanooteghem" />
        </div>
    )
}
export default Error404;