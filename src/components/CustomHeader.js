import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const CustomHeader = ({title, navigation, type}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/left-arrow.png')}
          style={styles.backButton}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      {type === 'product' && (
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/like.png')}
            style={styles.cartIcon}
          />
          <Image
            source={require('../assets/share.png')}
            style={styles.cartIcon}
          />
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
            <Image
              source={require('../assets/cart.png')}
              style={styles.cartIcon}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    backgroundColor: '#f5f7f6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    opacity: 0.9,
  },
  backButton: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  cartIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 6,
  },
});

export default CustomHeader;
