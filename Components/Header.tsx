import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  User: undefined; // Example screen, no params
  // Add other screens here with their params, for example:
  // Home: undefined;
  // Product: { id: number };
};


export default function Header() {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const cartData = useSelector((state:any) => state.reducer); // this state which is present in your useSelector Hook is not a state of component but it is state of redux. We can use any variable name other then state in this case. Also, in state.reducer, reducer come from the name given in the store.js file. 
  const [cartItem, setCartItem] = useState(0);
  // console.log(cartData);
  useEffect(()=>{
    setCartItem(cartData.length);
  },[cartData]);

  return (
    <View style={{backgroundColor:'skyblue', flexDirection:'row', justifyContent:'space-between'}}>
      <TouchableOpacity style={{ justifyContent:'center'}} onPress={()=> navigation.navigate('User')}>
        <Text style={{padding:10, backgroundColor:'gray', fontSize:20, marginHorizontal:8, borderRadius:20}}>
          Go To User List
        </Text>
      </TouchableOpacity>
      <Text style={{ padding:5, fontSize:30, backgroundColor:'pink', margin:10, color:'red', borderRadius:10}}>{cartItem}</Text>
    </View>
  )
}