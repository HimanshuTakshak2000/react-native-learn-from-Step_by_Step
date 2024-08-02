/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const CompanyData = (prop) => {
  return (
    <View style={{backgroundColor:"red"}}>
      <Text style={{fontSize: 20}}> Company Name:- {prop.cname}</Text>
      <Text style={{fontSize: 20}}> Employee Name:- {prop.empName}</Text>
      <Text style={{fontSize: 20}}> Employee Id:- {prop.empId}</Text>
    </View>
  );
};
export default CompanyData;
