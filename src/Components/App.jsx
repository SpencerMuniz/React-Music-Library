import React, { Component } from 'react';
import axios from 'axios';
import SongTable from './SongTable/SongTable';
import AddNewSong from './AddNewSong/AddNewSong';
import SearchBar from './SearchBar/SearchBar';
import './App.css'


class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            musicList: []
        }
    }

    set() {
        this.getMusic();
        this.deleteSong();
        this.addSong();
        this.filterMusic()
    }

    

    getMusic = async () => {
       let response = await axios.get("http://127.0.0.1:8000/music/");
       this.setState({
           musicList: response.data
       });
    }

    deleteSong = async (id) => {
        let response = await axios.delete("http://127.0.0.1:8000/music/" + id + "/");
        this.getMusic()
    }

    addSong = async (song) => {
        let response = await axios.post("http://127.0.0.1:8000/music/", song);
        this.getMusic()
    }

    filterMusic = async (searchWord) => {
        let filteredMusic = this.state.musicList.filter(function(song){
            if(song.title.includes(searchWord) || song.artist.includes(searchWord) || song.album.includes(searchWord) || song.release_date.includes(searchWord)){
                return true
            }
            else{
                return false;
            }
        })
        this.setState({
            musicList: filteredMusic
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.getMusic}>Click for songs!</button>
                <AddNewSong createNewSong={this.addSong} />
                <SongTable deleteSong={this.deleteSong} musicList={this.state.musicList} /> <br />
                <SearchBar filterSongs={this.filterMusic} />
            </div>
        )
    }
}

export default App;
