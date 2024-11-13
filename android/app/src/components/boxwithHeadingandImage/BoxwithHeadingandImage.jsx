import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Images} from '../../assets/images/images';

function BoxWithHeadingAndImage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Image style={styles.image} source={Images.BIG_CART} />
    </View>
  );
}

export default BoxWithHeadingAndImage;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 0,
  },
  title: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 127,
    height: 50,
    resizeMode: 'contain',
  },
});
