import PropTypes from 'prop-types'
import Data from "../Data/data";
import './allData.css'
import CartSide from '../Cart/CartSide';
import { useState } from 'react';
const AllData = ({allData}) => {
    const [countSalary, setCountSalary] = useState(0)
    const [cartData, setCartData] = useState([])
    const allActorsSalary = (salary, data) =>{
        const salarySum = countSalary + salary;
        setCountSalary(salarySum)
        const cartActor = [...cartData, data]
        setCartData(cartActor)
    }
    console.log(cartData)
    return (
        <div >
            <h2>Test Avenger</h2>
            <div className='data-container'>
                <div className='all-Card'>
                    { 
                        allData.map((data, idx) =><Data key={idx} 
                        data={data}
                        allActorsSalary={allActorsSalary}
                        ></Data> )
                    }
                </div>
                <div>
                    <CartSide 
                    cartData ={cartData}
                    countSalary={countSalary}
                    ></CartSide>
                </div>
            </div>
        </div>
    );
};
AllData.propTypes ={
    allData : PropTypes.array
}
export default AllData;