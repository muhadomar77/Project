import React, { Component } from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Alert,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  TextInput
} from "react-native";

export default class Homepage extends Component {
  render() {
    return (
      
      <ImageBackground
    //   source={{
    //     uri:
    //       "https://bit.ly/2SKokaP",
    //   }}
    source={require('./images/abcd.jpg')}

      style={styles.container}
    >
   
     
    
         <View >
         <Image source={require("../components/images/321.jpg")} style={{width:500,height:100}} />
         <Text style={styles.title}>
    Welcome
        </Text>
        <Text>{"\n"}</Text>
        
             
<Button
          color="#1F7698"
          title="MAP"
          onPress={() => this.props.navigation.navigate('Map')}
        /> 
        <Button
          color="#104357"
          title="Logout"
          onPress={() => this.props.navigation.navigate('Login')}
        />

         </View>
         

    </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent:"center",
    alignItems: "center",
    
    padding: 50,
    // backgroundColor: '#fff'
  },

  inputStyle: {
    width: '100%',
    marginBottom: 25,
    paddingBottom: 1,
    alignSelf: "center",
    height:30,
    width:125,
    borderColor: "black",
    // borderBottomWidth: 2,
    borderWidth:2,
    color:"black"
  },
  title: {
    textAlign: 'center',
    fontSize: 55,
    fontWeight: 'bold',
    padding: 40,
    color:"green"
    
  },



});