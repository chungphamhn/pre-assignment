import React from "react";
import {useLocation, useNavigate} from "react-router-dom";

function ShowDetail (){

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="ShowDetail">
            <div>
                <p className="p1">Showing detail about each brewery</p>
                <p className="p2">
                    Name: {location.state.name} <br/>
                    Brewery Type: {location.state.brewery_type} <br/>
                    Street: {location.state.street}<br/>
                    Street: {location.state.street} <br/>
                    City: {location.state.city} <br/>
                    State: {location.state.state} <br/>
                    Country: {location.state.country}
                </p>
            </div>
            <button 
                className="detail-btn"
                onClick={() => navigate("/")}
                >Go Back
            </button>
        </div>
    );
}

export default ShowDetail;