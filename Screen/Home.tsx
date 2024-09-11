import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Button, View,Text, TextInput } from 'react-native';
import Header from '../Components/Header';
import Product from '../Components/Product'

export default function Home() {
  
  const Data = [
    {
      id:1,
      name:'Samsung',
      price:40000,
      color:'White',
      img:'https://cdn4.iconfinder.com/data/icons/contact-us-68/70/URL__web__link__mobile__phone-1024.png',
    },
    {
      id:2,
      name:'iPhone',
      price:90000,
      color:'Green',
      img:'https://cdn4.iconfinder.com/data/icons/contact-us-68/70/URL__web__link__mobile__phone-1024.png',
    },
    {
      id:3,
      name:'Nokia',
      price:20000,
      color:'Black',
      img:'https://cdn4.iconfinder.com/data/icons/contact-us-68/70/URL__web__link__mobile__phone-1024.png',
    },
    {
      id:4,
      name:'Mi',
      price:10000,
      color:'Gray',
      img:'https://cdn4.iconfinder.com/data/icons/contact-us-68/70/URL__web__link__mobile__phone-1024.png',
    },
    {
      id:5,
      name:'Vivo',
      price:15000,
      color:'Black',
      img:'https://cdn4.iconfinder.com/data/icons/contact-us-68/70/URL__web__link__mobile__phone-1024.png',
    },
    {
      id:6,
      name:'1+',
      price:28000,
      color:'Blue',
      img:'https://cdn4.iconfinder.com/data/icons/contact-us-68/70/URL__web__link__mobile__phone-1024.png',
    }
  ]
        
  return (
    <View>
        {/* <Button title='' /> */}
        <Header />
        <Product item ={Data} />

    </View>
  );
}