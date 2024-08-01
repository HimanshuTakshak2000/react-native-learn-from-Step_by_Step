/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, View} from 'react-native';

const age = 20;
function f2() {
  return 'f2 function is called';
}
function App() {
  const name = 'Himanshu';
  return (
    // JSX :- It is javaScript Extension which allow use to write HTML Tag inside the Js code.
    <View>
      <Text style={{fontSize: 30, textAlign: 'center'}}>Name :- {name}</Text>
      <Text style={{fontSize: 30, textAlign: 'center'}}>Age :- {age}</Text>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        Calling the function :- {f2()}
      </Text>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        applying condition(is age greater than 18) :-
        {age > 18 ? 'True' : 'False'}
      </Text>
    </View>
  );
}

export default App;
