import React, { useState } from 'react'
import { View,StyleSheet, Text, TextInput, KeyboardAvoidingView,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import BackButton from '../Components/BackButton'
import girl from '../assets/bubblegirl.png'
import emailIcon from '../assets/email.png'
import lockIcon from '../assets/password.png'
import eye from '../assets/passeye.png'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core"
import fbIcon from '../assets/fb.png'
import gIcon from '../assets/gicon.png'
import { Ionicons } from '@expo/vector-icons';
export default function Signup(){
    const navigation = useNavigation();
    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.backbtn}>
            <BackButton goBack={navigation.goBack} />
                </View>
                <View></View>
            <View>
            <Text style={styles.text}>Signup</Text>
            </View>
            </View>
            <View style={styles.footer}>
                <View>
                <Image source={girl} style={styles.welcome}/>
                <Ionicons style={{position:'absolute',right:160,top:-4}} name="add-circle-outline" size={36} color="#00FFFF" />
                </View>
            <View>
                <View>
                <Text style={styles.label}>First Name*</Text>
                </View>
                <View style={styles.input}>
                <Image
            source={emailIcon}
            style={styles.imageStyle} />
                <TextInput
                label="Text"
                placeholder='First Name'
                underlineColorAndroid="transparent"
                />
                </View>
                <View>
                <Text style={styles.label}>Last Name*</Text>
                </View>
                <View style={styles.input}>
                <Image
            source={emailIcon}
            style={styles.imageStyle} />
                <TextInput
                label="Text"
                placeholder='Last Name'
                underlineColorAndroid="transparent"
                />
                </View>
                <View>
                <Text style={styles.label}>Phone</Text>
                </View>
                <View style={styles.input}>
                <Image
            source={emailIcon}
            style={styles.imageStyle} />
                <TextInput
                label="Text"
                placeholder='Enter Your Phone'
                underlineColorAndroid="transparent"
                />
                </View>
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
            <TouchableOpacity style={{marginHorizontal:30}}>
            <LinearGradient  colors={['#F46D1F', '#9250A6']} start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }} style={styles.signin}>
          <Text style={styles.signinText}>Sign Up</Text>
          </LinearGradient>
      </TouchableOpacity>
      <View>
          <Text style={styles.orText}>- OR -</Text>
          </View>
      <View>
          <Text style={styles.signwithText}>Sign Up with</Text>
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
          <Text style={styles.signupText}>Already have an account? <TouchableOpacity onPress={()=>navigation.navigate('Signin')}><Text style={styles.signup}>Sign In</Text></TouchableOpacity></Text>
        </View>
      </View>
            </ScrollView>
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
        flex:1,
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
        flex:4,
        // backgroundColor: '#fff',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor:'#373F45'
    },
    welcome:{
            position:'absolute',
            top:-80,
            right:160
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
      
        signin:{
            textAlign:'center',
            alignContent:'center',
            alignItems:'center',
            width:350,
            height:56,
            borderRadius:20,  
            marginTop:50 
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