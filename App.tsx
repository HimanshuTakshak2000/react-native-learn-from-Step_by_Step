/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, View} from 'react-native';
import UserData from './Components/UserData';
import CompanyData from './Components/CompanyData';

// Component in JS :-

function App() {
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center'}}>Component :-</Text>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        UserData Component
      </Text>
      <UserData />
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        CompanyData Component
      </Text>
      <CompanyData />
    </View>
  );
}

export default App;
