import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Button, View,Text, TextInput } from 'react-native'
import NavBar from './Components/NavBar'

export default function App() {

  /* useCallback Hook
  Note :- 1) The useCallback hook is a React hook that allows you to cache a function and return a memoized version of it. This can be  
          used to optimize performance in React Native apps by avoiding unnecessary re-renders. It is similar to the useMemo hook but instead of returning a value, it returns a function.
          2) The useCallback hook takes two arguments: a function and an array of dependencies. The function is the callback that is memoized and the array of dependencies is used to determine when the memoized version of the callback should be recreated.
          3) The useCallback hook should be used when you need to memoize a callback function that is used multiple times. This can be used to optimize performance in React Native apps by avoiding unnecessary re-renders.
          4) In another word, if we apply use callback hook to a function then it will freez the re-rendering of this function and if we pass any element in the array in callback hook then it will only be render that elemnt has update and other case it will be freezed.
          5) If we pass any function as prop to component then it would be always different from the previous function even if we have not updated the function. So, the component is re-render everytime where we have used function as it's prop of the component.
          6) When the UI is re-render then function are re-created. This phenomena is called as referential equality in React JS.
          7) We can stop re-rendring of component if noting is updated i.e props using memo function with the class name.
  */

  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("Good");
  
  // function updateAdjective (){
  //   return "Very Good";
  // }

  const updateAdjective =  useCallback(()=>{
    return "Very Good";
  },[]); // if we pass count in the array then <Nav /> component will also be re-render for count update and if we do not write count then will not be re-render for count update.

  return (

    <View>
      <View style={{margin:15}}>
      {/* <NavBar adjective ={adjective} /> */}
        <NavBar adjective ={adjective} setAdjective={setAdjective} updateAdjective={updateAdjective} />
      </View>

      <View style={{margin:15}}>
        <Text style={{fontSize:20, marginBottom:10}}>Count :- {count}</Text>
        <Button title='Increase Counter' onPress={()=>setCount(count+1)}/>
      </View>

      <View style={{margin:15}}>
        <Text style={{fontSize:20, marginBottom:10}}>Adjective :- {adjective}</Text>
        <Button title='Increase Counter' onPress={()=> {
        if(adjective === 'Good'){
            setAdjective('Bad')
        }
        else{
            setAdjective('Good')
        }
      }}/>
      </View>

    </View>

  );

}


