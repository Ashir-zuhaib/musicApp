import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Background from '../Components/Background'
import Logo from '../Components/Logo'
import { LinearGradient } from 'expo-linear-gradient';
import Paragraph from '../Components/Paragraph'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Paragraph>
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
      graphic or web designs. The passage is attributed to an unknown
      </Paragraph>
      <TouchableOpacity  onPress={()=>navigation.navigate('Signin')}>
      <LinearGradient style={styles.button} colors={['#F46D1F', '#9250A6']} start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }} >
          <Text style={styles.text}>Sign In</Text>
          </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={styles.button1}>
          <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </Background>
    )}
    const styles = StyleSheet.create({
        text: {
          fontSize: 20,
          // lineHeight: 21,
          textAlign: 'center',
          marginTop:5,
          color:'#ffffff'
        },
        button:{
            width:228,
            height:56,
            borderRadius:20,
            marginHorizontal:78,
            marginTop:26
        },
        button1:{
            width:228,
            height:56,
            borderRadius:20,
            marginHorizontal:78,
            marginTop:16,
            borderWidth:2,
            borderColor:'#ffffff'
        }
      })