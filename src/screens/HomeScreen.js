import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import SectionItem from '../components/SectionItem';
import NewInItem from '../components/NewInItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addToCart, removeFromCart} from '../redux/CartReducer';
import {useDispatch} from 'react-redux';
import AdsBanner2 from '../components/AdsBanner2';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCart = async () => {
      try {
        const savedCart = await AsyncStorage.getItem('cart');
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart);
          parsedCart.forEach(product => {
            dispatch(addToCart(product));
          });
        }
      } catch (error) {
        console.error('Error loading cart from AsyncStorage:', error);
      }
    };

    loadCart();
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header navigation={navigation} />
        <SearchBar />
        <AdsBanner2 type="main" />
        <ProductCard navigation={navigation} />
        <SectionItem />
        <NewInItem />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f6',
  },
});

export default HomeScreen;
