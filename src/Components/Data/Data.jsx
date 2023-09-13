import PropTypes from 'prop-types'
import CardSide from '../CardSide/CardSide';
import './Data.css'
const Data = ({data, allActorsSalary}) => {
    return (
        <div>
            <div className='card-container'>
                <CardSide data={data}
                allActorsSalary={allActorsSalary}
                ></CardSide>
            </div>
            
        </div>
    );
};
Data.propTypes ={
    data : PropTypes.object,
    allActorsSalary : PropTypes.func
}
export default Data;