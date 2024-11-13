import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import BoxWithHeadingAndImage from '../components/boxwithHeadingandImage/BoxwithHeadingandImage';
import {Images} from '../assets/images/images';
import Button from '../components/buttoncomp/ButtonComp';

function WelcomeScreen() {
  return (
    <ImageBackground
      source={Images.WELCOME_IMAGE}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.overlay}>
        <View>
          <BoxWithHeadingAndImage />
        </View>

        <Text style={styles.para}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button heading="Get started" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  overlay: {
    width: '100%',
    gap: 17,
    marginTop: 80,
    justifyContent: 'space-between',
  },
  para: {
    fontSize: 15,
    fontWeight: '500',
    color: '#868889',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
    lineHeight: 25,
    paddingHorizontal: 35,
    marginTop:"25px"
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});

export default WelcomeScreen;
