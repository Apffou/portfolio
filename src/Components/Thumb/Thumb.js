import { Link } from 'react-router-dom';
import test from '../../assets/img/test.png';
import './Thumb.scss';

function Thumb(props) {
    return (
        <div className='thumb'>
            <Link to={'projet/' + props.projet.id} >
                <div className='card-img'>
                    <img src={props.projet.thumb} alt={props.projet.alt} />

                </div>
                <div className='card-texte'>
                    <h3>{props.projet.thumbTitle}</h3>
                    <p>Explication du projet en quelques mots</p>
                </div>
            </Link>
        </div>
    )

}

export default Thumb;