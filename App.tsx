import React, { useState, useEffect, useRef } from 'react'
import { Button, View,Text, TextInput } from 'react-native'

export default function App() {

  /* useRef
  Note :- 1) It create a mutable variable which will not re-render the components.
          2) To access a DOM element directly.
          3) UseEffect Hook is callled every time as component is update, state is updated or props are updated in the component.
          4) We can also change the value of text input using useRef hook.
  */

//   // It create a mutable variable which will not re-render the components.
//   const [data, setData] = useState('');
//   const count = useRef(0);
//   // console.log("count value using useRef :- ",count);
//   useEffect(()=>{
//     count.current = count.current+1;
//   })

//   return (
//     <View>
//       <TextInput placeholder='Enter Your Name' value={data} onChangeText={(text)=> setData(text)} style={{borderWidth:2, margin:10, borderColor:'white'}} />
//       {data !== ''? <Text style={{marginTop:10, color:'white', fontSize:24, marginLeft:5}}>Name :- {data}</Text>:null}
//       <Text style={{marginTop:10, color:'white', fontSize:24, marginLeft:5}}>How many time UI is re-render :- {count.current}</Text>
//     </View>
//   )


// To access a DOM element directly.
  const [data, setData] = useState('');
  const inputElemnt = useRef<TextInput>(null);
  const handlePress = ()=>{
    // console.log('inputElemnt :- ',inputElemnt.current);
    if (inputElemnt.current) {
      // Ensures inputElemnt.current is not null before using it
      inputElemnt.current.focus();
      inputElemnt.current.setNativeProps({
        style: {
          fontSize: 24,
          color: 'red',
          backgroundColor:'pink'
        },
      });
    }
  }

  return(
    <View>
      <TextInput placeholder='Enter Your Name' onChangeText={(text)=> setData(text)} style={{borderWidth:2, margin:10, borderColor:'white', }} ref={inputElemnt} />
      {data !== ''? <Text style={{marginTop:10, color:'white', fontSize:24, marginLeft:5}}>Name :- {data}</Text>:null}
      <View style={[data !== ''?{marginTop:10}:{marginTop:10},{marginHorizontal:15}]}>
        <Button title='Press To Change Style of Input Box' onPress={handlePress} />
      </View>

    </View>
  );


}


