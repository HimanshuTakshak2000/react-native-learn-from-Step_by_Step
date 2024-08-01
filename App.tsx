/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {Button, Text, View} from 'react-native';

// Button and onPress event in JS :-

function App() {
  const [name, setName] = useState('Himanshu');
  let data = 'Rahul';

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
    if (data === 'Rahul') {
      console.warn(data);
      data = 'Mor';
    } else {
      console.warn(data);
      data = 'Rahul';
    }
  };

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 20}}>
        State in React-Native :-
      </Text>

      <Text style={{textAlign: 'center', fontSize: 20}}> Name :- {name}</Text>
      <Text style={{textAlign: 'center', fontSize: 10}}>
        Name updated through State
      </Text>
      <Button title="Update Name" onPress={messageHandler1} color={'green'} />

      <Text style={{textAlign: 'center', fontSize: 20}}> Name :- {data}</Text>
      <Text style={{textAlign: 'center', fontSize: 10}}>
        Name updated through variable
      </Text>
      <Button title="Update Name" onPress={messageHandler2} color={'blue'} />
    </View>
  );
}

export default App;
