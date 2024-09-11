import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList} from '../Components/redux/action';

export default function User() {
  const dispatch = useDispatch();
  const userListData = useSelector((state:any)=> state.reducer);
  console.log("userListData :- ",userListData[0]);
  // let result;
  // if(userListData[0].users !== undefined){
  //   result = userListData[0].users;
  //   console.log("\nresult :- ",result);
  // }

  useEffect(() => {
    dispatch(getUserList());
  },[]);

  return (
    <View style={{flex:1}}>
      {/* <Text style={{color: 'black'}}>User</Text> */}
      {
        userListData.length?
        userListData.map((item:any)=>(<Text style={{color: 'black'}}>name</Text> ) )
        :null
      }
    </View>
  );
}
