import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Logo from '../components/morni/Logo';
import {screenHeight} from '../constants/constants';
import CustomTextInput from '../components/morni/CustomTextInput';

export default function OTPScreen({route}: {route: string}) {
  const {countryCode, phoneNumber} = route.params;
  console.log('nnnn', phoneNumber);
  console.log('countryCode', countryCode);

  return (
    <View style={styles.main}>
      <Image source={require('../assets/otp.png')} style={styles.img} />
      <View style={styles.content}>
        <Text style={styles.label}>Phone Verification</Text>
        <Text style={styles.second}>A 4-digit code has been sent to </Text>
        <CustomTextInput value={phoneNumber} placeholder="" otp disabled />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    width: '100%',
    height: '30%',
  },
  content: {
    marginTop: screenHeight * 0.03,
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
  },
  second: {
    marginTop: screenHeight * 0.02,
    fontSize: 14,
    color: '#333',
  },
});
