import PropTypes from 'prop-types'
import CardHeat from './CardHeat';
import './CartSide.css'
import CartSum from './CartSum';
import CartActorCon from './CartActorCon';
const CartSide = ({cartData, countSalary, budget, budgetInput}) => {
    return (
        <>
            <div className="cart-Container">
                <CardHeat></CardHeat>
            </div>
            <div className="project-budget">
                <CartSum countSalary={countSalary}
                budget ={budget}
                budgetInput={budgetInput}
                ></CartSum>
                
            </div>
            <div>
                <h2 className='cart-actor-title'>Hire Actors</h2>
                <CartActorCon 
                    cartData = {cartData}
                ></CartActorCon>
            </div>
    </>
    );
};

CartSide.propTypes ={
    budgetInput : PropTypes.object,
    cartData : PropTypes.array,
    countSalary : PropTypes.number,
    budget : PropTypes.number
}
export default CartSide;