import React from 'react';
import {
    Text,
    View,
    asset,
    Pano
} from 'react-vr'; 
import DashboardLayout from './layouts/DashboardLayout.js'; 

class Dashboard extends React.Component { 
    render() {

        return (
            <View>
                <Pano source={asset('title.jpg')}/>
                <DashboardLayout previews={this.props.previews} showButton={this.props.showButton} text={this.props.text}/> 
            </View> 
        );
    }
}

module.exports = Dashboard; 