import React, { useState, useEffect } from "react";
import Search from "./Search";
import Filter from "./Filter";


function MainPage (){   

   
    return (
        <div>
            <Search />
            <Filter />
            
        </div>
        
    );
}


export default MainPage;