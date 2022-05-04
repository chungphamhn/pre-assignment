import React from "react";

function SingleItem(props){
    return(
        <dev className = "content" key = { props.id }>
            <dev className = "content-item">
                <p>Name: { props.name }</p>
                <p>Brewery type: { props.brewery_type }</p>
                <p>City: { props.city } </p>                        
            </dev>
            <button 
                className="detail-button"
            >
                View Detail
            </button>
        </dev>
    );
}

export default SingleItem;