import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const CartItem = ({item, handleRemove, handlePress}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageContainer}>
        <ImageBackground style={styles.img} source={{uri: item.imageUri}}>
          <TouchableOpacity
            onPress={() => handleRemove(item)}
            style={styles.removeButton}>
            <Text style={styles.removeButtonText}>x</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.detailsContainer}>
        {/* <Text style={styles.title}>{item.name}</Text> */}

        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.description}>{item.description2}</Text>

        <Text style={styles.price}>AED {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },

  price: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  removeButton: {
    paddingHorizontal: 5,
    alignSelf: 'flex-end',
    margin: 8,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default CartItem;
