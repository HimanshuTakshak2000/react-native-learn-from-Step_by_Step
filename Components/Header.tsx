import { View, Text } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={{backgroundColor:'skyblue'}}>
      <Text style={{alignSelf:'flex-end', padding:10, fontSize:20}}>0</Text>
    </View>
  )
}