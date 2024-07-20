import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Header = ({navigation}) => {
  return (
    <View style={styles.row}>
      <View style={styles.cityContainer}>
        <Image source={require('../assets/loc.png')} style={styles.loc} />
        <Text style={styles.city}>Dubai</Text>
        <Image source={require('../assets/down.png')} style={styles.arrow} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image source={require('../assets/bellc.png')} style={styles.bell} />
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Image source={require('../assets/cart.png')} style={styles.bell2} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  cityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  city: {
    color: '#000000',
    fontSize: 21.38,
    fontWeight: 'bold',
    lineHeight: 25.1,
  },
  arrow: {
    width: 15,
    height: 20,
    marginLeft: 15,
    marginTop: 2,
  },
  loc: {
    width: 25,
    height: 25,
    marginRight: 15,
    resizeMode: 'contain',
  },
  bell: {
    marginRight: 10,
    width: 18.17,
    height: 22.98,
  },
  bell2: {
    marginRight: 10,
    marginHorizontal: 10,
    width: 18.17,
    height: 22.98,
  },
});

export default Header;
