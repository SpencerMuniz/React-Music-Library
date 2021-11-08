import React from 'react';
import { Component } from 'react';

const SearchBar = (props) => {
        return (
            <div>
                <form onSubmit={props.handleSubmit}>
                    <select name="field" onChange={props.onChange}>
                        <option select value="">Search</option>
                        <option value="title">Title</option>
                        <option value="album">Album</option>
                        <option value="artist">Artist</option>
                        <option value="release_date">Release Date</option>
                    </select>

                    <input onChange={props.onChange} name="searchWord" value={props.searchWord}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
}
export default SearchBar;