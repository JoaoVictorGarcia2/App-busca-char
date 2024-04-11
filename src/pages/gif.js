import React from 'react';
import { Image } from 'react-native';


const Gif = () => (
  <Image
  className='portal'
    source={{uri: 'https://tenor.com/pt-BR/view/portal-rick-and-morty-gif-23586904.gif'}}
    style={{width: 205, height: 232, }}
  />
  
);

export default Gif;