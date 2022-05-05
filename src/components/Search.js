import React, {useState} from "react";
import {useNavigate} from "react-router-dom"; 

function Search(props){

    const [filterState, setFilterState] = useState("Name");
    const [inputValue, setValue] = useState("");
    let navigate = useNavigate();
    const navigateTo = () => {navigate("/search_results", {
        state: {
            searchBy: filterState,
            input: inputValue
        }
    })};


    function handleChange(e){
        setValue(e.target.value);
    }
    

    return(
        <dev>
            <dev className="search-form" > 
                <input 
                    className="input-field"
                    type="text"
                    autoComplete="off"
                    value={inputValue}
                    onChange={handleChange}
                >
            
                </input>
                <div class="search-dropdown">
                    <button class="search-dropbtn ">Search by: {filterState}</button>
                        <div class="dropdown-content">
                            <p onClick={() => setFilterState("Name")}>Name</p>
                            <p onClick={() => setFilterState("Brewery type")}>Brewery type</p>
                            <p onClick={() => setFilterState("City")}>City</p>
                            <p onClick={() => setFilterState("State")}>State</p>
                            <p onClick={() => setFilterState("Country")}>Country</p>
                    </div>
                </div>

                <button 
                    className="search-button"
                    onClick={navigateTo}
                >Search</button>
            </dev>
        </dev>
        
    );
}
export default Search;