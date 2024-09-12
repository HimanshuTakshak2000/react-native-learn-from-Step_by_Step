import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

interface Get {
  id: string;
  name: string;
  class: string;
  age:string;
}


export default function App() {

  /* API Calling :- 
  Note :- 1) Get Method and Displaying USer List in scroll-view.
          2) First use this command - ipconfig to find the ip of your device.
          3) Then use this command - json-server --host 0.0.0.0 db.json to start the server.
          4) Then enter this - http://192.168.29.59:3000 url into the web where 192.168.29.59 is the ip of your device.
          2) http://192.168.29.59:3000/users --> now change the url as :- http://10.0.2.2:3000/users . To use into your code.
  */

  const [data, setData] = useState<Get[]| undefined>(undefined);

  const url = "http://192.168.1.6:3000/users"; // this url :- http://192.168.1.6:3000/users is working but this url :- http://10.0.2.2:3000/users
  const getAPIData = async()=>{ 
    const response = await fetch(url);
    const jsonresponse:Get[] = await response.json();
    // console.log("data :- ",jsonresponse);
    setData(jsonresponse);
  }

  useEffect(()=>{
    // console.log("hello 1");
    getAPIData();
  },[]);

  function renderItem({item}:any){
    return (
      <View style={{padding:10, borderBottomColor:'white', borderBottomWidth:1, marginBottom:15}}>
        <Text style={{fontSize:20, backgroundColor:'gray', padding:10,marginBottom:10,textAlign:'center' }}>id :- {item.id}</Text>
        <Text style={{fontSize:20 }}>Name :- {item.name}</Text>
        <Text style={{fontSize:20 }}>Class :- {item.class}</Text>
        <Text style={{fontSize:20,marginBottom:10 }}>Age :- {item.age}</Text>
      </View>
    )
  }

  return(
    <View style={{flex:1}}>
      <Text style={{fontSize:25, padding:10, backgroundColor:'skyblue',marginBottom:8}}>Crated JSON API and Show User-List Data  :- </Text>
      
      {
        data?
        <FlatList data={data} renderItem={renderItem}/>
        :null
      }
      
    </View>
  )
  
}
