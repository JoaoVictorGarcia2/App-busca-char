import React from 'react';
import { Image } from 'react-native';


const Gif = () => (
  <Image
  className='portal'
    source={{uri: 'https://tenor.com/view/portal-rick-and-morty-gif-23586904.gif'}}
    style={{width: 200, height: 200, }}
  />
  
);

export default Gif;