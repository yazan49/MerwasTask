import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { primaryColor } from '../../constants/constants';

const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/morni.png')} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '35%',
    paddingTop:40, 
    backgroundColor:primaryColor
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Logo;
