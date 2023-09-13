import { useEffect } from "react";
import { useState } from "react";
import AllData from "./AllData";

const DataCall = () => {
    const [allData, setAllData] = useState([])
    useEffect(()=>{
        fetch('../../../public/data.json')
        .then(res => res.json())
        .then(data=> setAllData(data))
    },[]) 
    // console.log(data)
    return (
        <div>
            <AllData allData={allData}></AllData>
        </div>
    );
};

export default DataCall;