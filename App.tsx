/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {Button, Text, View} from 'react-native';
import UserData from './Components/UserData';
import CompanyData from './Components/CompanyData';
import StudentData from './Components/StudentData';

// Button and onPress event in JS :-

function App() {
  const [name, setName] = useState('Himanshu');
  const [data,setData] = useState(23615);
  const [cName, setcName] = useState('DeepOrion')

  const messageHandler1 = () => {
    // console.warn('Press Here is clicked');
    if (name === 'Himanshu') {
      // console.warn('if ');
      setName('Takshak');
    } else {
      // console.warn('els');
      setName('Himanshu');
    }
  };

  const messageHandler2 = () => {
    // console.warn('Press Here is clicked');
    if (cName === 'DeepOrion') {
      // console.warn('if ');
      setcName('TCS');
    } else {
      // console.warn('els');
      setcName('DeepOrion');
    }
  };

  const messageHandler3 = () => {
    if (data === 23615) {
      
      setData(23576);
      
    } else {
      
      setData(23615);
     
    }
  };

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 20}}>
        Prop in React-Native :-
      </Text>

      <Text></Text>

      <Text style={{textAlign: 'center', fontSize: 20}}> Name :- {name}</Text>
      <Text style={{textAlign: 'center', fontSize: 10}}>
        Name updated through State
      </Text>
      <Button title="Update Name" onPress={messageHandler1} color={'green'} />

      <Text style={{textAlign: 'center', fontSize: 20}}> Using Prop in child component :-</Text>
      <UserData name = {name} age = '24' phoneNo = '9466305532' />

      <Text></Text>

      <Text style={{textAlign: 'center', fontSize: 20}}>Company Name :- {cName}</Text>
      <Text style={{textAlign: 'center', fontSize: 10}}>
        Company Name updated through State
      </Text>
      <Button title="Update Company Name" onPress={()=>messageHandler2()} color={'red'} />

      <Text style={{textAlign: 'center', fontSize: 20}}> Using Prop in child component :-</Text>
      <CompanyData cname = {cName} empId = '11223301' empName = 'Rahul Mor' />

      <Text></Text>

      <Text style={{textAlign: 'center', fontSize: 20}}>Student Id :- {data}</Text>
      <Text style={{textAlign: 'center', fontSize: 10}}>
        Student Name updated through State
      </Text>
      <Button title="Update Student Name" onPress={messageHandler3} color={"gray"} />

      <Text style={{textAlign: 'center', fontSize: 20}}> Using Prop in child component :-</Text>
      <StudentData stdId = {data} stdName = 'Vinay Kumar' age = '23' />

    </View>
  );
}

export default App;
