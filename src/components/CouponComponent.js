import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const CouponComponent = ({options}) => {
  const [quantities, setQuantities] = useState(options.map(() => 0));

  const decreaseQuantity = index => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, newQuantities[index] - 1);
    setQuantities(newQuantities);
  };

  const increaseQuantity = index => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choose Your Option:</Text>
      {options.map((item, index) => (
        <View key={item.id} style={styles.couponItem}>
          <Text style={styles.couponText}>{item.title}</Text>
          <View style={styles.quantityContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
              <TouchableOpacity onPress={() => decreaseQuantity(index)}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantities[index]}</Text>
              <TouchableOpacity onPress={() => increaseQuantity(index)}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
    marginTop: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  couponItem: {
    backgroundColor: '#fff',
    padding: 12,
  },
  couponText: {
    fontSize: 16,
    fontWeight: '500',
  },
  price: {
    fontSize: 17,
    fontWeight: '700',
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  quantityButton: {
    fontSize: 20,
    color: '#333',
    paddingHorizontal: 8,
    backgroundColor: '#f6f6f6',
    borderRadius: 15,
    marginHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
  },
  separator: {
    width: '90%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#333',
    alignSelf: 'center',
    marginTop: 14,
  },
});

export default CouponComponent;
