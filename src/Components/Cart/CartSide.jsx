import PropTypes from 'prop-types'
import CardHeat from './CardHeat';
import './CartSide.css'
import CartSum from './CartSum';
import CartActorCon from './CartActorCon';
const CartSide = ({cartData, countSalary, budget}) => {
    return (
        <>
            <div className="cart-Container">
                <CardHeat></CardHeat>
            </div>
            <div className="project-budget">
                <CartSum countSalary={countSalary}
                budget ={budget}
                ></CartSum>
                
            </div>
            <div>
                <h2>Hire Actors</h2>
                <CartActorCon 
                    cartData = {cartData}
                ></CartActorCon>
            </div>
    </>
    );
};

CartSide.propTypes ={
    cartData : PropTypes.array,
    countSalary : PropTypes.number,
    budget : PropTypes.number
}
export default CartSide;