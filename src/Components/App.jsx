import React, { Component } from 'react';
import axios from 'axios';
import SongTable from './SongTable/SongTable';
import AddNewSong from './AddNewSong/AddNewSong';
import SearchBar from './SearchBar/SearchBar';


class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            musicList: [], searchWord: "", field: ""
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

    filterMusic = (field, searchWord) => {
        console.log(field);
        console.log(searchWord);
        let results = this.state.musicList.filter(function(song){
            if(song[field] === searchWord){
                return true
            }
        })
        this.setState({
            musicList: results
        })
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (string) => {
        string.preventDefault()
        this.state.musicList.filterMusic(this.state.field, this.state.searchWord)
    }

    render(){
        return (
            <div>
                <button onClick={this.getMusic}>Click for songs!</button>
                <AddNewSong createNewSong={this.addSong} />
                <SongTable deleteSong={this.deleteSong} musicList={this.state.musicList} /> <br />
                <SearchBar filter={this.filterMusic} musicList={this.state.musicList} filterMusicList={this.filterMusicList} onChange={this.onChange} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App;
