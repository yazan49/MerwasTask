import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {products} from '../helper/DummyData';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ProductCard = ({navigation}) => {
  const renderProductItem = ({item}) => (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductScreen', {product: item})}
        activeOpacity={0.8}>
        <Image source={{uri: item.imageUri}} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.description}</Text>
          <Text style={styles.price}>AED {item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.productsContainer}>
      <Text style={styles.title}>Unmissable Offers</Text>
      <FlatList
        data={products}
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={renderProductItem}
      />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  productsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  container: {
    width: windowWidth * 0.7,
    height: 230,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    shadowRadius: 2,
    elevation: 3,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 8,
  },
  details: {
    marginTop: 10,
    paddingVertical: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 8,
  },
  title: {
    paddingBottom: 15,
    fontWeight: '700',
    fontSize: 18,
  },
});

export default ProductCard;
