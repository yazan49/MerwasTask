import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomButton from '../components/morni/CustomButton';
import CustomTextInput from '../components/morni/CustomTextInput';
import Logo from '../components/morni/Logo';
import TermsCheckbox from '../components/morni/TermsCheckbox';
import {Country} from 'react-native-country-picker-modal';
import {FONTFAMILYR, primaryColor, screenHeight} from '../constants/constants';
import {login} from '../redux/AuthSlice';
import {useDispatch} from 'react-redux';

export default function AuthScreen({navigation}: {navigation: any}) {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('+962');
  const [checked, setChecked] = useState<boolean>(false);

  const handleGetOtp = () => {
    if (checked && phoneNumber) {
      const number = countryCode + phoneNumber;
      const token = '#44444444';
      //dispatch(login({user: number, token}));
      console.log('sending this :', countryCode, phoneNumber);
      navigation.navigate('OTP', {countryCode, phoneNumber});
    }
  };

  const handleChecked = (isChecked: boolean) => {
    setChecked(isChecked);
  };

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
  };

  const handleCountrySelect = (country: Country) => {
    setCountryCode(`+${country.callingCode[0]}`);
  };

  return (
    <View style={styles.main}>
      <Logo />
      <View style={styles.container}>
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <CustomTextInput
            placeholder="790123456"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            onCountrySelect={handleCountrySelect}
          />
        </View>
        <CustomButton
          title="Get OTP"
          onPress={handleGetOtp}
          disabled={!checked}
        />
        <Text style={styles.guest}>Visit As Guest</Text>
        <TermsCheckbox checked={checked} onChange={handleChecked} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    margin: screenHeight * 0.04,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTFAMILYR,
  },
  inputContainer: {
    marginTop: screenHeight * 0.01,
    flexDirection: 'row',
  },
  guest: {
    fontSize: 18,
    color: primaryColor,
    marginTop: screenHeight * 0.04,
    alignSelf: 'center',
    fontWeight: '600',
  },
});
