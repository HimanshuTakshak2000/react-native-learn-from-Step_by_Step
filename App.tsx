/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import AppStyleSheet from './Style/AppStyleSheet';

// Inline, internal and external style in react-native :-

function App() {
  
  const [name, setName] = useState("");

  return (
    <View>
      <Text style={{fontSize:25, textAlign:'center'}}>Input Box in React-Native :-</Text>
      <Text></Text>

      <Text style={internalStyle.nameTextBox}>Name</Text>
      <TextInput placeholder='Enter Name' style={AppStyleSheet.nameInputBox} value={name} onChangeText={(text)=> setName(text)}/>

      <Text></Text>
      <Text style={{fontSize:25}}>Name is {name}</Text>
      <Button title='Reset Button' onPress={()=>{setName("")}}/>

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
  },

  nameTextBox:{
    fontSize:30,
    color:'lightblue',
    margin:5

  }
})

export default App;
