import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native';


class Offers extends Component {
  constructor(props){
    super(props); 
  }
  render() {
    return (
      <React.Fragment>
          <ScrollView style={{padding:10}}>
              <View style={{alignItems:"center",marginTop:20}}>
                 <Text style={{fontSize:22,fontWeight:"bold"}}>We care for your pocket too!</Text>
              </View>
              <View>
              </View >
              <View style={{alignItems:"center",marginTop:40}}>
                 <Image source={require("../assets/hamburgerImages/customimagepng.png")} />
              </View>
              <View style={{alignItems:"center",marginTop:20}}>
                 <Text style={{fontSize:17,fontWeight:"bold"}}>Some Exclusive Offers Only for our customers</Text>
              </View>
              <View style={{borderBottomWidth:2,borderColor:"#dcdcdc",marginTop:15}}></View>
              <View style={{marginTop:20,marginLeft: 10,height:40,width:100,backgroundColor:"#015b63",alignItems:"center",justifyContent:"center"}}>
              <Text style={{color:"#ffffff"}}>SAVE 15</Text>
              </View>
              <View style={{marginTop:20,height:100,width:"100%",backgroundColor:"#f8f8f8",alignItems:"center",justifyContent:"center"}}>
              <Text style={{color:"#000000"}}>SAVE 15</Text>
              </View>
              <View style={{marginTop:20,marginLeft: 10,height:40,width:100,backgroundColor:"#015b63",alignItems:"center",justifyContent:"center"}}>
              <Text style={{color:"#ffffff"}}>SAVE 15</Text>
              </View>
              <View style={{marginTop:20,height:100,width:"100%",backgroundColor:"#f8f8f8",alignItems:"center",justifyContent:"center"}}>
              <Text style={{color:"#000000"}}>SAVE 15</Text>
              </View>
              <View style={{marginTop:20,marginLeft: 10,height:40,width:100,backgroundColor:"#015b63",alignItems:"center",justifyContent:"center"}}>
              <Text style={{color:"#ffffff"}}>SAVE 15</Text>
              </View>
              <View style={{marginTop:20,height:100,width:"100%",backgroundColor:"#f8f8f8",alignItems:"center",justifyContent:"center"}}>
              <Text style={{color:"#000000"}}>SAVE 15</Text>
              </View>
          </ScrollView>
      </React.Fragment>
    );
  }
}

export default Offers;
