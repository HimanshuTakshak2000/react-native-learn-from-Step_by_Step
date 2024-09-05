import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Button, View,Text, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  /* AsyncStorage
  Note :- 1) AsyncStorage is a data storage system in React Native that is unencrypted, asynchronous and allows users to persist data 
          offline in React Native apps.
          2) AsyncStorage is also asynchronous, meaning that its methods run concurrently with the rest of your code.
          3) AsyncStorage have data as key-value pairs.
          4) AsyncStorage data can be remove only three way i.e remove data through programming, uninstall the app and clear the cache & storage in setting option. Other then these option we can not remove data from asyncStorage.
          5) We can perform three main actions with AsyncStorage: Set, Get, and Delete: 
              a) Set sets or stores data in the async storage using the key-value pairs
              b) Get gets data values from the async storage using the key
              c) Delete deletes a particular piece of data or multiple pieces of data using the key
          6) Without these methods, we cannot perform these actions with AsycnStorage. These methods include: setItem(), multiSet(), getItem(), multiGet(), removeItem(), clear(), multiRemove(), mergeItem() and multiMerge().
          7) Async Storage can only store string data.
  */
  
  // ++++++++++++++++++++++++++   For Single Data   ++++++++++++++++++++++++++++++++++++++++++++++++ //
  // setItem() :- The setItem method saves data to the AsyncStorage and allows a key and a value. Here, the key is a string.

  const storeUser = async () => {
    const value = {
      name: "Chimezie",
      job: "Software Developer"
    };
    try {
      await AsyncStorage.setItem("user", JSON.stringify(value));
      console.warn('data set');
    } catch (error) {
      console.log(error);
    }
  };

  // getItem() :- The getItem() method allows us to get data back from AsyncStorage by using the key the data was saved as.
  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("user");
      if (savedUser !== null) {
        const currentUser = JSON.parse(savedUser);
        console.log(currentUser);
      } else {
        console.log("No user found");
      }
  
    } catch (error) {
      console.log(error);
    }
  };

  // mergeItem() :- The mergeItem method modifies or merges an existing value under a key by replacing the value with a new value.
  const mergeUser = async () => {
    const value = {
      name: "Innocent"
    };
    try {
      await AsyncStorage.mergeItem("user", JSON.stringify(value));
      console.warn('data set updated');
    } catch (error) {
      console.log(error);
    }
  };

  // removeItem() :- The removeItem() method removes data from AsyncStorage by using the key to delete the stored data.
  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem("user");
      console.warn('User Data remove');
    } catch (error) {
      console.log(error);
    }
  };

  // clear() :- The clear method deletes or removes all the data from AsyncStorage. It does not need a key because it deletes all the stored data.
  const clearData = async () => {
    try {
      const savedUser = await AsyncStorage.clear();
      console.warn('Clear Storage');
    } catch (error) {
      console.log(error);
    }
  };


  return (

    <View style={{margin:15}}>
      <Button title='Set Data' onPress={storeUser} />

      <View style={{marginTop:15}}>
        <Button title='Get Data' onPress={getUser} />
      </View>

      <View style={{marginTop:15}}>
        <Button title='Change Data' onPress={mergeUser} />
      </View>

      <View style={{marginTop:15}}>
        <Button title='Remove Data' onPress={removeUser} />
      </View>

      <View style={{marginTop:15}}>
        <Button title='Clear Storage' onPress={clearData} />
      </View>

    </View>

  );


  // // ++++++++++++++++++++++++++   For Multi Data   ++++++++++++++++++++++++++++++++++++++++++++++++ //
  // // multiSet() :- This method stores multiple key-value pairs at once. The multiSet method accepts and stores the data in arrays.
  // const storeMultipleData = async () => {
  //   const places = {
  //     name: "Abuja",
  //     country: "Nigeria"
  //   };
  
  //   const food = {
  //     name: "Spaghetti Pasta"
  //   };
  
  //   const firstData: [string, string] = ["places", JSON.stringify(places)];
  //   const secondData: [string, string] = ["food", JSON.stringify(food)];
  
  //   try {
  //     await AsyncStorage.multiSet([firstData, secondData]);
  //     console.warn('Multi data set');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // multiGet() :- The multiGet method, gets multiple pieces of data from AsyncStorage and returns an array of key-value pairs.
  // const getMultipleData = async () => {
  //   try {
  //     const savedData = await AsyncStorage.multiGet(["food", "places","city", "user"]);
  //     console.log(savedData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // multiMerge() :- The multiMerge method merges multiple pieces of existing data with new data and does so in a batch.
  // const mergeMultiData = async () => {
  //   const places = {
  //     name: "Mumbai",
  //     country: "India"
  //   };
  
  //   const food = {
  //     name: "Rice"
  //   };

  //   const user = {
  //     name: "Chimezie",
  //     job: "Software Developer"
  //   };

  //   const city ={
  //     name: "Mumbai",
  //   };

  //   const firstData: [string, string] = ["places", JSON.stringify(places)];
  //   const secondData: [string, string] = ["food", JSON.stringify(food)];
  //   const thirdtData: [string, string] = ["user", JSON.stringify(user)];
  //   const fourthData: [string, string] = ["city", JSON.stringify(city)];

  //   try {
  //     // await AsyncStorage.multiMerge([firstData, secondData, thirdtData, fourthData]);
  //     await AsyncStorage.multiMerge([thirdtData, fourthData]); //only user and city will be added if not present and updated if present.
  //     console.warn('multi data merge');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // multiRemove() :- This method removes or deletes multiple key-value pairs by deleting the data in a batch using an array of keys.
  // const multiRemoveData = async () => {
  //   try {
  //     await AsyncStorage.multiRemove(["places", "food"]);
  //     console.warn('Remove food and place')
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // clear() :- The clear method deletes or removes all the data from AsyncStorage. It does not need a key because it deletes all the stored data
  // const clearData = async () => {
  //   try {
  //     const savedUser = await AsyncStorage.clear();
  //     console.warn('Clear Storage');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // return (

  //   <View style={{margin:15}}>
  //     <Button title='Set Multi Data' onPress={storeMultipleData} />

  //     <View style={{marginTop:15}}>
  //       <Button title='Get Multi Data' onPress={getMultipleData} />
  //     </View>

  //     <View style={{marginTop:15}}>
  //       <Button title='Change Multi Data' onPress={mergeMultiData} />
  //     </View>

  //     <View style={{marginTop:15}}>
  //       <Button title='Remove Multi Data' onPress={multiRemoveData} />
  //     </View>

  //     <View style={{marginTop:15}}>
  //       <Button title='Clear Storage' onPress={clearData} />
  //     </View>

  //   </View>

  // );

}


