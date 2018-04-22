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
        console.log('made it to dashboard');
        return (
            <View>
                <Pano source={asset('title.jpg')}/>
                <DashboardLayout showButton={this.props.showButton} text={this.props.text}/> 
            </View> 
        );
    }
}

module.exports = Dashboard; 