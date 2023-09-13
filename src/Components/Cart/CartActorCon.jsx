import PropTypes from 'prop-types'
import AllCartActor from './AllCartActor';
const CartActorCon = ({cartData}) => {
    return (
        <div>
            {
                cartData.map((actor, idx) => <AllCartActor key={idx} 
                actor={actor}
                ></AllCartActor>)
            }
        </div>
    );
};
CartActorCon.propTypes ={
    cartData : PropTypes.array
}
export default CartActorCon;