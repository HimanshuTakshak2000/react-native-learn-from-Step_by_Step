/* eslint-disable react-native/no-inline-styles */
import React, { ReactNode } from 'react';
import {Text, View} from 'react-native';

function UserData(param: {
  [x: string]: ReactNode; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; 
}) {
  return (
    <View style={{backgroundColor:"green"}}>
      <Text style={{fontSize: 20}}> Name:- {param.name}</Text>
      <Text style={{fontSize: 20}}> Age:- {param.age}</Text>
      <Text style={{fontSize: 20}}> Phone No:- {param.phoneNo}</Text>
    </View>
  );
}
export default UserData;
