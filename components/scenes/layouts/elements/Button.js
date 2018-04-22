import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';



class Button extends React.Component {
  render() {
    const showButton = this.props.showButton;
    return (
      <View>
        {showButton ? (
        <View style={{ margin: 0.1, height: 0.3, paddingHorizontal: 0.2, backgroundColor: '#A482DF', borderRadius: 0.1}}>
            <VrButton onClick={this.props.updateScene}>
                <Text style={{fontSize: 0.2, textAlign: 'center', color: "#FFFFFF"}}>
                {this.props.text}
                </Text>
            </VrButton>
        </View>
        ) : (
          <View></View>
        )} 
      </View>
    );
  }
}

module.exports = Button;