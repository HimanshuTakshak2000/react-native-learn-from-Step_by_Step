import React, { useState, useEffect } from 'react'
import { Button, View,Text } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(10);
  const [countProp1, setCountProp1 ] = useState(100);
  const [countProp2, setCountProp2 ] = useState(1000);

  /* 
  Note :- 1) We can use unlimited useEffect in single functional component.
          2) useEffect Hook take two argument i.e first is call back function and second is an array.
          3) useEffect Hook is called every time when state is updated, props are updated or UI is render for the first time. If we want useEffect is only called for the first time when UI is render then we have to use second argument of useEffect i.e an array either an empty array or array with the state in it as it's element.
          4) This is how useEffect will be called when props are updated. 
  */
  useEffect(() => {
    console.log('called first time')
  },[])

  useEffect(() => {
    console.log('-----------------> called when Count is updated')
  },[count])

  useEffect(() => {
    console.log('+++++++++++++ called when Data is updated')
  },[data])

  return (
    <>
    <Button
      title={`Increment Count :- ${count}`}
      onPress={() => {
        setCount(count + 1)
      }}
    />
    <View style={{marginTop:20}}>
    <Button
      title={`Increment Data :- ${data}`}
      color={'red'}
      onPress={() => {
        setData(data + 1)
      }}
    />
    </View>

    <View style={{marginTop:20}}>
    <Button
      title={`Increment CountProp1 :- ${countProp1}`}
      color={'skyblue'}
      onPress={() => {
        setCountProp1(countProp1 + 1)
      }}
    />
    </View>

    <View style={{marginTop:20}}>
    <Button
      title={`Increment CountProp2 :- ${countProp2}`}
      color={'blue'}
      onPress={() => {
        setCountProp2(countProp2 + 1)
      }}
    />
    </View>

    <PropComponent Prop = {{countProp1, countProp2}} />
    </>
  )
}


const PropComponent = ({Prop}:any) =>{

  useEffect(() => {
    console.log('========> called when CountProp1 is updated')
  },[Prop.countProp1])

  useEffect(() => {
    console.log('............ called when CountProp2 is updated')
  },[Prop.countProp2])

  useEffect(() => {
    console.log('=================== called Every time in PropComponent component ====================')
  },)

  useEffect(() => {
    console.log('///////////////////// called first time in PropComponent component //////////////////////')
  },[])

  return(
    <View style={{marginTop:20, alignItems:'center'}}>
      <Text style={{marginTop:5}}>
      count Prop 1 :- {Prop.countProp1}
    </Text>

    <Text style={{marginTop:5}}>
      count Prop 2 :- {Prop.countProp2}
    </Text>
    </View>
  )
}