import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../redux/CartReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Vibration} from 'react-native';

const AddToCartButton = ({product, isProductInCart, navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  const handleCartAction = () => {
    if (isProductInCart) {
      removeFromCartAndUpdateAsyncStorage();
    } else {
      addToCartAndUpdateAsyncStorage();
    }
  };

  const addToCartAndUpdateAsyncStorage = () => {
    dispatch(addToCart(product));

    Vibration.vibrate([200, 200, 200]);
    navigation.navigate('CartScreen');

    AsyncStorage.setItem('cart', JSON.stringify([...cart, product]))
      .then(() => {
        console.log('Product added to cart and saved to AsyncStorage');
      })
      .catch(error =>
        console.error('Error saving cart to AsyncStorage:', error),
      );
  };

  const removeFromCartAndUpdateAsyncStorage = () => {
    Alert.alert(
      'Remove from Cart',
      'Are you sure you want to remove this product from your Cart?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            dispatch(removeFromCart(product));

            const updatedCart = cart.filter(item => item.id !== product.id);

            AsyncStorage.setItem('cart', JSON.stringify(updatedCart))
              .then(() => {
                console.log(
                  'Product removed from Cart and updated in AsyncStorage',
                );
              })
              .catch(error =>
                console.error('Error updating Cart in AsyncStorage:', error),
              );
          },
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <TouchableOpacity style={styles.addToCartButton} onPress={handleCartAction}>
      <Text style={styles.addToCartButtonText}>
        {isProductInCart ? 'Remove from Cart' : 'Add to Cart'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addToCartButton: {
    backgroundColor: '#395e84',
    marginHorizontal: 30,
    marginBottom: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  addToCartButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AddToCartButton;
