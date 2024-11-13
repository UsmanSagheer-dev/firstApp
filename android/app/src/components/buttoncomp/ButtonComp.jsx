import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function Button(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.heading}>{props.heading}</Text>
    </TouchableOpacity>
  );
}
export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#81cc3d',
    paddingVertical: 10,
    width: '90%',
    paddingHorizontal: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'end',
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
