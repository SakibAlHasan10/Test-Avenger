import PropTypes from 'prop-types'
import Data from "../Data/data";

const AllData = ({allData}) => {
    // console.log(data)

    return (
        <div>
            <h2>Test Avenger</h2>
            {
                allData.map((data, idx) =><Data key={idx} 
                data={data}></Data> )
            }
            
        </div>
    );
};
AllData.propTypes ={
    allData : PropTypes.array
}
export default AllData;