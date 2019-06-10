import React, { Component } from 'react'
import { View, ScrollView, Image, StyleSheet, Dimensions, Text, Animated, TouchableOpacity} from 'react-native';
const { width } = Dimensions.get('window');
export default class Rsa extends Component {
  // static navigationOptions = ({ navigation }) => ({
//     drawerIcon : ({tintColor}) => (
//       <Icon size={15} name="bell"  type="font-awesome" color={tintColor} />
//     )
// });
  render() {
    return (
      <React.Fragment>
          <ScrollView style={{backgroundColor:"#e8e8e8"}}>
          
      <View style={{flex: 1,height:"100%"}}>
        <View style={{flex: 2,backgroundColor: 'powderblue'}} />
        <View style={{flex: 0.5, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
          </ScrollView>
          </React.Fragment>
      
    )
  }
}
