import PropTypes from 'prop-types'
import './CardSide.css'
const CardButton = ({salary, allActorsSalary}) => {
    return (
        <div>
            <button onClick={()=>allActorsSalary(salary)} className='card-button'>Hire actor</button>
        </div>
    );
};
CardButton.propTypes ={
    salary : PropTypes.number,
    allActorsSalary : PropTypes.func,
}
export default CardButton;