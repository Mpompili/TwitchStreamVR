import React from 'react';
import {
  View
} from 'react-vr';
//Element
class ProgressCircle extends React.Component {
  constructor(){
    super();
  }
render() {
    return (
      //Outermost View
      <View style={{marginLeft: 0.25}}>
        <View
          style={{
            marginTop: -0.25,
            width: 0.2,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
            <View
            style={{
                margin: 0.1,
                width: 0.1,
                borderRadius: 1,
                height: 0.1,
                backgroundColor: this.props.color1
            }}
            >
            </View>

            <View
            style={{
                margin: 0.1,
                width: 0.1,
                borderRadius: 1,
                height: 0.1,
                backgroundColor: this.props.color2
            }}
            >
            </View>
        </View>
      </View>
    );
  }
}
module.exports = ProgressCircle;