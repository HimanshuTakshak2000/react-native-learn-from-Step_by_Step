import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

interface Get {
  id: number;
  title: string;
  body: string;
}


export default function App() {

  /* API Calling :- 
  Note :- 1) Get Method and Displaying USer List in scroll-view.
  */

  const [data, setData] = useState<Get[]| undefined>(undefined);

  const url = "https://jsonplaceholder.typicode.com/posts";
  const getAPIData = async()=>{
    const response = await fetch(url);
    const jsonresponse:Get[] = await response.json();
    // console.log("data :- ",jsonresponse);
    setData(jsonresponse);
  }

  useEffect(()=>{
    getAPIData();
  },[]);

  function renderItem({item}:any){
    return (
      <View style={{padding:10, borderBottomColor:'white', borderBottomWidth:1, marginBottom:15}}>
        <Text style={{fontSize:20, backgroundColor:'gray', padding:10,marginBottom:10,textAlign:'center' }}>id :- {item.id}</Text>
        <Text style={{fontSize:20 }}>Title :- {item.title}</Text>
        <Text style={{fontSize:20,marginBottom:10 }}>Body :- {item.body}</Text>
      </View>
    )
  }

  return(
    <View style={{flex:1}}>
      <Text style={{fontSize:25, padding:10, backgroundColor:'skyblue',marginBottom:8}}>User List From API :- </Text>
      
      {
        data?
        <FlatList data={data} renderItem={renderItem}/>
        :null
      }
      
    </View>
  )
  
}
