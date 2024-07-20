import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search coupon"
        placeholderTextColor="#7c8187"
      />
      <Image
        source={require('../assets/search2.png')}
        style={styles.searchIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    backgroundColor: '#edf2f8',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingLeft: 10,
    color: '#7c8187',
  },
  searchIcon: {
    width: 20,
    height: 18,
    marginLeft: 10,
    opacity: 0.8,
  },
});

export default SearchBar;
