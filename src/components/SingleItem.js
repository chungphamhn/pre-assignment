import React from "react";
import {useNavigate} from "react-router-dom"; 

function SingleItem(props){

    let navigate = useNavigate();
    const detail = () => {navigate("/detail", {
        state: {
            name: props.name,
            brewery_type: props.brewery_type,
            street: props.street,
            city: props.city,
            state: props.state,
            country: props.country
        }})};
        
    return(
        <dev className = "content" key = { props.id }>
            <dev className = "content-item">
                <p>Name: { props.name }</p>
                <p>Brewery type: { props.brewery_type }</p>
                <p>City: { props.city } </p>                        
            </dev>
            <button 
                className="detail-button"
                onClick={detail}
            >
                View Detail
            </button>
        </dev>
    );
}

export default SingleItem;