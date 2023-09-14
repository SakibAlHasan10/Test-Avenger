import PropTypes from 'prop-types'
import Data from "../Data/data";
import './allData.css'
import CartSide from '../Cart/CartSide';
import { useState } from 'react';
let budgetInput ;
let inputBudget;
const AllData = ({allData}) => {
    const [cartData, setCartData] = useState([])
    const [countSalary, setCountSalary] = useState(0)
    const [budget, setBudget] = useState(0)


    const inputDown = (e) =>{
        if(e.key === 'Enter'){
            inputBudget = (parseInt(e.target.value))
            setBudget(inputBudget)
            // console.log(budget)
            e.target.value = '';
        }
    }
    budgetInput = <input id='b-input' onKeyDown={inputDown} className='budget-input' type="text" placeholder="Enter your budget"/>
    const allActorsSalary = (salary, data) =>{
        const salarySum = countSalary + salary;
        // console.log(budget)
        if(salarySum > inputBudget || budget <=0){
            alert('Your balance is low of Actor salary')
            return
        }
        const removeActor = cartData.find(actor => actor.id == data.id)
        if(removeActor){
            alert('This actor is booked')
            return
        }
        // console.log(removeActor)
        setBudget( budget - salary);
        // console.log(budget)

        setCountSalary(salarySum)
        const cartActor = [...cartData, data]
        setCartData(cartActor)
        
    }
    // console.log(cartData)
    return (
        <div >
            {/* <h2 className='body-title'>Test Avenger</h2> */}
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
                    budgetInput={budgetInput}
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