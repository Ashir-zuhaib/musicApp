import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Paragraph(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    // lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    color:'#ffffff'
  },
})