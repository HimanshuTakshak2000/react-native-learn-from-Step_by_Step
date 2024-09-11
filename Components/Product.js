import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addToCart, removeFromCart } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';

export default function Product({ item }) {
  const dispatch = useDispatch();
  const cartData = useSelector((cartState) => cartState.reducer);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    // When the cart data changes, check which items from `item` are in the cart
      const addedIds = cartData.map(cartItem => cartItem.id);
      const updatedAddedItems = item.map(eachItem => addedIds.includes(eachItem.id));
      setAddedItems(updatedAddedItems);
  }, [cartData]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); 
  }

  const handleRemoveFromCart = (item) => {
    // console.warn("remove to cart is called");
    dispatch(removeFromCart(item.id));
  }

  return (
    <ScrollView style={{ marginBottom: 60 }}>
      <View>
        {
          item.map((each, index) => (
            <View key={each.id} style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, marginVertical: 5, padding: 20 }}>
              <Text style={{color:'black', fontSize:28}}>{each.name}</Text>
              <Text style={{color:'black', fontSize:20}}>{each.price}</Text>
              <Text style={{color:'black', fontSize:20}}>{each.color}</Text>
              <Image style={{ height: 100, width: 100, resizeMode: 'contain' }} src={each.img} />

              {/* <TouchableOpacity style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10 }} onPress={()=>handleAddToCart(each)}>
                <Text style={{ color: 'black', fontSize: 15 }}>Add To Cart</Text>
              </TouchableOpacity> */}

              {addedItems[index] ?
                <TouchableOpacity style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10 }} onPress={() => handleRemoveFromCart(each)}>
                  <Text style={{ color: 'black', fontSize: 15 }}>Remove To Cart</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10 }} onPress={() => handleAddToCart(each)}>
                  <Text style={{ color: 'black', fontSize: 15 }}>Add To Cart</Text>
                </TouchableOpacity>
              }
            </View>
          )

          )
        }
      </View>

      {/* <View style={{ marginBottom: 60 }}>

      </View> */}

    </ScrollView>
  )
}