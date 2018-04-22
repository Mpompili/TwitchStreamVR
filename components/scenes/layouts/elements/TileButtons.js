import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';

//Element

class TileButtons extends React.Component {
  constructor(props){
    super(props);
  }

tile(input) {
  return (
    <View style={{ margin: 0.1, height: 0.6, backgroundColor: "#CAB9E5", borderWidth: this.props.borderWidths[input - 1], borderColor: "#A482DF", borderStyle: "solid"}}>
            <VrButton onClick={() => this.props.updateStage(input)}>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
  );
}

render() {
  console.log('MADE IT HERE BITCH');
  console.log(this.props.updateShowButton);
    return (
        <View style={{marginTop: -0.34, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          {this.tile(1)}
          {this.tile(2)}
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        
          {this.tile(3)}
          {this.tile(4)}
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          {this.tile(5)} 
          {this.tile(6)}
        </View>

     </View>
    );
  }
}
module.exports = TileButtons;