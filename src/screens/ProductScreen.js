import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from '../components/CustomHeader';
import CouponComponent from '../components/CouponComponent';
import {options} from '../helper/DummyData';
import AddToCartButton from '../components/AddToCartButton';

const ProductScreen = ({route, navigation}) => {
  const {product} = route.params;
  const cart = useSelector(state => state.cart.cart);
  const isProductInCart = cart.some(item => item.id === product.id);

  return (
    <View style={styles.container}>
      <CustomHeader navigation={navigation} type={'product'} />
      <ScrollView>
        <View style={{paddingHorizontal: 10}}>
          <Image source={{uri: product.imageUri}} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{product.description}</Text>
            <Text style={styles.price}> {product.description2}</Text>
          </View>
          <CouponComponent options={options} />
        </View>
      </ScrollView>
      <AddToCartButton
        product={product}
        isProductInCart={isProductInCart}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f6',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    backgroundColor: '#fff',
  },
  details: {
    paddingHorizontal: 2,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '400',
    color: '#555555',
  },
});

export default ProductScreen;
