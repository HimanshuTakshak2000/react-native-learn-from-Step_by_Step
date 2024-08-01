/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {Button, Text, View} from 'react-native';

// Button and onPress event in JS :-

function App() {
  const [name, setName] = useState('Himanshu');

  const messageHandler = () => {
    // console.warn('Press Here is clicked');
    if (name === 'Himanshu') {
      // console.warn('if ');
      setName('Takshak');
    } else {
      // console.warn('els');
      setName('Himanshu');
    }
  };

  const errorHandler = (err: string) => {
    console.warn(err);
  };
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 20}}>
        Button and onPress Event :-
      </Text>
      <Text style={{textAlign: 'center', fontSize: 30}}> Button 1</Text>
      <Text style={{textAlign: 'center', fontSize: 20}}> Name :- {name}</Text>
      <Button
        title="Press Here to Update Name"
        onPress={messageHandler}
        color={'green'}
      />
      {/* <Button title="Press Here" onPress={messageHandler()} color={'green'} /> --> We can not do this as it will called immediately when page UI is render and function is not bind using this type of declaration*/}

      <Text style={{textAlign: 'center', fontSize: 30}}> Button 2</Text>
      <Button
        title="Press Here"
        onPress={() => errorHandler('Some Message')}
        color={'red'}
      />
    </View>
  );
}

export default App;
