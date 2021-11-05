import React, { Component } from 'react';
import axios from 'axios';
import SongTable from './SongTable/SongTable';
import AddNewSong from './AddNewSong/AddNewSong';


class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            musicList: [],
        }
    }

    mount() {
        this.getMusic();
        this.deleteSong();
        this.addSong();
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

    render(){
        return (
            <div>
                <button onClick={this.getMusic}>Click for songs!</button>
                <AddNewSong createNewSong={this.addSong} />
                <SongTable deleteSong={this.deleteSong} musicList={this.state.musicList} /> <br />
            </div>
        )
    }
}

export default App;
