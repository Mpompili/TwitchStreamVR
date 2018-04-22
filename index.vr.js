import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

import TitleScene from './components/scenes/TitleScene.js';
import Dashboard from './components/scenes/Dashboard.js';
import VideoPlayer from './components/scenes/VideoPlayer.js';
import axios from 'react-native-axios'; 

export default class TwitchStreamVR extends React.Component {
  constructor(){
    super();
    this.state = {previews: '', IDs: ''}; 
  }

  componentWillMount() {
    axios.get('https://api.twitch.tv/kraken/streams/featured?limit=6&client_id=c2qnx4wrnjv1y2r3mj1nr1zs2h62iv')
      .then(response => {
        console.log('here');
        console.log(response); 
        this.gatherPreviews(response); 
        this.gatherStreamIds(response); 
      })
      .catch(e => {
        console.log(e); 
      });
  }

  gatherPreviews(response) {
    const previews = response.data.featured.map(function(feat) {
      return feat.stream.preview.large;
    });

    this.setState({previews: previews}); 
  }

  gatherStreamIds(response) {
    const IDs = response.data.featured.map(function(feat) {
      return feat.stream._id; 
    }); 

   this.setState({IDs: IDs});
  }

  render() {
    
    return (
      <View>
        <Dashboard previews={this.state.previews} showButton={false} text={"Select Environment"}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('TwitchStreamVR', () => TwitchStreamVR);

{/* <VideoPlayer showButton={true} text={"Back to Dashboard"}/>  */}
// {/* <TitleScene showButton={true} text={"Watch a Video"}/> */}