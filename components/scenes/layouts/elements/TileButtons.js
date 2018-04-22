import React from 'react';
import {
  Text,
  Image,
  View,
  VrButton
} from 'react-vr';

//Element

class TileButtons extends React.Component {
  constructor(props){
    super(props);
  }

tile(input) {
  let previews = this.props.previews; 
  let bWidths = this.props.borderWidths; 
  return (
    <View style={{ margin: 0.1, height: 0.6, backgroundColor: "#CAB9E5"}}>
      <VrButton onClick={() => this.props.updateStage(input)}>
        <Image source={{uri: previews[input-1]}} style={{width: 1.01, height: 0.601, borderWidth: bWidths[input -1], borderColor: "#A482Df"}} /> 
      </VrButton>
    </View>
  );
}

render() {

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