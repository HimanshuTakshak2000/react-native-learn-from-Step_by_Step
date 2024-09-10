import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';

export default function Header() {

  const cartData = useSelector((state:any) => state.reducer); // this state which is present in your useSelector Hook is not a state of component but it is state of redux. We can use any variable name other then state in this case. Also, in state.reducer, reducer come from the name given in the store.js file. 
  const [cartItem, setCartItem] = useState(0);
  // console.log(cartData);
  useEffect(()=>{
    setCartItem(cartData.length);
  },[cartData]);

  return (
    <View style={{backgroundColor:'skyblue'}}>
      <Text style={{alignSelf:'flex-end', padding:5, fontSize:30, backgroundColor:'pink', margin:10, color:'red', borderRadius:10}}>{cartItem}</Text>
    </View>
  )
}