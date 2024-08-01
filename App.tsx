/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Button, Text, View} from 'react-native';

function App() {
  return (
    /* text -
    <Text>Hello</Text>
    // <Text></Text> // When we will use this we will get an error as it must we wrapped inside the view component
    */

    // //  View -
    // <View>
    //   <Text style={{fontSize: 30, textAlign: 'center'}}> Hello World</Text>
    //   <Text style={{fontSize: 20, textAlign: 'center'}}> What up </Text>
    //   {/* If we try to write text directly inside the view component. Wewill get error. */}
    // </View>

    /* <View>
    //   text ---> This will give an error.
    </View> */

    //  Button -
    <View>
      <Text style={{fontSize: 30, textAlign: 'center'}}> Hello World</Text>
      <Button title="Press Here" />
      {/* What is difference between HTML tag and a Component in react-native :- First letter of the component is also capital letter and where as first letter of the HTML tag is small letter. */}
    </View>
  );
}

export default App;
