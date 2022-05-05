import React, {useState, useEffect} from "react";
import SingleItem from "./SingleItem";

function Filter () {

    
    const [filterState, setFilterState] = useState("9");
    const [Data, fetchData] = useState([]);

    const getData = () => {
      fetch('https://api.openbrewerydb.org/breweries')
        .then((res) => res.json())
        .then((res) => {
            
          fetchData(res)
        })
    }
  
    useEffect(() => {
      getData()
    }, [])

    
    return(

        <div>
       
            <div class="dropdown">
                <button class="dropbtn">View : {filterState} items</button>
                    <div class="dropdown-content">
                        <p onClick={() => setFilterState("9")}>9</p>
                        <p onClick={() => setFilterState("All")}>All</p>
                </div>
            </div>
            <div className = "main">
                {Data.map((item, index) => {
                    if(filterState == "9" && index > 8) return null;      //return only 6 items by default
                    return (
                        <SingleItem 
                            name = {item.name} 
                            brewery_type = {item.brewery_type}
                            street = {item.street}
                            city = {item.city}      
                            state = {item.state}
                            country = {item.country}
                        />
                        
                    );
                
                })}
            </div>
        </div>
        
    );
}

export default Filter;