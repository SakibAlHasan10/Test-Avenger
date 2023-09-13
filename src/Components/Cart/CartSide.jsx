import PropTypes from 'prop-types'
import CardHeat from './CardHeat';
import './CartSide.css'
import CartSum from './CartSum';
const CartSide = ({countSalary}) => {
    return (
        <>
            <div className="cart-Container">
                <CardHeat></CardHeat>
            </div>
            <div className="project-budget">
                <CartSum countSalary={countSalary}
                ></CartSum>
            </div>
        </>
        );
};
CartSide.propTypes ={
    countSalary : PropTypes.number
}
export default CartSide;