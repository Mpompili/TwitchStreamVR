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

  componentWillMount() {
    axios.get('https://api.twitch.tv/kraken/streams/featured?limit=6&client_id=c2qnx4wrnjv1y2r3mj1nr1zs2h62iv')
      .then(response => {
        console.log(response); 
      })
      .catch(e => {
        console.log(e); 
      });
  }
  render() {
    console.log('made it to index');
    return (
      <View>
         <VideoPlayer showButton={true} text={"Back to Dashboard"}/> 
      </View>
    );
  }
}

AppRegistry.registerComponent('TwitchStreamVR', () => TwitchStreamVR);

{/* <Dashboard showButton={false} text={"Select Environment"}/> */}
// {/* <TitleScene showButton={true} text={"Watch a Video"}/> */}