import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

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

  return(
    <View style={{flex:1}}>
      <Text style={{fontSize:25, padding:10, backgroundColor:'skyblue',marginBottom:8}}>User List From API :- </Text>
      <ScrollView>
      {
        data?
        data.map((item:any)=> <View key={item.id} style={{padding:15, borderBottomColor:"gray", borderBottomWidth:1,marginBottom:10}}>
          <Text style={{fontSize:20,backgroundColor:'white',color:'black',textAlign:'center',padding:8,marginBottom:14}}>id :- {item.id}</Text>
          <Text style={{fontSize:20}}>Title :- {item.title}</Text>
          <Text style={{fontSize:20, marginBottom:10}}>Body :- {item.body}</Text>

        </View>)
        :null
      }
      </ScrollView>
    </View>
  )
  
}
