import React, { useState, useEffect } from 'react'
import { Button, View,Text } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);

  /* 
  Note :- 1) We can use unlimited useEffect in single functional component.
          2) useEffect Hook take two argument i.e first is call back function and second is an array.
          3) useEffect Hook is called every time when state is updated, props are updated or UI is render for the first time. If we want useEffect is only called for the first time when UI is render then we have to use second argument of useEffect i.e an array either an empty array or array with the state in it as it's element.
          4) This is how useEffect will be called when props are updated. 
          5) useEffect Hook can be used as unmount when we use a function in return statment.
          6) Unmounting functionalty is usefull to terminate background function calling like set- timeout and set-interval which in the background.
  */
  useEffect(() => {
    console.log('called first time')
  },[])

  useEffect(() => {
    console.log('******************* called always ************************')
  },[])

  useEffect(() => {
    console.log('-----------------> called when Count is updated')
  },[count])

  return (
    <View style={{margin:20}}>
      <Button title={`Increase counter :- ${count}`} onPress={()=> setCount(count+1)} />
      <View>
        <Text style={{marginTop:10, fontSize:20, marginBottom:10}}>Unmounting of Component using useEffect :-</Text>
        <Button title={hide?'show Student Component':'Hide Student Component'} onPress={()=> setHide(!hide)} color={'green'} />
      </View>

      {hide? null:<Student />}
    </View>
  )
}


const Student = ()=>{

  let timer = setInterval(()=>{console.warn('Timer called in Student Component')},2000);
  // useEffect(() => {
  //   console.log('+++++++++++++ called always in student Component');
  //   return ()=>{console.log('################ called when component is unmount in student component')}
  // })

  // useEffect(() => {
  //   console.log('@@@@@@@@@@@@@@@@@@@@@@@ called first time only in student Component');
  //   return ()=>{console.log('%%%%%%%%%%%%%% called when component is unmount in student component')}
  // },[]);

  // useEffect(()=>{
  //   return ()=> clearInterval(timer);
  // })

  useEffect(()=>{
    return ()=> clearInterval(timer);
  }, [])

  return(
    <Text style={{color:'pink', fontSize:20, alignSelf:'center', marginTop:30}}>
      Student Component
    </Text>
  )
}