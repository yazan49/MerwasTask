import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {sections} from '../helper/DummyData';
const SectionItem = () => {
  const renderSectionItem = ({item, index}) => {
    const secondIndex = index + 1;
    const secondItem = sections[secondIndex];

    return (
      <View style={styles.rowContainer}>
        <View style={styles.itemContainer}>
          <Image source={item.imageUri} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          {secondItem && (
            <View>
              <Image source={secondItem.imageUri} style={styles.image} />
              <Text style={styles.title}>{secondItem.title}</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sections}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={renderSectionItem}
        contentContainerStyle={styles.sectionList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  sectionList: {
    paddingHorizontal: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 10,
    width: 70,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 5,
    backgroundColor: '#f7f6fc',
    borderRadius: 40,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default SectionItem;
