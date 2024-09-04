import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Button, View,Text, TextInput } from 'react-native'
import NavBar from './Components/NavBar'

export default function App() {

  /* useLayoutEffect Hook
  Note :- 1) useLayoutEffect hook runs before the DOM is printed on the browser.
          2) When ever we want to run code before the DOM is printed such as height, width and Anyting related to layout.
          3) useLayoutEffect hook is syncrynous and useEffect hook is asyncronous.
          4) The most common use case of useLayoutEffect is to get the dimension of the layout. 
          4) useEffect hook runs after the DOM is printed on the browser.
          5) useLayoutEffect hook works exactly the same as useEffect(with same syntax).The only difference is when it run.
  */
  const [toggle, setToggle] = useState(false);

  useEffect(()=>{
    console.log('\n++++++++++ useEffect hook is called');
    // setTimeout(()=>{console.log('useEffect set time out ')},3000); // useEffect is asyncrynous
    console.log("end of useEffect hook ++++++++++\n");
  },[toggle]);

  useLayoutEffect(()=>{
    console.log('\n---------- useLayoutEffect hook is called');
    // setTimeout(()=>{console.log('useLayoutEffect set time out ')},3000); // useLayoutEffect is syncrynous
    console.log("end of useLayoutEffect hook ----------\n");
  },[toggle]);

  return (

    <View style={{margin:15}}>
      <Button title={toggle?"Hide":"Show"} onPress={()=> setToggle(!toggle)} />
        {toggle && <Text style={{marginTop:10, fontSize:20}}>Text is vissible</Text>}

    </View>

  );

}


