import './Credit.scss';
function Credit(props) {
    return (
        <div className='animation-credit-container'>
            <div className="credit-content">
                <i class="fa-regular fa-copyright"></i>
                <div className='text'>{props.credit}</div>
            </div>
        </div>
    )
}
export default Credit;