import { View, Text, Button } from 'react-native'
import React,{memo} from 'react'

// function NavBar({adjective}:any) {
function NavBar({adjective,setAdjective,updateAdjective}:any) {
    console.log('child component is render again');
  return (
    
    <View>
      <Text style={{fontSize:20, marginBottom:10}}>This Nav Bar is :- {adjective}</Text>

      <Button title={updateAdjective()} onPress={()=> {
        if(adjective === 'Good'){
            setAdjective('Bad')
        }
        else{
            setAdjective('Good')
        }
      }} />
    </View>
  )
}

export default memo(NavBar);

// if we update props the memo will not work i.e if we pass function as prop then memo is not working.