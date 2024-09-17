import { Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { colors } from '../utils/colors'
import logo from '../assets/myLogo.png'
import man from '../assets/newLogo.jpg'


const HomeScreen = () => {

const navigation = useNavigation();
const handleLogin = () => {
  navigation.navigate('Login')
}
const handleSignup = () =>{
    navigation.navigate('SignUP')
}

  return (
    <View style={styles.container}>
     
      <Image source={man} style={styles.man} />
      
      <Text style={styles.subtitle}>Seamlessly translating English videos into regional Indian languages.</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleLogin} style={[styles.loginButtonWrapper, { backgroundColor: colors.primary }]}>
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignup} style={styles.loginButtonWrapper}>
            <Text style={styles.signUpButtonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,
        alignItems:"center",
       // paddingTop:20
    },
    logo:{
        height:40,
        width:140,
        marginVertical:20,
        marginTop:50
        
    },
    man:{
        height:250,
        width:230,
        marginVertical:150,
        
    },
title:{
    fontSize:40,
    paddingHorizontal:20,
    textAlign:"center",
    fontWeight:"medium",
    color:colors.primary,
    marginTop:40
},
subtitle:{
    fontSize:18,
    textAlign:"center",
    color:colors.secondary,
    paddingHorizontal:20,
    marginVertical:10
},
buttonContainer:{
    flexDirection:"row",
    marginTop:20,
    borderWidth:2,
    borderColor:colors.primary,
    width:"80%",
    height:60,
    borderRadius:98
    
},
loginButtonWrapper:{
    justifyContent:"center",
    alignItems:"center",
    borderRadius:98,
    width:"50%"
},
loginButtonText:{
    color:colors.white,
    fontSize:18,
    fontWeight:"500"
},
signUpButtonText:{
     fontSize:18,
    fontWeight:"500"
}
})