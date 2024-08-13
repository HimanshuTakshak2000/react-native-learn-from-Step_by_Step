/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {Text, View, TextInput, Button,StyleSheet, ScrollView} from 'react-native';
import AppStyleSheet from './Style/AppStyleSheet';

// Form in react-native :-

function App() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const [passwordText, setPasswordText] = useState('Show');
  const [secureTextEntryStatus, setSecureTextEntryStatus] = useState(true);
  const [buttonDisplay, setButtonDisplay] = useState(true);

  function handleSubmit(){
    // if(display === false){
    //   setDisplay(true);
    //   // setEmail('');
    //   // setName('');
    //   // setPassword('');
    // }
    // else{
    //   setDisplay(false);
    // }
    
    setDisplay(true);
    setButtonDisplay(false);
  }


  const handleClear = function(){
    setDisplay(false);
    setButtonDisplay(true);
    setEmail('');
    setName('');
    setPassword('');
  }

  const handleToggle = ()=>{
    if('Show' === passwordText){
      setPasswordText('Hide');
      setSecureTextEntryStatus(false);
    }
    else{
      setPasswordText('Show');
      setSecureTextEntryStatus(true);
    }
  }
  return (
    <ScrollView>
      <Text style={{textAlign:'center', fontSize:40,}}>Application Form</Text>

      <View style={AppStyleSheet.ViewBox1}>

        <View style={AppStyleSheet.ViewBox2}>
          <Text style={AppStyleSheet.textBox1}>Name</Text>
          <TextInput style={AppStyleSheet.textInput} placeholder='Enter Name' onChangeText={(text)=> setName(text)} value={name} />
        </View>

        <View style={AppStyleSheet.ViewBox2}>
          <Text style={AppStyleSheet.textBox1}>Email</Text>
          <TextInput style={AppStyleSheet.textInput} placeholder='Enter Email' onChangeText={(text)=> setEmail(text)} value={email} />
        </View>

        <View style={AppStyleSheet.ViewBox2}>
          <Text style={AppStyleSheet.textBox1}>Password</Text>

          <View style={internalStyleSheet.flexBoxView}>
            <TextInput style={AppStyleSheet.passwordInput} placeholder='Enter Password' onChangeText={(text)=> setPassword(text)} value={password} secureTextEntry={secureTextEntryStatus} />

            <Button title={passwordText} onPress={handleToggle}/>
            
          </View>
          
        </View>

        <View style={AppStyleSheet.ViewBox2}>
          <View>
            {buttonDisplay? <Button title='Submit' onPress={handleSubmit}/> : <Button title='clear' onPress={() => handleClear()}/>}
            
          </View>

        </View>

        
        
      </View>

      {
        display?
          <View 
          style={internalStyleSheet.submitDisplay}
          >
            <Text style={AppStyleSheet.textBox1}>Name :- {name}</Text>
            <Text style={AppStyleSheet.textBox1}>Email :- {email}</Text>
            <Text style={AppStyleSheet.textBox1}>Password :- {password}</Text>
          </View>
          :
          null
      }

    </ScrollView>
  );

  
}

const internalStyleSheet = StyleSheet.create({

  flexBoxView:{

    display:"flex", 
    flexDirection:'row', 
    justifyContent:"space-between", 
    alignItems:"center",
  },

  submitDisplay:{
    backgroundColor:"white", 
    marginTop:10, 
    padding:10
  }
});


export default App;
