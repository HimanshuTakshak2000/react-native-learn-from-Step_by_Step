import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

interface Get {
  id: number;
  title: string;
  body: string;
}


export default function App() {

  /* API Calling :- 
  Note :- 1) Get Method
  */

  const [data, setData] = useState<Get| undefined>(undefined);

  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const getAPIData = async()=>{
    const response = await fetch(url);
    const jsonresponse:Get = await response.json();
    // console.log("data :- ",jsonresponse);
    setData(jsonresponse);
  }

  useEffect(()=>{
    getAPIData();
  },[]);

  return(
    <View style={{flex:1}}>
      {
        data?
        <View style={{padding:10}}>
          <Text style={{fontSize:20}}>id :- {data.id}</Text>
          <Text style={{fontSize:20}}>Title :- {data.title}</Text>
          <Text style={{fontSize:20}}>Body :- {data.body}</Text>
          
        </View>
        :null
      }
    </View>
  )
  
}
