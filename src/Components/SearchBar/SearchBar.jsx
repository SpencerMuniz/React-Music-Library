import React from 'react';

const SearchBar = () => {
    return(
            <form action="/" method="get">
            <label htmlFor="header-search">
            <span className="visually-hidden">Search Music List</span>
            </label>
            <input type="text" id="header-search" placeholder="Search Music List" name="artist" 
        />
        <button type="submit">Search</button>
    </form>

    )
}
export default SearchBar;