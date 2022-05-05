import React, {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import SingleItem from "./SingleItem";

function SearchResults(){

    const [Data, fetchData] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();


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
    
    function filterData(value){     //search function

        if(location.state.searchBy == "Name" && value.name.toLowerCase() == location.state.input.toLowerCase())
            return true;            
        
        else if(location.state.searchBy == "Brewery type" && value.brewery_type.toLowerCase() == location.state.input.toLowerCase())
            return true;
            
        else if(location.state.searchBy == "City" && value.city.toLowerCase() == location.state.input.toLowerCase())
            return true;
            
        else if(location.state.searchBy == "State" && value.state.toLowerCase() == location.state.input.toLowerCase())
            return true;            

        else if(location.state.searchBy == "Country" && value.country.toLowerCase() == location.state.input.toLowerCase())
            return true;
        else
            return false;
    
    }
    return(
        <div>
            <div className="search-form">
                <button    
                    className="detail-btn2"             
                    onClick={() => {navigate("/")}}
                    >Go Back
                </button>
            </div>
            
            <div className = "main">
                
                {Data.filter(filterData).map((item) => {
                    return (
                        <SingleItem 
                            name = {item.name} 
                            brewery_type = {item.brewery_type}
                            street = {item.street}
                            city = {item.city}      
                            state = {item.state}
                            country = {item.country}
                        />
                        
                );})}
                
            </div>
        </div>
        
    );
}

export default SearchResults;