import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Replace this with a direct path to the image file for testing purposes
// Ensure the image file exists in the specified path
function FirstCard() {
  return (
    <View style={styles.card}>
      <Image 
        style={styles.image} 
        source={require('../../../assets/images/images')} // Replace with actual image path
      />
      <View style={styles.content}>
        <Text style={styles.title}>Card Title</Text>
        <Text style={styles.description}>
          This is a description of the card content. It gives more details about the topic shown.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
    padding: 15,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  content: {
    marginTop: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default FirstCard;
