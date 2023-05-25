import React from "react";

const SearchApp = ({searchChange}) => {
    return (
        <div className="tc">
            <input
                className="bg-light-blue pa3 mr2 shadow-5" 
                type="search" 
                placeholder="search robots" 
                onChange={searchChange}/>
        </div>
    )
}

export default SearchApp;