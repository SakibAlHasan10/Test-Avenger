import PropTypes from 'prop-types'
import Data from "../Data/data";
import './allData.css'
import CartSide from '../Cart/CartSide';
const AllData = ({allData}) => {
    // console.log(data)
    
    return (
        <div >
            <h2>Test Avenger</h2>
            <div className='data-container'>
                <div className='all-Card'>
                    { 
                        allData.map((data, idx) =><Data key={idx} 
                        data={data}></Data> )
                    }
                </div>
                <div>
                    <CartSide ></CartSide>
                </div>
            </div>
        </div>
    );
};
AllData.propTypes ={
    allData : PropTypes.array
}
export default AllData;