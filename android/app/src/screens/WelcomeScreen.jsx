import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import BoxWithHeadingAndImage from '../components/boxwithHeadingandImage/BoxwithHeadingandImage';
import { Images } from '../assets/images/images';

function WelcomeScreen() {
  return (
    <ImageBackground 
      source={Images.WELCOME_IMAGE} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <BoxWithHeadingAndImage />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
   
  },
  overlay: {

    width: '100%',
    height:200,
    marginTop: '100px',
   
   
  },
});

export default WelcomeScreen;
