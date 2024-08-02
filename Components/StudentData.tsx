/* eslint-disable react-native/no-inline-styles */
import React, { ReactNode } from 'react';
import {Text, View} from 'react-native';

function StudentData(message: { stdId: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; stdName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; age: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
  return (
    <View style={{backgroundColor:"gray"}}>
      <Text style={{fontSize: 20}}> Student Id:- {message.stdId}</Text>
      <Text style={{fontSize: 20}}> Student Name:- {message.stdName}</Text>
      <Text style={{fontSize: 20}}> Age:- {message.age}</Text>
    </View>
  );
}
export default StudentData;