import React from 'react';
import { Component } from 'react';

class AddNewSong extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewSong(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input type='text' name='title' onChange={this.handleChange} /> <br />
                <label>Artist</label>
                <input type='text' name='artist' onChange={this.handleChange} /> <br />
                <label>Album</label>
                <input type='text' name='album' onChange={this.handleChange} /> <br />
                <label>Release Date</label>
                <input type='text' name='release_date' onChange={this.handleChange} /> <br />
                <button type='submit'>Add Song</button>
            </form>
        )
    }
}
export default AddNewSong