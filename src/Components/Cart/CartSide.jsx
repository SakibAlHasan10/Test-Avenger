import PropTypes from 'prop-types'
import CardHeat from './CardHeat';
import './CartSide.css'
import CartSum from './CartSum';
import CartActorCon from './CartActorCon';
const CartSide = ({cartData, countSalary}) => {
    return (
        <>
            <div className="cart-Container">
                <CardHeat></CardHeat>
            </div>
            <div className="project-budget">
                <CartSum countSalary={countSalary}
                ></CartSum>
                
            </div>
            <div>
                <h2>bangladesh</h2>
                <CartActorCon 
                    cartData = {cartData}
                ></CartActorCon>
            </div>
    </>
    );
};

CartSide.propTypes ={
    cartData : PropTypes.array,
    countSalary : PropTypes.number
}
export default CartSide;