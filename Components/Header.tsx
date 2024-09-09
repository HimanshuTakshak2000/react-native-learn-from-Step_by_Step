import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';

export default function Header() {

  const cartData = useSelector((state:any) => state.reducer);
  const [cartItem, setCartItem] = useState(0);
  // console.log(cartData);
  useEffect(()=>{
    setCartItem(cartData.length);
  },[cartData]);

  return (
    <View style={{backgroundColor:'skyblue'}}>
      <Text style={{alignSelf:'flex-end', padding:5, fontSize:30, backgroundColor:'pink', margin:10, color:'red'}}>{cartItem}</Text>
    </View>
  )
}