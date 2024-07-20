import React from 'react';
import {Text, View, FlatList, StyleSheet, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart} from '../redux/CartReducer';
import {Vibration} from 'react-native';
import CartItem from '../components/CartItem';
import CustomHeader from '../components/CustomHeader';
import PromoCodeInput from '../components/PromoCodeInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ListScreen({navigation}) {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const removeFromCartAndUpdateAsyncStorage = item => {
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
            dispatch(removeFromCart(item));

            const updatedCart = cart.filter(item => item.id !== item.id);

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

  const renderItem = ({item}) => (
    <CartItem
      item={item}
      handleRemove={() => removeFromCartAndUpdateAsyncStorage(item)}
    />
  );

  return (
    <View style={styles.container}>
      <CustomHeader title={'My Cart'} navigation={navigation} />

      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListFooterComponent={
          <View>
            <PromoCodeInput
              placeholder={'Enter Coupon Code'}
              label={'Discount Code'}
            />
            <PromoCodeInput
              label={'Cobone Gift Card'}
              placeholder={'Gift Card Code'}
            />
          </View>
        }
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f6',
  },
  flatListContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
  },
});
