import PropTypes from 'prop-types'
import './CartSide.css'
const CartSum = ({countSalary, budget}) => {
    // console.log(budget)
    const budgetInput = 
    <input id='b-input' className='budget-input' type="text" placeholder="Enter your budget"/>
    
    return (
        <div>
            {
                budgetInput
            }
            <h3 className='project-cost'>Total budget: $ {budget}</h3>
            <h3 className='project-cost'>Actors total cost: $ {countSalary}</h3>
        </div>
    );
};
CartSum.propTypes ={
    countSalary : PropTypes.number,
    budget : PropTypes.number
}
export default CartSum;