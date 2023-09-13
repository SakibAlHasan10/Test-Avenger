import PropTypes from 'prop-types'
import './CartSide.css'
const CartSum = ({countSalary, budget, budgetInput}) => {
    return (
        <div className='sum-container'>
            {
                budgetInput
            }
            <h3 className='project-cost'>Total budget: $ {budget}</h3>
            <h3 className='project-cost'>Actors total cost: $ {countSalary}</h3>
        </div>
    );
};
CartSum.propTypes ={
    budgetInput : PropTypes.object,
    countSalary : PropTypes.number,
    budget : PropTypes.number
}
export default CartSum;