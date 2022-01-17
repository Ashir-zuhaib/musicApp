import React, { useState } from 'react'
import { View,StyleSheet, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import backArrow from '../assets/back.png'
import BackButton from '../Components/BackButton'
import emailIcon from '../assets/email.png'
import lockIcon from '../assets/password.png'
import eye from '../assets/passeye.png'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import fbIcon from '../assets/fb.png'
import gIcon from '../assets/gicon.png'
import { useNavigation } from "@react-navigation/core"
export default function Signin(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.backbtn}>
            <BackButton goBack={navigation.goBack} />
                </View>
                <View></View>
            <View>
            <Text style={styles.text}>Signin</Text>
            </View>
            </View>
            <View style={styles.footer}>
                <View>
                <Text style={styles.welcome}>Welcome</Text>
                </View>
            <View>
                <View>
                <Text style={styles.label}>Email</Text>
                </View>
                <View style={styles.input}>
                <Image
            source={emailIcon}
            style={styles.imageStyle} />
                <TextInput
                label="Email"
                placeholder='Enter Your Email'
                underlineColorAndroid="transparent"
                />
                </View>
                <View >
                <Text style={styles.label}>Password</Text>
                </View>
                <View style={styles.input}>
                <Image
            source={lockIcon}
            style={styles.imageStyle} />
                <TextInput
                label="password"
                placeholder='**********'
                 />
                <Image
            source={eye}
            style={styles.imageStyle1} />
                </View>
            </View>
            <View style={styles.forgotPassword}>
        <TouchableOpacity >
         <Text style={styles.forgotText}><MaterialCommunityIcons name="checkbox-blank-outline" size={14} color="white" />Remeber me</Text>
        </TouchableOpacity>
        <TouchableOpacity        >
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')} style={{marginHorizontal:30}}>
            <LinearGradient  colors={['#F46D1F', '#9250A6']} start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }} style={styles.signin}>
          <Text style={styles.signinText}>Sign In</Text>
          </LinearGradient>
      </TouchableOpacity>
      <View>
          <Text style={styles.orText}>- OR -</Text>
          </View>
      <View>
          <Text style={styles.signwithText}>Sign in with</Text>
        </View>
        <View style={styles.socialRow}>
        <TouchableOpacity style={styles.social} >
            <Text style={styles.socialText}><Image source ={fbIcon} />Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.social} >
            <Text style={styles.socialText}><Image source ={gIcon} />Google</Text>
        </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.signupText}>Don't have account? <TouchableOpacity onPress={()=>navigation.navigate('Signup')}><Text style={styles.signup}>Sign Up</Text></TouchableOpacity></Text>
        </View>
      </View>
            </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1E272E',
        marginTop:40
    },
    backbtn:{
        height:35,
        width:35,
        backgroundColor:'#373F45',
        paddingTop:8,
        paddingLeft:8

    },
    text:{
        color:'#ffffff',
        fontSize:18
        // flexDirection:'row',
    },
    header:{
        flex:0.8,
        flexDirection:'row',
        marginTop:20,
        // justifyContent:'space-around'
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 50
        // position: 'absolute',
        // top: 40 + getStatusBarHeight(),
        // left: 4,
    },
    footer:{
        flex:6,
        // backgroundColor: '#fff',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor:'#373F45'
    },
    welcome:{
            textAlign:'center',
            fontSize:22,
            color:'#ffffff',
    },
    label:{
        fontSize:14,
        color:'#ffffff',
        marginVertical:10,
        marginHorizontal:20
    },
    input:{
        height:55,
        width:365,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderRadius:10,
    // borderColor: '#000',
    marginVertical:5,
    backgroundColor:'#50575C',
        marginVertical:10,
        marginHorizontal:20
    },
    imageStyle: {
        padding: 10,
        margin: 10,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
    imageStyle1: {
        padding: 10,
        margin: 10,
        marginLeft: 180,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'flex-end',
      },
      forgotText:{
        color:'#ffffff',
        fontSize:14
    },
      forgotPassword:{
          flex:1,
          flexDirection:'row',
          justifyContent:'space-around',
          marginHorizontal:5
        },
        signin:{
            textAlign:'center',
            alignContent:'center',
            alignItems:'center',
            width:350,
            height:56,
            borderRadius:20,   
        },
        signinText:{
            alignItems:'center',
            color:'#ffffff',
            fontSize:16,
            fontWeight:'bold',
            paddingTop:10,
        },
        orText:{
            fontSize:20,
            color:'#fff',
            marginHorizontal:"40%",
            marginVertical:34,
        },
        signwithText:{
            fontSize:14,
            color:'#fff',
            marginLeft:145,
            // marginVertical:64,
        },
        socialRow:{
            flexDirection:'row',
            justifyContent:'space-around',
            marginVertical:28,
        },
        social:{
            width:155,
            height:56,
            flexDirection:'row',
            // alignContent:'center',
            backgroundColor:'#1E272E',
            borderRadius:20,
        },
        socialText:{
            color:'#fff',
            marginLeft:35,
            marginTop:10
        },
        signupText:{
            color:'#fff',
            marginLeft:'20%',
            fontSize:16,
            marginBottom:10
        },
        signup:{
            color:'#fff',
            textDecorationLine: 'underline',
        }

})