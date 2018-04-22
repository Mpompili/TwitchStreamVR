import React from 'react';
import {
    Text,
    View,
    asset,
    Pano
} from 'react-vr'; 
import VideoPlayerLayout from './layouts/VideoPlayerLayout.js'; 

class VideoPlayer extends React.Component {
    render() {
        return (
            <View> 
                <Pano source={asset('title.jpg')}/> 
                <VideoPlayerLayout showButton={this.props.showButton} text={this.props.text}/> 
            </View> 
        );
    }
}

module.exports = VideoPlayer; 