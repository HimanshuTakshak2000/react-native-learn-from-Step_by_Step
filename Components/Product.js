import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {addToCart} from './redux/action';
import {useDispatch} from 'react-redux'

export default function Product({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = (item)=>{
    // addToCart(item);
    // console.log("item :- ",item);
    dispatch(addToCart(item));
  }
  
  return (
    <ScrollView style={{ marginBottom: 60 }}>
      <View>
        {
          item.map((each) => (
            <View key={each.id} style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, marginVertical: 5, padding: 20 }}>
              <Text>{each.name}</Text>
              <Text>{each.price}</Text>
              <Text>{each.color}</Text>
              <Image style={{ height: 100, width: 100, resizeMode: 'contain' }} src={each.img} />
              <TouchableOpacity style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10 }} onPress={()=>handleAddToCart(each)}>
                <Text style={{ color: 'black', fontSize: 15 }}>Add To Cart</Text>
              </TouchableOpacity>
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