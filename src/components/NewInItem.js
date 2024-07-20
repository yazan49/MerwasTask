import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {newIn} from '../helper/DummyData';

const windowWidth = Dimensions.get('window').width;

const NewInItem = () => {
  const renderItem = ({item}) => (
    <View style={[styles.itemContainer, {width: windowWidth * 0.8}]}>
      <Image source={{uri: item.imageUri}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.title}>New In</Text>
        <Text style={styles.title2}>View All</Text>
      </View>
      <FlatList
        data={newIn}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderRadius: 10,
  },
  itemContainer: {
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.5,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '400',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  title: {
    paddingHorizontal: 25,
    fontWeight: '700',
    fontSize: 18,
  },
  title2: {
    paddingHorizontal: 25,
    fontWeight: '700',
    fontSize: 18,
    color: '#3d6189',
  },
});

export default NewInItem;
