import React from 'react'; 
import {
    Text,
    View,
    VrButton,
    Pano,
    asset
} from 'react-vr'; 
import TitleLayout from './layouts/TitleLayout.js'; 

class TitleScene extends React.Component {
    render() {
        return (
        <View>
            <Pano source={asset('title.jpg')}/> 
            {/* <TitleLayout showButton={this.props.showButton} text={this.props.text} />  */}
        </View>
        );
    }
}

module.exports = TitleScene; 

