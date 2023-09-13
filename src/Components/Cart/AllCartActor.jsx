import PropTypes from 'prop-types'
import './AllCartActor.css'
const AllCartActor = ({actor}) => {
    const {image, name} = actor
    console.log('line',actor)
    return (
        <div className='all-card-actor'>
            <div className='actor-card-info'>
                {
                    <img src={image} alt="" />
                }
                <h4>{name}</h4>
            </div>
        </div>
    );
};
AllCartActor.propTypes ={
    actor : PropTypes.object
}
export default AllCartActor;