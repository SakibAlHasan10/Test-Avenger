import PropTypes from 'prop-types'
import CardSide from '../CardSide/CardSide';
import './Data.css'
const Data = ({data}) => {
    return (
        <div>
            <div className='card-container'>
                <CardSide data={data}></CardSide>
            </div>
            
        </div>
    );
};
Data.propTypes ={
    data : PropTypes.object
}
export default Data;