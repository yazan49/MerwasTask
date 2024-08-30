import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, GestureResponderEvent } from 'react-native';
import { primaryColor, screenHeight } from '../../constants/constants';

interface CustomButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled? : boolean
}

const CustomButton = ({
  onPress,
  title,
  buttonStyle,
  textStyle,
  disabled = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[disabled ? styles.inActive : styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: primaryColor,
    marginTop:screenHeight * 0.04,
    padding: 10,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  inActive: {
    backgroundColor: '#b8aacd',
    padding: 10,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop:screenHeight * 0.04,
  },

  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default CustomButton;
