import React, { Component } from "react";
import SingleItem from "./SingleItem";
import Search from "./Search";


class MainPage extends Component{

    constructor(props) {
        super(props);
   
        this.state = {
            items: []
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
            "https://api.openbrewerydb.org/breweries")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json
                });
            })
    }

    render(){
        const {items } = this.state;
   
        return (
            <div>
                <Search />
                <div className = "main">
                    {items.map((item, index) => {
                        if(index > 5) return null;      //return only 6 items
                        return (
                            <SingleItem 
                                id = {item.id} 
                                brewery_type = {item.brewery_type}
                                name = {item.name}                                
                            />
                            
                        );
                    
                    })}
                </div>
            </div>
            
        );
    }
}

export default MainPage;