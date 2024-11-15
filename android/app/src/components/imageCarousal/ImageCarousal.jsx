import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Images } from '../../assets/images/images';

const { width } = Dimensions.get('window');

const data = [
  {
    id: '1',
    image: Images.DISHES,
    text: '20% off on your first purchase'
  },
  {
    id: '2',
    image: Images.DISHES,
    text: 'Buy one, get one free!'
  },
  {
    id: '3',
    image: Images.DISHES,
    text: 'Free delivery on all orders above $50'
  }
];

const ImageSlider = () => {
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.8}
        loop={true}
        autoplay={true}
        autoplayInterval={3000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: width * 0.8,
    height: width * 0.5,
    borderRadius: 10
  },
  text: {
    position: 'absolute',
    bottom: 20,
    color: '#fff',
    fontSize: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  }
});

export default ImageSlider;