import React, {useCallback, useMemo, useEffect} from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import {images} from '../helper/DummyData';

const {width} = Dimensions.get('window');

const AdsBanner2 = ({ads, type = 'main'}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef(null);

  console.log('images : ', images);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % images.length;
      flatListRef.current?.scrollToOffset({
        offset: index * width,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  const CarouselCardItem = React.memo(({item, index, scrollX}) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });

    return (
      <View style={styles.itemStyle}>
        <Animated.Image
          source={{uri: item.imageUri}}
          style={[styles.image, {transform: [{scale}]}]}
        />
      </View>
    );
  });

  const renderItem = useCallback(
    ({item, index}) => (
      <CarouselCardItem item={item} index={index} scrollX={scrollX} />
    ),
    [scrollX],
  );

  const Pagination = () => {
    const dots = images.map((_, i) => {
      const opacity = scrollX.interpolate({
        inputRange: [(i - 1) * width, i * width, (i + 1) * width],
        outputRange: [0.3, 1, 0.3],
        extrapolate: 'clamp',
      });
      return <Animated.View key={i} style={[styles.dot, {opacity}]} />;
    });
    return <View style={styles.pagination}>{dots}</View>;
  };

  return (
    <View style={{...styles.container, height: type == 'product' ? 250 : 200}}>
      <Animated.FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      />
      <Pagination />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width,
    height: 200,
    alignItems: 'center',
    marginTop: 15,
  },
  itemStyle: {
    width,
    height: '100%',
    alignItems: 'center',
  },
  image: {
    width: '95%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    height: 5,
    width: 15,
    borderRadius: 5,
    backgroundColor: '#e1b555',
    marginHorizontal: 5,
  },
});

export default AdsBanner2;
