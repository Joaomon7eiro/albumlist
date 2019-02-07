import { ScrollView } from 'react-native'
import React, { Component } from 'react'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  state = {albums:[]}

  componentWillMount(){
    console.log('component will mount yes')

    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(data => this.setState({ albums: data}) )
  }

  renderAlbums(){
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)
  }

  render(){
    console.log(this.state.albums)
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
};



export default AlbumList;