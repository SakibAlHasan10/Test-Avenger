import PropTypes from 'prop-types'
import Data from "../Data/data";
import './allData.css'
import CartSide from '../Cart/CartSide';
import { useState } from 'react';
const AllData = ({allData}) => {
    const [countSalary, setCountSalary] = useState(0)
    const [cartData, setCartData] = useState([])
    const [budget, setBudget] = useState(20000)
    // let budget;
    const allActorsSalary = (salary, data) =>{
        const salarySum = countSalary + salary;
        // console.log(budget)
        if(salarySum > 20000){
            alert('Your balance is low of Actor salary')
            return
        }
        const removeActor = cartData.find(actor => actor.id == data.id)
        if(removeActor){
            alert('This actor is booked')
            return
        }
        // console.log(removeActor)
        setBudget( 20000 - salarySum);
        setCountSalary(salarySum)
        const cartActor = [...cartData, data]
        setCartData(cartActor)
    }
    // console.log(cartData)
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
                    budget ={budget}
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