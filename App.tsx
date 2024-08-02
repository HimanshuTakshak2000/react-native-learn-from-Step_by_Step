/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {Text, View,StyleSheet} from 'react-native';
import AppStyleSheet from './Style/AppStyleSheet';

// Inline, internal and external style in react-native :-

function App() {
  

  return (
    <View>
      <Text style={{fontSize:25, textAlign:'center'}}>Inline, Internal and External Style in React-Native :- </Text>
      <Text></Text>
      <Text style={{fontSize:25, textAlign:'center'}}>Inline Style -</Text>
      <Text style={{fontSize:25, textAlign:'center', backgroundColor:'skyblue', color:'red', borderColor:'white', margin:15,padding:5, borderRadius:8, borderWidth:2 }}>Some Text </Text>

      <Text></Text>

      <Text style={internalStyle.textBox2}>Internal Style -</Text>
      <Text style={internalStyle.textBox1}>Some Text </Text>

      <Text></Text>

      <Text style={AppStyleSheet.textBox1}>External Style -</Text>
      <Text style={AppStyleSheet.textBox2}>Some Text </Text>

      <Text></Text>
      
      <Text style={AppStyleSheet.textBox1}>All Style(inline, external and internal) -</Text>
      <Text style={[AppStyleSheet.textBox3,internalStyle.textBox3,{fontSize:10, textAlign:'center'}]}>Some Text </Text>

    </View>
  );
}

const internalStyle = StyleSheet.create({
  textBox1:{
    fontSize:25, 
    backgroundColor:'blue', 
    color:'pink', 
    borderColor:'red',
    margin:15,
    padding:5, 
    borderRadius:8, 
    borderWidth:2,
    height:100,
    textAlignVertical:'center',
    textAlign:'center'
  },

  textBox2:{
    fontSize:20,
    textAlign:'center'
  },

  textBox3:{
    backgroundColor:'purple', 
    color:'orange', 
    margin:10,
    padding:10, 
    borderColor:'green',
  }
})

export default App;
