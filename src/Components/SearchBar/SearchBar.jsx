import React from 'react';
import { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchWord: "",
            field: ""
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (string) => {
        string.preventDefault()
        this.props.filter(this.state.field, this.state.searchWord)
    }


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select name="field" onChange={this.onChange}>
                        <option select value="">Search</option>
                        <option value="title">Title</option>
                        <option value="album">Album</option>
                        <option value="artist">Artist</option>
                        <option value="release_date">Release Date</option>
                    </select>

                    <input onChnage={this.onChange} name="searchWord"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
export default SearchBar;