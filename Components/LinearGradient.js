import React from 'react'
import { StyleSheet,Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function ColorGradient({props}) {
  return (
    <LinearGradient  colors={['#F46D1F', '#9250A6']} start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }} style={styles.button}>
      <Text style={styles.text}>{props}</Text>
      </LinearGradient>
  )}
      
      const styles = StyleSheet.create({
        button:{
            width:228,
            height:56,
            borderRadius:20,
            marginTop:26
        },
      })