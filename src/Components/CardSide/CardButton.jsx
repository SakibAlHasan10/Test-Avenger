import PropTypes from 'prop-types'
import './CardSide.css'
const CardButton = ({data, allActorsSalary}) => {
    const {salary} = data
    return (
        <div>
            <button onClick={()=>allActorsSalary(salary, data)} className='card-button'>Hire actor</button>
        </div>
    );
};
CardButton.propTypes ={
    data : PropTypes.object,
    allActorsSalary : PropTypes.func,
}
export default CardButton;