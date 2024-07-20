import React, {useEffect} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2000);
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../assets/background.png')}
        style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
      />
    </View>
  );
}
