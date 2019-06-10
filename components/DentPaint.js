import React, { Component } from 'react'
import { View, ScrollView, Image, StyleSheet, Dimensions, Text, Animated, TouchableOpacity} from 'react-native';

const { width } = Dimensions.get('window');
export default class DentPaint extends Component {
//   static navigationOptions = ({ navigation }) => ({
//     drawerIcon : ({tintColor}) => (
//       <Icon size={15} name="bell"  type="font-awesome" color={tintColor} />
//     )
// });
  render() {
    return (
      <View>
        <Text>Dent and paint</Text>
      </View>
    )
  }
}
