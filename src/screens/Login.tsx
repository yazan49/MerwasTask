import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { products } from '../helper/DummyData';

class LoginScreen extends Component {
  renderCard = (item) => {
    
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.imageUri }} style={styles.image} />
        <Text style={styles.cardText}>{item.name}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <Swiper
        horizontalSwipe
          cards={products}
          renderCard={this.renderCard}
          cardIndex={0}
          backgroundColor={'transparent'}
          stackSize={4}
          showSecondCard={false}
          infinite
          onSwipedLeft={() => console.log('left')}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: 'white',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 22,
    marginTop: 10,
  },
});

export default LoginScreen;
