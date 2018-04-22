import React from 'react';
import {
  Text,
  View,
  Animated
} from 'react-vr';




class Title extends React.Component {
  constructor(){
    super();
    this.state = {
      fade: new Animated.Value(0),
      slam: new Animated.Value(3)
    };
  }

  // componentDidMount() {
  //   Animated.timing(
  //     this.state.fade,
  //     {toValue: 1, duration: 2000, delay: 3000}
  //   ).start();
  // }
  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slam,
          {
           toValue: 0,
           duration: 2000,
          
          }
        ),
        Animated.timing(
          this.state.fade,
          {
           toValue: 1,
           duration: 2000,
          
          }
        )
      ])
    ]).start();
  }

  render() {
    return (
      <View style={{ margin: 0.1}}>
        <Animated.Text style={{
          fontSize: 0.25,
          textAlign: 'center', 
          color: "#FFFFFF",
          opacity: this.state.fade,
          transform: [
            {translateZ: this.state.slam}
          ]
          }}>
            VR VIDEO APP
        </Animated.Text>

      </View>
    );
  }
}
module.exports = Title;

