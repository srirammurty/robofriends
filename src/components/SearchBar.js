import React from "react";


const SearchBar = (props) => {

    return (
        <div>
            <input className="pa3 ba b--green bg-lightest-blue"
            type={'search'} placeholder={"search name"} onChange={props.searchEnter} />
        </div>

    );
}

export default SearchBar ;