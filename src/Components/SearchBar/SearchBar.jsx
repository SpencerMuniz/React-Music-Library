import React from 'react';
import { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchWord: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterSongs(this.state.searchWord)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select name="field" onChange={this.handleChange}>
                        <option select value="">Search</option>
                        <option value="title">Title</option>
                        <option value="album">Album</option>
                        <option value="artist">Artist</option>
                        <option value="release_date">Release Date</option>
                    </select>

                    <input onChange={this.handleChange} name="searchWord"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
        }
}
export default SearchBar;