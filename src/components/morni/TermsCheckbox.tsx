import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {primaryColor} from '../../constants/constants';
import Antdesign from 'react-native-vector-icons/AntDesign';

type TermsCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const TermsCheckbox = ({checked, onChange}: TermsCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const toggleCheck = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheck}>
        {isChecked ? (
          <Antdesign name="checksquare" size={20} color={primaryColor} />
        ) : (
          <Antdesign name="checksquareo" size={20} color={primaryColor} />
        )}
      </TouchableOpacity>
      <Text style={styles.text}>
        I accept{' '}
        <Text style={styles.link}>Morni Auction Terms and Conditions</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  checkboxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    fontSize: 13,
    color: '#808589',
    fontWeight: '600',
  },
  link: {
    textDecorationLine: 'underline',
    fontSize: 13,
    fontWeight: '100',
    color: primaryColor,
  },
});

export default TermsCheckbox;
