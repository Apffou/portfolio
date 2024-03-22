import { Link } from 'react-router-dom';
import './Thumb.scss';

function Thumb(props) {
    return (
        <div className='thumb'>
            <Link to={'projet/' + props.projet.id} >
                <div className='card-img'>
                    <img src={props.projet.thumb} alt={props.projet.alt} />

                </div>
                <div className='card-texte'>
                    <h3 className='title'>{props.projet.thumbTitle}</h3>
                    <p className='explication'>{props.projet.explication}</p>
                </div>
            </Link>
        </div>
    )

}

export default Thumb;