import React, {useState, useRef, useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import CountryPicker, {
  Country,
  FlagButton,
} from 'react-native-country-picker-modal';
import {
  screenWidth,
  screenHeight,
  primaryColor,
} from '../../constants/constants';

const {width, height} = Dimensions.get('window');

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  onCountrySelect,
  otp,
  disabled,
}: {
  placeholder: string;
  value: string;
  disabled?: boolean;
  otp?: boolean;
  onChangeText?: (text: string) => void;
  onCountrySelect?: (country: Country) => void;
}) => {
  const [country, setCountry] = useState<Country | null>(null);
  const [showCountryPicker, setShowCountryPicker] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [editMode, setEditMode] = useState(!disabled);

  const animatedWidth = useRef(new Animated.Value(0)).current;
  const animatedColor = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedWidth, {
      toValue: 1,
      duration: 600,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(animatedWidth, {
      toValue: 0,
      duration: 700,
      useNativeDriver: false,
    }).start();
  };

  const handleSelectCountry = (country: Country) => {
    setCountry(country);
    onCountrySelect?.(country);
    setShowCountryPicker(false);
  };

  const handleTextChange = (text: string) => {
    const isValidNumber = /^\d{9}$/.test(text);
    setIsValid(isValidNumber);
    Animated.timing(animatedColor, {
      toValue: isValidNumber ? 1 : 0,
      duration: 600,
      useNativeDriver: false,
    }).start();
    onChangeText?.(text);
  };

  const handleClearText = () => {
    onChangeText?.('');
  };

  useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: isFocused && !isValid ? 1 : 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [isFocused, isValid]);

  const widthInterpolation = animatedWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const colorInterpolation = animatedColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'green'],
  });

  const countryCode =
    country?.callingCode && country.callingCode.length > 0
      ? `+${country.callingCode[0]}`
      : '+962';

  const handleEditButtonPress = () => {
    if (editMode) {
      // Save changes
      setEditMode(false);
    } else {
      // Enable editing
      setEditMode(true);
    }
  };

  return (
    <View style={[styles.inputContainer, {width: otp ? '70%' : '100%'}]}>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => !disabled && setShowCountryPicker(true)}
          style={styles.countryCodeContainer}>
          <FlagButton
            countryCode={country?.cca2 ? country.cca2 : 'JO'}
            placeholder=""
          />
          <Text style={styles.countryCode}>{countryCode}</Text>
        </TouchableOpacity>
        <View style={styles.textInputWrapper}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={handleTextChange}
              placeholderTextColor={'#c5c5c5'}
              style={styles.input}
              keyboardType="number-pad"
              onFocus={handleFocus}
              onBlur={handleBlur}
              editable={editMode}
            />
            {value.length > 0 && !otp && !isValid && (
              <TouchableOpacity
                onPress={handleClearText}
                style={styles.clearButton}>
                <Text style={styles.clearButtonText}>X</Text>
              </TouchableOpacity>
            )}
            {otp && (
              <TouchableOpacity
                onPress={handleEditButtonPress}
                style={{alignSelf: 'center'}}>
                <Text style={{color: primaryColor}}>
                  {editMode ? 'Save' : 'Change'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <Animated.View
            style={[
              styles.underline,
              {
                width: widthInterpolation,
                backgroundColor: colorInterpolation,
              },
            ]}
          />
        </View>
      </View>
      <Animated.View
        style={[
          styles.validationText,
          {
            opacity: animatedOpacity,
          },
        ]}>
        {isFocused && !isValid && (
          <Text style={styles.validationText}>Invalid phone number</Text>
        )}
      </Animated.View>
      {showCountryPicker && (
        <CountryPicker
          withFilter
          withFlag
          withCountryNameButton
          withCallingCode
          withAlphaFilter
          onSelect={handleSelectCountry}
          onClose={() => setShowCountryPicker(false)}
          visible={showCountryPicker}
          containerButtonStyle={styles.countryPickerContainer}
          countryCode={country?.cca2 || 'SA'}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: screenHeight * 0.01,
    paddingHorizontal: screenWidth * 0.02,
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    paddingVertical: 8,
  },
  countryCode: {
    fontSize: 16,
    color: '#333',
  },
  textInputWrapper: {
    flex: 1,
    position: 'relative',
  },
  input: {
    flex: 1,
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  underline: {
    height: 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  validationText: {
    color: 'red',
    textAlign: 'center',
    width: '100%',
  },
  countryPickerContainer: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    zIndex: 1000,
    width: '60%',
    height: height * 0.5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  // existing styles...
  clearButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{translateY: -12}],
    backgroundColor: 'red',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CustomTextInput;
