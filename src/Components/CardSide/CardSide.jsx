import PropTypes from 'prop-types'
import './CardSide.css'
const CardSide = ({data}) => {
    console.log(data)
    const {image, name, age, country, role, salary} = data;
    return (
        <div className='card'>
            <img src={image} alt="" />
            <h2>Name: {name}</h2>
            <h4>Age: {age}</h4>
            <h4>Salary: {salary}</h4>
            <h4>Role: {role}</h4>
            <h5>Country: {country}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nemo.</p>
        </div>
    );
};
CardSide.propTypes ={
    data : PropTypes.object
}
export default CardSide;